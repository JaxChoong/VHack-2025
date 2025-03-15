'use client'

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import MoodTracker from '../../components/MoodTracker';
import BreathingExercises from '../../components/BreathingExercises';
import Mindfulness from '../../components/Mindfulness';

function MentalHealth() {
    const [activeSection, setActiveSection] = useState<'mood' | 'breathing' | 'mindfulness'>('mood');
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-2 text-purple-600">
                <Heart className="h-6 w-6" />
                <span className="font-semibold">MindfulMe</span>
              </div>
            </div>
          </div>
        </nav>
  
        <main className="max-w-7xl mx-auto px-4 py-8">
          {activeSection === 'mood' && (
            <div className="space-y-8">
              <MoodTracker />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveSection('breathing')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Breathing Exercises</h3>
                  <p className="text-gray-600">Practice guided breathing techniques to reduce stress and anxiety.</p>
                </button>
                <button
                  onClick={() => setActiveSection('mindfulness')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Mindfulness & Affirmations</h3>
                  <p className="text-gray-600">Explore daily affirmations and mindfulness practices for mental well-being.</p>
                </button>
              </div>
            </div>
          )}
          {activeSection !== 'mood' && (
            <div>
              <button
                onClick={() => setActiveSection('mood')}
                className="mb-6 flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <span>← Back to Mood Tracker</span>
              </button>
              {activeSection === 'breathing' && <BreathingExercises />}
              {activeSection === 'mindfulness' && <Mindfulness />}
            </div>
          )}
        </main>
      </div>
    );
  }
  

export default MentalHealth;