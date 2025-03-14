import Link from 'next/link';
import { Heart, Droplet } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Health Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/diabetes">
            <div className="group hover:scale-105 transition-transform duration-200 bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Droplet className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Diabetes Tracking</h2>
              </div>
              <p className="text-muted-foreground">
                Monitor glucose levels, get diet suggestions, and manage medication reminders
              </p>
            </div>
          </Link>

          <Link href="/heart">
            <div className="group hover:scale-105 transition-transform duration-200 bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <Heart className="w-8 h-8 text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold">Heart Health</h2>
              </div>
              <p className="text-muted-foreground">
                Track heart rate, monitor activity levels, and receive lifestyle recommendations
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}