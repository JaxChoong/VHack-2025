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
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    alert("You have been logged out!");
  };

  type NavigationItem = {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void; // Optional onClick property
  };

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Appointments", href: "/appointments", icon: Calendar },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Mental Health Check", href: "/MentalHealth", icon: Activity },
  ];

  if (isLoggedIn) {
    navigation.push({
      name: "Logout",
      href: "#",
      icon: LogOut,
      onClick: handleLogout, // Add an onClick handler for logout
    });
  } else {
    navigation.push({ name: "Login", href: "/login", icon: LogIn });
    navigation.push({ name: "Signup", href: "/signup", icon: User });
  }

  if (!mounted || isLoggedIn === null) return null; // Prevent hydration mismatch

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background/95 backdrop-blur-sm border border-border shadow-sm md:hidden hover:bg-accent"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background/95 backdrop-blur-sm border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo & Theme Toggle */}
        <div className="flex h-16 shrink-0 items-center px-6 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-center w-full cursor-pointer" onClick={() => (window.location.href = "/")}>
            <Activity className="h-6 w-6 text-foreground" />
            <span className="ml-3 text-lg font-semibold text-foreground">
              HealthDash
            </span>
          </div>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="absolute right-4 p-2 rounded-md hover:bg-accent"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 flex-col bg-background/95 backdrop-blur-sm">
          <ul role="list" className="flex flex-1 flex-col gap-1 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault(); // Prevent navigation for logout
                        item.onClick();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground"
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
          {isLoggedIn ? (
            <div className="mt-auto p-4 border-t border-border bg-background/95 backdrop-blur-sm">
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
              
            </div>
          ) : null}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
