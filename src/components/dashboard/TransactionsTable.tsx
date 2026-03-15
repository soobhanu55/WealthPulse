'use client';

import { useState } from 'react';
import { Search, Filter, MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockTransactions } from '@/data/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Transaction } from '@/types/finance';

export function TransactionsTable({ limit }: { limit?: number }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Basic filtering mock
  const filtered = mockTransactions.filter(t => 
    t.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.merchant?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const displayData = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold">Recent Transactions</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-secondary border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
            />
          </div>
          <button className="p-2 border border-border rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-secondary/50">
            <tr>
              <th className="px-6 py-3 font-medium">Transaction</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium text-right">Amount</th>
              <th className="px-6 py-3 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((tx: Transaction) => (
              <tr key={tx.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-secondary text-foreground'}`}>
                      {tx.type === 'income' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{tx.description}</p>
                      {tx.merchant && <p className="text-xs text-muted-foreground">{tx.merchant}</p>}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {tx.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {formatDate(tx.date)}
                </td>
                <td className={`px-6 py-4 text-right font-medium ${tx.type === 'income' ? 'text-emerald-500' : 'text-foreground'}`}>
                  {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1 text-muted-foreground hover:bg-secondary hover:text-foreground rounded transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                  No transactions found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
