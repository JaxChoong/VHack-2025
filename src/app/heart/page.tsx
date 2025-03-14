"use client";

import { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Heart, Activity, Trophy, ArrowLeft, RefreshCw, Pause } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Simplified test data
const testData = [
  { time: "6:00 AM", rate: 65 },
  { time: "7:00 AM", rate: 70 },
  { time: "8:00 AM", rate: 75 },
];

const mockActivityData = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 60 },
  { day: "Thu", minutes: 25 },
  { day: "Fri", minutes: 45 },
  { day: "Sat", minutes: 90 },
  { day: "Sun", minutes: 40 },
];

const healthTips = [
  "Take a 10-minute walk after each meal",
  "Practice deep breathing exercises",
  "Stay hydrated throughout the day",
  "Get 7-8 hours of quality sleep",
];

export default function HeartHealth() {
  const [currentHeartRate, setCurrentHeartRate] = useState("72");
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [isECGView, setIsECGView] = useState(false);
  const [ecgData, setEcgData] = useState<{ time: string; value: number }[]>([]);
  const ecgIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Simulate updating the last update time every 5 minutes (client-side only)
  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setLastUpdate(new Date().toLocaleTimeString());
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);

  // Simulate ECG data stream (client-side only)
  useEffect(() => {
    if (isECGView) {
      ecgIntervalRef.current = setInterval(() => {
        const newDataPoint = {
          time: new Date().toLocaleTimeString(),
          value: Math.floor(Math.random() * 100) + 50, // Random ECG-like values
        };
        setEcgData((prevData) => {
          const newData = [...prevData, newDataPoint];
          return newData.slice(-50); // Keep only the last 50 data points
        });
      }, 200); // Add a new data point every 200ms

      return () => {
        if (ecgIntervalRef.current) {
          clearInterval(ecgIntervalRef.current);
        }
      };
    } else {
      setEcgData([]); // Clear ECG data when switching back to normal chart
    }
  }, [isECGView]);

  // Log chart data for debugging
  console.log("Chart Data:", isECGView ? ecgData : testData);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 hover:bg-secondary rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold">Heart Health Monitoring</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-destructive" />
              <h2 className="text-xl font-semibold">Heart Rate</h2>
              <button
                onClick={() => setIsECGView(!isECGView)}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Pause className="w-4 h-4" />
                <span>{isECGView ? "Show Chart" : "Show ECG"}</span>
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Current Heart Rate (BPM)</label>
              <input
                type="number"
                value={currentHeartRate}
                onChange={(e) => setCurrentHeartRate(e.target.value)}
                className="w-full p-3 rounded-md border border-input bg-background"
                placeholder="Enter heart rate"
              />
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {isECGView ? (
                  <LineChart
                    data={ecgData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" hide /> {/* Hide X-axis for ECG */}
                    <YAxis domain={[0, 150]} /> {/* Set Y-axis range for ECG */}
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ff0000" // Bright red color
                      strokeWidth={3} // Thicker line
                      dot={false} // Hide dots for ECG
                      isAnimationActive={false} // Disable animation for smoother ECG
                    />
                  </LineChart>
                ) : (
                  <LineChart
                    data={testData} // Use simplified test data
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#00ff00" // Bright green color
                      strokeWidth={3} // Thicker line
                      dot={{ r: 5 }} // Larger dots
                      activeDot={{ r: 8 }} // Larger active dots
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Apple Health Integration */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/applewatch-removebg-preview.png" // Replace with the path to your Apple Watch image
                  alt="Apple Watch"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Connected to Apple Health</p>
                  {lastUpdate && ( // Only render if lastUpdate is available
                    <p className="text-xs text-muted-foreground">Last updated: {lastUpdate}</p>
                  )}
                </div>
              </div>
              <Link
                href="https://www.apple.com/health/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Weekly Activity</h2>
              </div>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="minutes" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Lifestyle Tips</h2>
              </div>
              <div className="space-y-3">
                {healthTips.map((tip, index) => (
                  <div key={index} className="p-3 bg-secondary rounded-lg">
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}