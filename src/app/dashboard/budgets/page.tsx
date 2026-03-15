'use client';

import { mockBudgets } from '@/data/mockData';
import { PieChart, AlertTriangle, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function BudgetsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Budgets</h1>
          <p className="text-muted-foreground">Monitor your spending limits across categories.</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Budget</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBudgets.map((budget) => {
          const percentSpent = (budget.spent / budget.limit) * 100;
          const isOverStatus = percentSpent >= 100;
          const isWarningStatus = percentSpent >= 80 && !isOverStatus;
          
          let progressColor = 'bg-primary';
          if (isOverStatus) progressColor = 'bg-destructive';
          else if (isWarningStatus) progressColor = 'bg-amber-500';

          return (
            <div key={budget.id} className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary rounded-lg">
                    <PieChart className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground">{budget.category}</h3>
                </div>
                {isWarningStatus && (
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                )}
                {isOverStatus && (
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                )}
              </div>
              
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted-foreground">Spent</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(budget.spent)} <span className="text-muted-foreground font-normal">/ {formatCurrency(budget.limit)}</span>
                </span>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2.5 mb-4 overflow-hidden">
                <div 
                  className={`h-2.5 rounded-full ${progressColor}`} 
                  style={{ width: `${Math.min(percentSpent, 100)}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {isOverStatus 
                  ? `Over budget by ${formatCurrency(budget.spent - budget.limit)}` 
                  : `${formatCurrency(budget.limit - budget.spent)} remaining`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
