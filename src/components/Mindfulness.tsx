import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const affirmations = [
  "I am capable of handling whatever challenges come my way",
  "I choose to be confident and self-assured",
  "I am worthy of love, respect, and happiness",
  "My potential to succeed is infinite",
  "I trust in my ability to make good decisions",
  "I am grateful for all that I have",
  "I choose to be happy and spread happiness",
  "I am in charge of my own happiness",
  "I radiate positivity and attract positivity",
  "I am becoming better every day"
];

const mindfulnessPrompts = [
  "Take a moment to focus on your breath. Notice the sensation of breathing without trying to change it.",
  "Look around you and name five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste.",
  "Pay attention to the physical sensations in your body right now. Notice any areas of tension or comfort.",
  "Listen to the sounds around you. Try to identify each sound without judging it.",
  "Focus on the present moment. What thoughts and feelings are you experiencing right now?",
  "Notice your posture and how your body feels in its current position.",
  "Take a mindful walk, paying attention to each step and the sensations in your feet.",
  "Observe your thoughts as if they were clouds passing by in the sky.",
  "Practice gratitude by thinking of three things you're thankful for right now.",
  "Focus on your heart and send kindness to yourself and others."
];

function Mindfulness() {
  const [currentAffirmation, setCurrentAffirmation] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');

  const getRandomItem = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const refreshMessages = () => {
    setCurrentAffirmation(getRandomItem(affirmations));
    setCurrentPrompt(getRandomItem(mindfulnessPrompts));
  };

  useEffect(() => {
    refreshMessages();
  }, []);

  return (
    <div className="space-y-8">
      <div className=" rounded-xl shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white-800">Daily Affirmation</h2>
          <button
            onClick={refreshMessages}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-white-300 hover:bg-white-50 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            <span>New Message</span>
          </button>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 mb-8">
          <p className="text-xl font-medium text-black text-center italic">
            "{currentAffirmation}"
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white-800 mb-4">Mindfulness Practice</h2>
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6">
          <p className="text-lg text-black text-center">
            {currentPrompt}
          </p>
        </div>
      </div>

      <div className=" rounded-xl shadow-md p-8 border-2 border-white">
        <h2 className="text-2xl font-semibold text-white-800 mb-6">Mindfulness Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-white-700">Start Small</h3>
            <p className="text-white-600">
              Begin with just 1-2 minutes of mindfulness practice. Gradually increase the duration as you become more comfortable.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-white-700">Create a Routine</h3>
            <p className="text-white-600">
              Practice mindfulness at the same time each day to build a sustainable habit.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-white-700">Be Patient</h3>
            <p className="text-white-600">
              Don't judge yourself when your mind wanders. Simply notice it and gently return your attention to the present moment.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-white-700">Use Reminders</h3>
            <p className="text-white-600">
              Set gentle reminders throughout the day to take mindful breaks and check in with yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mindfulness;