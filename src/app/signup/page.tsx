import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
        <div className="flex justify-center mb-8">
          <div className="bg-primary p-2 rounded-xl">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Create an account</h1>
        <p className="text-muted-foreground text-center mb-8">Start mastering your money today</p>

        <form className="space-y-4 text-left">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>

          <Link href="/dashboard" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors mt-6 block text-center">
            <span>Create Account</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
