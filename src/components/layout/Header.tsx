import { Search, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-10 w-full">
      <div className="flex-1 max-w-xl hidden md:flex items-center space-x-2 bg-secondary px-3 py-2 rounded-lg border border-border">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search transactions, budgets..." 
          className="bg-transparent border-none outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <button className="relative p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 cursor-pointer">
          <User className="h-4 w-4 text-primary" />
        </div>
      </div>
    </header>
  );
}
