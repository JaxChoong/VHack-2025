import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
<<<<<<< HEAD
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
=======
import { ThemeProvider } from "../components/theme-provider";
import Navigation from '../components/navigation';
>>>>>>> 0a6fd216f0cc829c3c1646266f03aab4c5d93a5a

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Health Dashboard',
<<<<<<< HEAD
  description: 'Track your health metrics and get personalized recommendations',
=======
  description: 'Disease Specific Management System',
>>>>>>> 0a6fd216f0cc829c3c1646266f03aab4c5d93a5a
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
<<<<<<< HEAD
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative">
            <div className="absolute right-4 top-4 z-50">
              <ThemeToggle />
            </div>
            {children}
=======
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pl-64">
              {children}
            </main>
>>>>>>> 0a6fd216f0cc829c3c1646266f03aab4c5d93a5a
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}