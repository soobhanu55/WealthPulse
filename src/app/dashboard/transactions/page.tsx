import { TransactionsTable } from '@/components/dashboard/TransactionsTable';
import { Plus } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Transactions</h1>
          <p className="text-muted-foreground">View and manage all your financial activity.</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Transaction</span>
        </button>
      </div>

      <TransactionsTable />
    </div>
  );
}
