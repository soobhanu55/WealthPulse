import { AIInsightsList } from '@/components/ai/AIInsightsList';
import { ChatAssistant } from '@/components/ai/ChatAssistant';

export default function InsightsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">AI Insights</h1>
        <p className="text-muted-foreground">Personalized financial recommendations and chat assistant.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="space-y-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold">Recent Insights</h3>
            <p className="text-sm text-muted-foreground">Automatically generated based on your activity.</p>
          </div>
          <AIInsightsList />
        </div>
        
        <div className="space-y-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold">Financial Assistant</h3>
            <p className="text-sm text-muted-foreground">Ask me anything about your finances.</p>
          </div>
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}
