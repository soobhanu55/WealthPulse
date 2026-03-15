'use client';

import { DollarSign, PieChart, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { mockTransactions, mockBudgets, mockGoals } from '@/data/mockData';

export function SummaryCards() {
  const totalBalance = 12450.00; // Mock current balance
  const monthlyIncome = mockTransactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const monthlyExpense = mockTransactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Balance</p>
            <h3 className="text-2xl font-bold">{formatCurrency(totalBalance)}</h3>
          </div>
          <div className="p-2 bg-primary/10 rounded-lg">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
          <span className="text-emerald-500 font-medium">+2.5%</span>
          <span className="text-muted-foreground ml-2">from last month</span>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Income</p>
            <h3 className="text-2xl font-bold">{formatCurrency(monthlyIncome)}</h3>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <ArrowUpRight className="h-5 w-5 text-emerald-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="text-muted-foreground">Oct 1 - Oct 31</span>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Expenses</p>
            <h3 className="text-2xl font-bold">{formatCurrency(monthlyExpense)}</h3>
          </div>
          <div className="p-2 bg-destructive/10 rounded-lg">
            <ArrowDownRight className="h-5 w-5 text-destructive" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <ArrowUpRight className="h-4 w-4 text-destructive mr-1" />
          <span className="text-destructive font-medium">+12%</span>
          <span className="text-muted-foreground ml-2">from last month</span>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Active Budgets</p>
            <h3 className="text-2xl font-bold">{mockBudgets.length} Areas</h3>
          </div>
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <PieChart className="h-5 w-5 text-blue-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="text-muted-foreground">2 reaching limits</span>
        </div>
      </div>
    </div>
  );
}
