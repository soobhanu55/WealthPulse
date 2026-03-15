export type TransactionType = 'income' | 'expense';

export type TransactionCategory =
  | 'Housing'
  | 'Transportation'
  | 'Food'
  | 'Utilities'
  | 'Insurance'
  | 'Healthcare'
  | 'Savings'
  | 'Personal'
  | 'Entertainment'
  | 'Salary'
  | 'Investment'
  | 'Other';

export interface Transaction {
  id: string;
  date: string; // ISO format (e.g. YYYY-MM-DD)
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string;
  merchant?: string;
}

export interface Budget {
  id: string;
  category: TransactionCategory;
  limit: number;
  spent: number;
  month: string; // YYYY-MM
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string; // YYYY-MM-DD
  color: string;
}

export interface AIInsight {
  id: string;
  title: string;
  message: string;
  type: 'warning' | 'positive' | 'neutral' | 'suggestion';
  date: string;
}
