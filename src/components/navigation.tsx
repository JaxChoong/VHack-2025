"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Activity,
  Calendar,
  Settings,
  User,
  LogIn,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
    localStorage.setItem("isLoggedIn", "true"); // Force login for testing
    setIsLoggedIn(true);
  }, []);
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    alert("You have been logged out!");
  };
  
  

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Appointments", href: "/appointments", icon: Calendar },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Mental Health Check", href: "/MentalHealth", icon: Activity },
  ];

  if (isLoggedIn === false) {
    navigation.push({ name: "Login", href: "/login", icon: LogIn });
    navigation.push({ name: "Signup", href: "/signup", icon: User });
  }

  if (!mounted || isLoggedIn === null) return null; // Prevent hydration mismatch

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border transition-colors">
      {/* Logo & Theme Toggle */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-border">
        <Activity className="h-6 w-6 text-foreground" />
        <span className="ml-3 text-lg font-semibold text-foreground">
          HealthDash
        </span>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="ml-auto p-2 rounded-md hover:bg-muted"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium hover:bg-gray-800 hover:text-white",
                    pathname === item.href
                      ? "bg-gray-800 text-white"
                      : "text-black-400"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* User Info & Logout */}
        {isLoggedIn && (
          <div className="mt-auto p-4 border-t border-border">
            <div className="flex items-center gap-4 py-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="h-8 w-8 rounded-full bg-muted"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Patient</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-x-3 p-3 rounded-md text-sm font-medium text-destructive hover:bg-red-600 hover:text-white transition"
            >
              <LogOut className="h-5 w-5 shrink-0" />
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
