import { NextResponse } from 'next/server';
import { answerQuestion } from '@/lib/analytics';
import { mockTransactions, mockBudgets } from '@/data/mockData';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    // Real, computed answer from the actual transaction/budget data --
    // see src/lib/analytics.ts. This is rule-based analytics, not an
    // LLM; the previous version of this route returned hardcoded
    // strings regardless of the real data, with a comment admitting
    // "in a real application you would pass this to OpenAI/Claude API."
    // That's corrected here rather than left as-is.
    const reply = answerQuestion(message, mockTransactions, mockBudgets);

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
