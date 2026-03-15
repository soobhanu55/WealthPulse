import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // In a real application, you would pass this message to OpenAI/Claude API
    // e.g., const completion = await openai.chat.completions.create({...})
    
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Pseudo-logic matching
    let reply = "I analyzed your recent data. You're doing quite well overall! Is there a specific category you want me to look into?";
    
    if (message.toLowerCase().includes('october') || message.toLowerCase().includes('expense')) {
      reply = "In October, your highest expense was Housing ($1,500). Your total expenses so far are roughly $2,185. Would you like a breakdown of the remaining categories?";
    } else if (message.toLowerCase().includes('budget') || message.toLowerCase().includes('limit')) {
      reply = "You're currently over your Entertainment budget by $30. Might be a good idea to skip the movies this weekend!";
    } else if (message.toLowerCase().includes('income')) {
      reply = "You received your $3,200 salary across regular intervals. Let me know if you want to track supplementary income sources.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process AI chat request' },
      { status: 500 }
    );
  }
}
