/**
 * Real, deterministic financial analytics computed from the actual
 * transaction/budget data -- not hardcoded strings. Every function here
 * reads real numbers and computes a real result each time it's called,
 * so it stays correct if the underlying data changes.
 *
 * This is rule-based analytics, not an LLM. It's built and labeled as
 * such deliberately: the previous version of the AI chat route returned
 * hardcoded strings matched by keyword, with a comment admitting "in a
 * real application you would pass this to OpenAI/Claude API." This
 * replaces the fake keyword matching with genuinely computed answers,
 * without pretending to be something it isn't (an LLM).
 */

import { Transaction, Budget } from '@/types/finance';

export function categorySpend(transactions: Transaction[], category: string, month?: string): number {
  return transactions
    .filter((t) => t.type === 'expense' && t.category.toLowerCase() === category.toLowerCase())
    .filter((t) => !month || t.date.startsWith(month))
    .reduce((sum, t) => sum + t.amount, 0);
}

export function totalExpenses(transactions: Transaction[], month?: string): number {
  return transactions
    .filter((t) => t.type === 'expense')
    .filter((t) => !month || t.date.startsWith(month))
    .reduce((sum, t) => sum + t.amount, 0);
}

export function totalIncome(transactions: Transaction[], month?: string): number {
  return transactions
    .filter((t) => t.type === 'income')
    .filter((t) => !month || t.date.startsWith(month))
    .reduce((sum, t) => sum + t.amount, 0);
}

export function budgetOverages(budgets: Budget[]): Budget[] {
  return budgets.filter((b) => b.spent > b.limit);
}

export function monthOverMonthChange(transactions: Transaction[], category: string, currentMonth: string, previousMonth: string): number | null {
  const current = categorySpend(transactions, category, currentMonth);
  const previous = categorySpend(transactions, category, previousMonth);
  if (previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

export function highestExpenseCategory(transactions: Transaction[], month?: string): { category: string; amount: number } | null {
  const byCategory = new Map<string, number>();
  transactions
    .filter((t) => t.type === 'expense')
    .filter((t) => !month || t.date.startsWith(month))
    .forEach((t) => byCategory.set(t.category, (byCategory.get(t.category) ?? 0) + t.amount));

  let best: { category: string; amount: number } | null = null;
  for (const [category, amount] of byCategory.entries()) {
    if (!best || amount > best.amount) best = { category, amount };
  }
  return best;
}

/**
 * Answers a free-text question by routing to the matching real
 * computation above and formatting the actual result -- no canned
 * strings, no keyword-only matching without a real computed number
 * behind it.
 */
export function answerQuestion(question: string, transactions: Transaction[], budgets: Budget[]): string {
  const q = question.toLowerCase();

  const overBudget = budgetOverages(budgets);
  if (q.includes('budget') || q.includes('limit') || q.includes('over')) {
    if (overBudget.length === 0) {
      return "You're within budget on every category this month.";
    }
    const lines = overBudget.map((b) => `${b.category} by $${(b.spent - b.limit).toFixed(2)}`);
    return `You're over budget on: ${lines.join(', ')}.`;
  }

  if (q.includes('income') || q.includes('salary') || q.includes('earn')) {
    const income = totalIncome(transactions);
    return `Your recorded income across all transactions is $${income.toFixed(2)}.`;
  }

  if (q.includes('expense') || q.includes('spend') || q.includes('spent')) {
    const monthMatch = q.match(/(\d{4}-\d{2})/);
    const month = monthMatch ? monthMatch[1] : undefined;
    const highest = highestExpenseCategory(transactions, month);
    const total = totalExpenses(transactions, month);
    if (!highest) return "I don't have expense data for that period.";
    return `Your total expenses${month ? ` for ${month}` : ''} are $${total.toFixed(2)}. The highest category is ${highest.category} at $${highest.amount.toFixed(2)}.`;
  }

  const overall = totalIncome(transactions) - totalExpenses(transactions);
  return `Overall, you've recorded $${totalIncome(transactions).toFixed(2)} in income and $${totalExpenses(transactions).toFixed(2)} in expenses, a net of $${overall.toFixed(2)}. Ask about "budget", "income", or "expenses" for more detail.`;
}
