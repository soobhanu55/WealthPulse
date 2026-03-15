import { Transaction, Budget, Goal, AIInsight } from '../types/finance';

export const mockTransactions: Transaction[] = [
  { id: 'tx-1', date: '2023-10-01', amount: 3200, category: 'Salary', type: 'income', description: 'October Salary', merchant: 'Acme Corp' },
  { id: 'tx-2', date: '2023-10-02', amount: 1500, category: 'Housing', type: 'expense', description: 'Monthly Rent', merchant: 'Downtown Apartments' },
  { id: 'tx-3', date: '2023-10-04', amount: 65.5, category: 'Utilities', type: 'expense', description: 'Internet Bill', merchant: 'Comcast' },
  { id: 'tx-4', date: '2023-10-05', amount: 120, category: 'Food', type: 'expense', description: 'Groceries', merchant: 'Whole Foods' },
  { id: 'tx-5', date: '2023-10-08', amount: 45, category: 'Transportation', type: 'expense', description: 'Gas', merchant: 'Shell' },
  { id: 'tx-6', date: '2023-10-10', amount: 200, category: 'Entertainment', type: 'expense', description: 'Concert Tickets', merchant: 'Ticketmaster' },
  { id: 'tx-7', date: '2023-10-12', amount: 85, category: 'Food', type: 'expense', description: 'Dinner', merchant: 'Local Bistro' },
  { id: 'tx-8', date: '2023-10-15', amount: 300, category: 'Savings', type: 'expense', description: 'Emergency Fund', merchant: 'Vanguard' },
  { id: 'tx-9', date: '2023-10-18', amount: 55, category: 'Personal', type: 'expense', description: 'Haircut', merchant: 'Supercuts' },
  { id: 'tx-10', date: '2023-10-22', amount: 140, category: 'Utilities', type: 'expense', description: 'Electricity Bill', merchant: 'PG&E' },
  { id: 'tx-11', date: '2023-10-25', amount: 90, category: 'Food', type: 'expense', description: 'Groceries', merchant: 'Trader Joe\'s' },
  { id: 'tx-12', date: '2023-10-28', amount: 30, category: 'Entertainment', type: 'expense', description: 'Movie Night', merchant: 'AMC' },
  // Adding some transactions for the previous month to show trends
  { id: 'tx-13', date: '2023-09-01', amount: 3200, category: 'Salary', type: 'income', description: 'September Salary', merchant: 'Acme Corp' },
  { id: 'tx-14', date: '2023-09-02', amount: 1500, category: 'Housing', type: 'expense', description: 'Monthly Rent', merchant: 'Downtown Apartments' },
  { id: 'tx-15', date: '2023-09-10', amount: 180, category: 'Food', type: 'expense', description: 'Groceries', merchant: 'Whole Foods' },
  { id: 'tx-16', date: '2023-09-20', amount: 150, category: 'Entertainment', type: 'expense', description: 'Theme Park', merchant: 'Universal' },
];

export const mockBudgets: Budget[] = [
  { id: 'b-1', category: 'Food', limit: 500, spent: 295, month: '2023-10' },
  { id: 'b-2', category: 'Entertainment', limit: 200, spent: 230, month: '2023-10' },
  { id: 'b-3', category: 'Transportation', limit: 150, spent: 45, month: '2023-10' },
  { id: 'b-4', category: 'Utilities', limit: 250, spent: 205.5, month: '2023-10' },
];

export const mockGoals: Goal[] = [
  { id: 'g-1', name: 'Emergency Fund', target: 10000, current: 8500, deadline: '2024-12-31', color: '#10b981' },
  { id: 'g-2', name: 'Vacation', target: 3000, current: 1200, deadline: '2024-06-01', color: '#3b82f6' },
  { id: 'g-3', name: 'New Car Downpayment', target: 5000, current: 500, deadline: '2025-01-01', color: '#8b5cf6' },
];

export const mockInsights: AIInsight[] = [
  {
    id: 'i-1',
    title: 'Entertainment Budget Exceeded',
    message: 'You have exceeded your $200 limit for Entertainment this month by $30. Consider cutting back on subscriptions or outings.',
    type: 'warning',
    date: '2023-10-29'
  },
  {
    id: 'i-2',
    title: 'Great Job on Groceries',
    message: 'Your spending on Food is 15% lower than this time last month. Keep it up!',
    type: 'positive',
    date: '2023-10-28'
  },
  {
    id: 'i-3',
    title: 'Upcoming Bill Reminder',
    message: 'Your typical $1500 Rent payment is due in 4 days.',
    type: 'neutral',
    date: '2023-10-27'
  },
  {
    id: 'i-4',
    title: 'Potential Savings',
    message: 'You have $554 remaining in your budget for this month. Would you like to shift some to your Emergency Fund goal?',
    type: 'suggestion',
    date: '2023-10-25'
  }
];
