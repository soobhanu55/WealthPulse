import { mockInsights } from '@/data/mockData';
import { AlertTriangle, TrendingUp, Calendar, Lightbulb, Sparkles } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export function AIInsightsList() {
  return (
    <div className="space-y-4">
      {mockInsights.map((insight) => {
        let Icon = Lightbulb;
        let colorClass = 'text-blue-500 bg-blue-500/10';
        let borderColor = 'border-blue-500/20';

        if (insight.type === 'warning') {
          Icon = AlertTriangle;
          colorClass = 'text-destructive bg-destructive/10';
          borderColor = 'border-destructive/20';
        } else if (insight.type === 'positive') {
          Icon = TrendingUp;
          colorClass = 'text-emerald-500 bg-emerald-500/10';
          borderColor = 'border-emerald-500/20';
        } else if (insight.type === 'neutral') {
          Icon = Calendar;
          colorClass = 'text-foreground bg-secondary';
          borderColor = 'border-border';
        }

        return (
          <div 
            key={insight.id} 
            className={`bg-card border ${borderColor} rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
          >
            <div className="flex gap-4 relative z-10">
              <div className={`p-3 rounded-xl h-fit ${colorClass}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-lg">{insight.title}</h4>
                  {insight.type === 'suggestion' && (
                    <Sparkles className="h-4 w-4 text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-3">{insight.message}</p>
                <span className="text-xs text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-md">
                  {formatDate(insight.date)}
                </span>
              </div>
            </div>
            
            {/* Subtle background decoration */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-5 blur-2xl ${colorClass.split(' ')[0].replace('text-', 'bg-')}`}></div>
          </div>
        );
      })}
    </div>
  );
}
