"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Activity,
  Calendar,
  Settings,
  User,
  Bell,
  MessageSquare,
  LogIn,
} from 'lucide-react'

const isLoggedIn = false 

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Health Stats', href: '/health-stats', icon: Activity },
  { name: 'Appointments', href: '/appointments', icon: Calendar },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: "Sign Up", href: "/signup", icon: User },
]

if (!isLoggedIn) {
  navigation.push({ name: 'Login', href: '/login', icon: LogIn })
  navigation.push({ name: 'Signup', href: '/signup', icon: User })
}

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r">
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <Activity className="h-6 w-6 text-primary" />
        <span className="ml-3 text-lg font-semibold">HealthDash</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium hover:bg-accent hover:text-accent-foreground',
                    pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
        
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
        </div>
      </nav>
    </div>
  )
}