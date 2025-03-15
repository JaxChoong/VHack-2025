"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Activity,
  Calendar,
  Settings,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out!");
  };

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Appointments", href: "/appointments", icon: Calendar },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  if (!isLoggedIn) {
    navigation.push({ name: "Login", href: "/login", icon: LogIn });
    navigation.push({ name: "Signup", href: "/signup", icon: User });
  }

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-gray-800">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-700">
        <Activity className="h-6 w-6 text-white" />
        <span className="ml-3 text-lg font-semibold text-white">
          HealthDash
        </span>
      </div>
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
                      : "text-gray-400"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {isLoggedIn && (
          <div className="mt-auto p-4 border-t">
            <div className="flex items-center gap-4 py-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Patient</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-x-3 p-3 rounded-md text-sm font-medium text-gray-400 hover:bg-red-600 hover:text-white transition"
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
