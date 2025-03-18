'use client'

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import MoodTracker from '../../components/MoodTracker';
import BreathingExercises from '../../components/BreathingExercises';
import Mindfulness from '../../components/Mindfulness';

function MentalHealth() {
    const [activeSection, setActiveSection] = useState<'mood' | 'breathing' | 'mindfulness'>('mood');
  
    return (
      <div>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {activeSection === 'mood' && (
            <div className="space-y-8">
              <MoodTracker />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <button
                  onClick={() => setActiveSection('breathing')}
                  className=" p-6 rounded-xl border-2 border-white hover:bg-white transition-colors shadow-md cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Breathing Exercises</h3>
                  <p className="text-gray-600">Practice guided breathing techniques to reduce stress and anxiety.</p>
                </button>
                <button
                  onClick={() => setActiveSection('mindfulness')}
                  className=" p-6 rounded-xl  border-2 border-white hover:bg-white transition-colors shadow-md cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-2 ">Mindfulness & Affirmations</h3>
                  <p className="text-gray-600">Explore daily affirmations and mindfulness practices for mental well-being.</p>
                </button>
              </div>
            </div>
          )}
          {activeSection !== 'mood' && (
            <div>
              <button
                onClick={() => setActiveSection('mood')}
                className="mb-6 flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
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