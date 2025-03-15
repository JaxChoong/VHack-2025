"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Droplet, Utensils, Bell, ArrowLeft, Check, Clock, Smartphone } from "lucide-react";
import Link from "next/link";

const mockGlucoseData = [
  { time: "6:00 AM", level: 120 },
  { time: "9:00 AM", level: 140 },
  { time: "12:00 PM", level: 110 },
  { time: "3:00 PM", level: 130 },
  { time: "6:00 PM", level: 125 },
  { time: "9:00 PM", level: 115 },
];

const mockMedications = [
  { name: "Metformin", time: "8:00 AM", taken: true, dosage: "500mg", instructions: "Take with breakfast", sideEffects: "May cause mild stomach upset" },
  { name: "Insulin", time: "1:00 PM", taken: false, dosage: "10 units", instructions: "Inject before lunch", sideEffects: "May cause low blood sugar" },
  { name: "Metformin", time: "8:00 PM", taken: false, dosage: "500mg", instructions: "Take with dinner", sideEffects: "May cause mild stomach upset" },
];

const mockDietSuggestions = [
  "Grilled chicken with quinoa and vegetables",
  "Greek yogurt with berries and nuts",
  "Salmon with roasted vegetables",
  "Lentil soup with whole grain bread",
];

const mockGlucoseHistory = [
  { id: 1, device: "Accu-Chek Guide", level: "120 mg/dL", time: "2023-10-25 08:15 AM" },
  { id: 2, device: "FreeStyle Libre", level: "140 mg/dL", time: "2023-10-25 12:30 PM" },
  { id: 3, device: "Dexcom G6", level: "110 mg/dL", time: "2023-10-25 03:45 PM" },
  { id: 4, device: "OneTouch Verio", level: "130 mg/dL", time: "2023-10-25 06:00 PM" },
];

export default function DiabetesTracking() {
  const [currentGlucose, setCurrentGlucose] = useState("120");
  const [hoveredMedication, setHoveredMedication] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredMedication(index);
  };

  const handleMouseLeave = () => {
    setHoveredMedication(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 hover:bg-secondary rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold">Diabetes Management</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Glucose Monitoring</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Current Glucose Level (mg/dL)</label>
              <input
                type="number"
                value={currentGlucose}
                onChange={(e) => setCurrentGlucose(e.target.value)}
                className="w-full p-3 rounded-md border border-input bg-background"
                placeholder="Enter glucose level"
              />
            </div>

            {/* Chart Section */}
            <div className="h-[300px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockGlucoseData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="level"
                    stroke="#8884d8" // Use a valid color
                    strokeWidth={2}
                    dot={{ r: 4 }} // Add dots for each data point
                    activeDot={{ r: 8 }} // Highlight active dot on hover
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Glucose Update History */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Glucose Update History
              </h3>
              <div className="space-y-3">
                {mockGlucoseHistory.map((record) => (
                  <div key={record.id} className="p-4 bg-secondary rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-medium">{record.level}</p>
                      <p className="text-sm text-muted-foreground">{record.time}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Smartphone className="w-4 h-4" />
                      <span>{record.device}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Medication Reminders</h2>
              </div>
              <div className="space-y-4">
                {mockMedications.map((med, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div>
                      <p className="font-medium">{med.name}</p>
                      <p className="text-sm text-muted-foreground">{med.time}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {med.taken ? 'Taken' : 'Pending'}
                    </div>

                    {/* Pop-out Details */}
                    {hoveredMedication === index && (
                      <div className="absolute top-12 left-0 w-64 bg-white p-4 rounded-lg shadow-lg border border-border z-10 animate-fade-in">
                        <h3 className="font-semibold text-lg mb-2">{med.name}</h3>
                        <p className="text-sm text-gray-600"><span className="font-medium">Dosage:</span> {med.dosage}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Instructions:</span> {med.instructions}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Side Effects:</span> {med.sideEffects}</p>
                        {!med.taken && (
                          <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                            <Check className="w-4 h-4" />
                            <span>Mark as Taken</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Diet Suggestions</h2>
              </div>
              <div className="space-y-3">
                {mockDietSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 bg-secondary rounded-lg">
                    <p>{suggestion}</p>
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