"use client"

import React, { useState } from 'react';
import { Bell, Lock, User, Shield, Calendar, BarChart, Globe, Clock, Moon, Sun, ChevronRight } from 'lucide-react';
const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm opacity-75">Manage your account preferences and app settings</p>
        </header>
        <div className={`rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden mb-6`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <User className="mr-3 text-blue-500" size={20} />
              <div>
                <h2 className="font-medium">Account Settings</h2>
                <p className="text-xs opacity-75">Manage your profile and account</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Lock className="mr-3 text-blue-500" size={20} />
              <div>
                <h2 className="font-medium">Privacy & Security</h2>
                <p className="text-xs opacity-75">Manage your data and privacy settings</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="mr-3 text-blue-500" size={20} />
              <div>
                <h2 className="font-medium">Notifications</h2>
                <p className="text-xs opacity-75">Configure app notifications</p>
              </div>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5
                  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-blue-500`}></div>
              </label>
            </div>
          </div>
        </div>
        <div className={`rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden mb-6`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <BarChart className="mr-3 text-green-500" size={20} />
              <div>
                <h2 className="font-medium">Health Data</h2>
                <p className="text-xs opacity-75">Manage your health metrics and integrations</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="mr-3 text-green-500" size={20} />
              <div>
                <h2 className="font-medium">Health Goals</h2>
                <p className="text-xs opacity-75">Set and track your health objectives</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="mr-3 text-green-500" size={20} />
              <div>
                <h2 className="font-medium">Reminders</h2>
                <p className="text-xs opacity-75">Configure medication and activity reminders</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
        </div>
        <div className={`rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden mb-6`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="mr-3 text-purple-500" size={20} />
              <div>
                <h2 className="font-medium">Language</h2>
                <p className="text-xs opacity-75">Choose your preferred language</p>
              </div>
            </div>
            <div className="text-sm text-right opacity-75">English</div>
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              {darkMode ? (
                <Moon className="mr-3 text-purple-500" size={20} />
              ) : (
                <Sun className="mr-3 text-purple-500" size={20} />
              )}
              <div>
                <h2 className="font-medium">Appearance</h2>
                <p className="text-xs opacity-75">Toggle dark/light mode</p>
              </div>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5
                  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-purple-500`}></div>
              </label>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="mr-3 text-purple-500" size={20} />
              <div>
                <h2 className="font-medium">About</h2>
                <p className="text-xs opacity-75">App version and legal information</p>
              </div>
            </div>
            <ChevronRight size={18} className="opacity-50" />
          </div>
        </div>
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
