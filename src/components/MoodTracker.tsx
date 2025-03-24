import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { SmilePlus, Meh, Frown } from 'lucide-react';

type Mood = 'happy' | 'neutral' | 'sad' | null;

interface MoodEntry {
  date: Date;
  mood: Mood;
}

interface MoodTrackerProps {
  onMoodChange: (mood: Mood) => void;
}

function MoodTracker({ onMoodChange }: MoodTrackerProps) {
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

  // Use useEffect to call onMoodChange after moodEntries is updated
  useEffect(() => {
    const latestMood = moodEntries.length > 0 ? moodEntries[moodEntries.length - 1].mood : null;
    onMoodChange(latestMood);
  }, [moodEntries, onMoodChange]);

  const getMoodIcon = (mood: Mood) => {
    switch (mood) {
      case 'happy':
        return <SmilePlus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />;
      case 'neutral':
        return <Meh className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-yellow-500" />;
      case 'sad':
        return <Frown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-red-500" />;
      default:
        return null;
    }
  };

  const getMoodClass = (mood: Mood) => {
    switch (mood) {
      case 'happy':
        return 'bg-green-100';
      case 'neutral':
        return 'bg-yellow-100';
      case 'sad':
        return 'bg-red-100';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
      <div className="rounded-xl shadow-md p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 border-2 border-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white-800 mb-4">Mood Calendar</h2>
        <div className="text-center mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white-700">{format(selectedDate, 'MMMM yyyy')}</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-white-500 py-2">
              {day}
            </div>
          ))}
          {days.map(day => (
            <div
              key={day.toString()}
              className={`aspect-square border rounded-lg p-1 sm:p-2 md:p-3 lg:p-4 hover:bg-purple-50 transition-colors hover:text-black ${getMoodClass(getMoodForDate(day))}`}
            >
              <div className="text-xs sm:text-sm md:text-base lg:text-lg mb-1 text-white-700">{format(day, 'd')}</div>
              <div className="flex justify-center space-x-1">
                {getMoodIcon(getMoodForDate(day))}
                {!getMoodForDate(day) && (
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setMoodForDate(day, 'happy')}
                      className="hover:scale-110 transition-transform cursor-pointer"
                    >
                      <SmilePlus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 hover:text-green-500" />
                    </button>
                    <button
                      onClick={() => setMoodForDate(day, 'neutral')}
                      className="hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Meh className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 hover:text-yellow-500" />
                    </button>
                    <button
                      onClick={() => setMoodForDate(day, 'sad')}
                      className="hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Frown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 hover:text-red-500" />
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