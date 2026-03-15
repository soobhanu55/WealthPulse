import Link from 'next/link';
import { Sparkles, ArrowRight, Shield, PieChart, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-border/50">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight">AIFinance</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
            Sign up
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI-Powered Financial Assistant 2.0 is here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            Master your money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">intelligent insights.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Automatically track expenses, set smart budgets, and get personalized recommendations from your own AI financial advisor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/signup" className="flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-transform hover:scale-105 w-full sm:w-auto justify-center">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/dashboard" className="px-8 py-4 rounded-full font-semibold border border-border bg-card hover:bg-secondary transition-colors w-full sm:w-auto text-center">
              View Demo Dashboard
            </Link>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="bg-secondary/50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Everything you need to succeed</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Categorization</h3>
                <p className="text-muted-foreground">AI automatically categorizes your transactions with 99% accuracy, saving you hours of manual work.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Predictive Insights</h3>
                <p className="text-muted-foreground">Get natural language alerts about your spending habits before you break your budget.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bank-level Security</h3>
                <p className="text-muted-foreground">Your financial data is encrypted and securely stored. We never sell your personal information.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIFinance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
