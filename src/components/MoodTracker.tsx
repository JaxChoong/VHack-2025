import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { SmilePlus, Meh, Frown } from 'lucide-react';

type Mood = 'happy' | 'neutral' | 'sad' | null;

interface MoodEntry {
  date: Date;
  mood: Mood;
}

function MoodTracker() {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getMoodForDate = (date: Date): Mood => {
    const entry = moodEntries.find(e => isSameDay(e.date, date));
    return entry?.mood || null;
  };

  const setMoodForDate = (date: Date, mood: Mood) => {
    setMoodEntries(prev => {
      const filtered = prev.filter(entry => !isSameDay(entry.date, date));
      return [...filtered, { date, mood }];
    });
  };

  const getMoodIcon = (mood: Mood) => {
    switch (mood) {
      case 'happy':
        return <SmilePlus className="w-6 h-6 text-green-500" />;
      case 'neutral':
        return <Meh className="w-6 h-6 text-yellow-500" />;
      case 'sad':
        return <Frown className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-xl shadow-md p-6  border-2 border-white">
        <h2 className="text-2xl font-semibold text-white-800 mb-4">Mood Calendar</h2>
        <div className="text-center mb-4">
          <h3 className="text-xl font-medium">{format(selectedDate, 'MMMM yyyy')}</h3>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-white-500 py-2 ">
              {day}
            </div>
          ))}
          {days.map(day => (
            <div
              key={day.toString()}
              className="aspect-square border rounded-lg p-2 hover:bg-purple-50 transition-colors hover:text-black"
            >
              <div className="text-sm mb-1 ">{format(day, 'd')}</div>
              <div className="flex justify-center space-x-1">
                {getMoodIcon(getMoodForDate(day))}
                {!getMoodForDate(day) && (
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setMoodForDate(day, 'happy')}
                      className="hover:scale-110 transition-transform"
                    >
                      <SmilePlus className="w-6 h-6 text-gray-400 hover:text-green-500" />
                    </button>
                    <button
                      onClick={() => setMoodForDate(day, 'neutral')}
                      className="hover:scale-110 transition-transform"
                    >
                      <Meh className="w-6 h-6 text-gray-400 hover:text-yellow-500" />
                    </button>
                    <button
                      onClick={() => setMoodForDate(day, 'sad')}
                      className="hover:scale-110 transition-transform"
                    >
                      <Frown className="w-6 h-6 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;