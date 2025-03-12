"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Activity, Heart, Weight, Thermometer } from "lucide-react"

const healthData = [
  { date: '2024-03-01', heartRate: 72, bloodPressure: 120, weight: 68, temperature: 36.5 },
  { date: '2024-03-02', heartRate: 75, bloodPressure: 122, weight: 68.2, temperature: 36.6 },
  { date: '2024-03-03', heartRate: 71, bloodPressure: 118, weight: 67.8, temperature: 36.4 },
  { date: '2024-03-04', heartRate: 73, bloodPressure: 121, weight: 67.9, temperature: 36.5 },
  { date: '2024-03-05', heartRate: 74, bloodPressure: 119, weight: 68.1, temperature: 36.6 },
  { date: '2024-03-06', heartRate: 70, bloodPressure: 117, weight: 67.7, temperature: 36.3 },
  { date: '2024-03-07', heartRate: 72, bloodPressure: 120, weight: 67.5, temperature: 36.5 },
]

const stats = [
  {
    title: "Heart Rate",
    value: "72 BPM",
    change: "+2.1%",
    icon: Heart,
    chartColor: "hsl(var(--chart-1))"
  },
  {
    title: "Blood Pressure",
    value: "120/80",
    change: "-0.4%",
    icon: Activity,
    chartColor: "hsl(var(--chart-2))"
  },
  {
    title: "Weight",
    value: "68 kg",
    change: "-0.2%",
    icon: Weight,
    chartColor: "hsl(var(--chart-3))"
  },
  {
    title: "Temperature",
    value: "36.5°C",
    change: "0%",
    icon: Thermometer,
    chartColor: "hsl(var(--chart-4))"
  }
]

export default function HealthStats() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Health Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : stat.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}`}>
                  {stat.change} from last week
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Health Trends</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="date" 
                  className="text-muted-foreground"
                  tick={{ fill: 'currentColor' }}
                  tickLine={{ stroke: 'currentColor' }}
                  axisLine={{ stroke: 'currentColor' }}
                />
                <YAxis 
                  className="text-muted-foreground"
                  tick={{ fill: 'currentColor' }}
                  tickLine={{ stroke: 'currentColor' }}
                  axisLine={{ stroke: 'currentColor' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="heartRate" 
                  name="Heart Rate" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="bloodPressure" 
                  name="Blood Pressure" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  name="Weight" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  name="Temperature" 
                  stroke="hsl(var(--chart-4))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}