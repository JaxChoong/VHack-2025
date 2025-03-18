"use client"

import React, { Children, useState } from 'react';
import { Bell, Lock, User, Shield, Calendar, BarChart, Globe, Clock, Moon, Sun, ChevronRight } from 'lucide-react';

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface SettingsItemProps {
  children: React.ReactNode;
  className?: string;
  name: string;
  desc: string;
  symbol: React.ReactNode;
}

const SettingsItem = React.forwardRef<HTMLDivElement,SettingsItemProps>(
  ({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 flex items-center justify-between", className)}>
    <div className="flex items-center">
      {props.symbol}
      <div>
        <h2 className="font-medium">{props.name}</h2>
        <p className="text-xs opacity-75">{props.desc}</p>
      </div>
    </div>
    {children}
  </div>
));

const settingsList = [
  {
    name: "Account Settings",
    desc: "Manage your profile and account",
    symbol: <User className="mr-3 text-blue-500" size={20} />,
    children: <ChevronRight size={18} className="opacity-50" />
  },
  {
    name: "Notifications",
    desc: "Configure app notifications",
    symbol: <Bell className="mr-3 text-blue-500" size={20} />,
    children: <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5
                  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-blue-500`} />
      </label>
    </div>
  },
  {
    name: "Health Data",
    desc: "Manage your health metrics and integrations",
    symbol: <BarChart className="mr-3 text-green-500" size={20} />,
    children: <ChevronRight size={18} className="opacity-50" />
  },
  {
    name: "Health Goals",
    desc: "Set and track your health objectives",
    symbol: <Calendar className="mr-3 text-green-500" size={20} />,
    children: <ChevronRight size={18} className="opacity-50" />
  },
  {
    name: "Reminders",
    desc: "Configure medication and activity reminders",
    symbol: <Clock className="mr-3 text-green-500" size={20} />,
    children: <ChevronRight size={18} className="opacity-50" />
  },
  {
    name: "Language",
    desc: "Choose your preferred language",
    symbol: <Globe className="mr-3 text-purple-500" size={20} />,
    children: <div className="text-sm text-right opacity-75">English</div>
  },
  {
    name: "Appearance",
    desc: "Toggle dark/light mode",
    symbol: <Moon className="mr-3 text-purple-500" size={20} />,
    children: (
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5
            after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all
            peer-checked:bg-purple-500`}></div>
        </label>
      </div>
    )
  },
  {
    name: "About",
    desc: "App version and legal information",
    symbol: <Shield className="mr-3 text-purple-500" size={20} />,
    children: <ChevronRight size={18} className="opacity-50" />
  }]

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm opacity-75">Manage your account preferences and app settings</p>
        </header>
        <Card className="mb-10">
          <SettingsItem {...settingsList[0]} />
          <SettingsItem {...settingsList[1]} />
        </Card>
        <Card className="mb-10">
          <SettingsItem {...settingsList[2]} />
          <SettingsItem {...settingsList[3]} />
          <SettingsItem {...settingsList[4]} />
        </Card>
        <Card className="mb-10">
          <SettingsItem {...settingsList[5]} />
          <SettingsItem {...settingsList[6]} />
          <SettingsItem {...settingsList[7]} />
        </Card>
        <div className="mt-6 text-center">
          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white`}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
