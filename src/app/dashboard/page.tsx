import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { TrendChart } from '@/components/dashboard/TrendChart';
import { TransactionsTable } from '@/components/dashboard/TransactionsTable';

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s your financial summary.</p>
      </div>

      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Cash Flow Trends</h3>
            <p className="text-sm text-muted-foreground">Income vs Expenses over time</p>
          </div>
          <TrendChart />
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold mb-4">Quick AI Insights</h3>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium text-primary mb-1">Hey there!</p>
              <p className="text-sm text-foreground">Your spending on <span className="font-semibold">Food</span> is 15% lower than this time last month. Great job sticking to your budget!</p>
            </div>
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm font-medium text-destructive mb-1">Budget Alert</p>
              <p className="text-sm text-foreground">You are approaching your limit for <span className="font-semibold">Entertainment</span> ($230 / $200 limit).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mb-8">
        <TransactionsTable limit={5} />
      </div>
    </div>
  );
}
