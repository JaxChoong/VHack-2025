import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

function BreathingExercises() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isBreathing) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                return 7;
              case 'hold':
                setPhase('exhale');
                return 8;
              case 'exhale':
                setPhase('inhale');
                return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isBreathing, phase]);

  const resetExercise = () => {
    setIsBreathing(false);
    setPhase('inhale');
    setTimer(4);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">4-7-8 Breathing Exercise</h2>
        <div className="text-center space-y-6">
          <div className="relative w-48 h-48 mx-auto">
            <div
              className={`absolute inset-0 border-4 rounded-full transition-transform duration-1000
                ${phase === 'inhale' ? 'scale-100' : phase === 'hold' ? 'scale-110' : 'scale-90'}
                ${phase === 'inhale' ? 'border-blue-400' : phase === 'hold' ? 'border-green-400' : 'border-purple-400'}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold">{timer}</div>
            </div>
          </div>
          <div className="text-xl font-medium">
            {phase === 'inhale' ? 'Inhale' : phase === 'hold' ? 'Hold' : 'Exhale'}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsBreathing(!isBreathing)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              {isBreathing ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Start</span>
                </>
              )}
            </button>
            <button
              onClick={resetExercise}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Relaxation Techniques</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-700">Progressive Muscle Relaxation</h3>
            <p className="text-gray-600">
              Tense and then relax each muscle group in your body, starting from your toes and moving up to your head.
              Hold the tension for 5 seconds, then release for 10 seconds.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-700">Body Scan Meditation</h3>
            <p className="text-gray-600">
              Lie down comfortably and focus your attention on different parts of your body, from your feet to your head.
              Notice any sensations without judgment.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-700">Visualization</h3>
            <p className="text-gray-600">
              Imagine a peaceful, calming place in detail. Focus on the sights, sounds, smells, and textures of your
              chosen sanctuary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreathingExercises;