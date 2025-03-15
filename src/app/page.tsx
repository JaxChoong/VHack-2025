"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Heart,
  Weight,
  Thermometer,
  Calendar,
  Pill,
  Clock,
  Bell,
  MessageSquare,
  Droplet,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const healthData = [
  {
    date: "2024-03-01",
    heartRate: 72,
    bloodPressure: 120,
    weight: 68,
    temperature: 36.5,
  },
  {
    date: "2024-03-02",
    heartRate: 75,
    bloodPressure: 122,
    weight: 68.2,
    temperature: 36.6,
  },
  {
    date: "2024-03-03",
    heartRate: 71,
    bloodPressure: 118,
    weight: 67.8,
    temperature: 36.4,
  },
  {
    date: "2024-03-04",
    heartRate: 73,
    bloodPressure: 121,
    weight: 67.9,
    temperature: 36.5,
  },
  {
    date: "2024-03-05",
    heartRate: 74,
    bloodPressure: 119,
    weight: 68.1,
    temperature: 36.6,
  },
  {
    date: "2024-03-06",
    heartRate: 70,
    bloodPressure: 117,
    weight: 67.7,
    temperature: 36.3,
  },
  {
    date: "2024-03-07",
    heartRate: 72,
    bloodPressure: 120,
    weight: 67.5,
    temperature: 36.5,
  },
];

const stats = [
  {
    title: "Heart Rate",
    value: "72 BPM",
    change: "+2.1%",
    icon: Heart,
    chartColor: "hsl(var(--chart-1))",
  },
  {
    title: "Blood Pressure",
    value: "120/80",
    change: "-0.4%",
    icon: Activity,
    chartColor: "hsl(var(--chart-2))",
  },
  {
    title: "Weight",
    value: "68 kg",
    change: "-0.2%",
    icon: Weight,
    chartColor: "hsl(var(--chart-3))",
  },
  {
    title: "Temperature",
    value: "36.5°C",
    change: "0%",
    icon: Thermometer,
    chartColor: "hsl(var(--chart-4))",
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8 pl-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here's your health overview for today
          </p>
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-accent">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-accent">
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mx-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Heart Rate</p>
              <p className="text-2xl font-semibold">72 BPM</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Weight className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="text-2xl font-semibold">68 kg</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Thermometer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-2xl font-semibold">36.5°C</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Blood Pressure</p>
              <p className="text-2xl font-semibold">120/80</p>
            </div>
          </div>
        </Card>
      </div>

      
      <div className=" bg-gradient-to-b from-background to-secondary">
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-8">Health Dashboard</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl ">
            <Link href="/diabetes">
              <div className="group hover:scale-105 transition-transform duration-200 bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Droplet className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Diabetes Tracking</h2>
                </div>
                <p className="text-muted-foreground">
                  Monitor glucose levels, get diet suggestions, and manage
                  medication reminders
                </p>
              </div>
            </Link>

            <Link href="/heart">
              <div className="group hover:scale-105 transition-transform duration-200 bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-destructive/10 rounded-full">
                    <Heart className="w-8 h-8 text-destructive" />
                  </div>
                  <h2 className="text-2xl font-semibold">Heart Health</h2>
                </div>
                <p className="text-muted-foreground">
                  Track heart rate, monitor activity levels, and receive
                  lifestyle recommendations
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>

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
                  <p
                    className={`text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-500"
                        : stat.change.startsWith("-")
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
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
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="date"
                    className="text-muted-foreground"
                    tick={{ fill: "currentColor" }}
                    tickLine={{ stroke: "currentColor" }}
                    axisLine={{ stroke: "currentColor" }}
                  />
                  <YAxis
                    className="text-muted-foreground"
                    tick={{ fill: "currentColor" }}
                    tickLine={{ stroke: "currentColor" }}
                    axisLine={{ stroke: "currentColor" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {[
              {
                title: "General Checkup",
                doctor: "Dr. Sarah Wilson",
                time: "Today, 2:00 PM",
                icon: Calendar,
              },
              {
                title: "Blood Test",
                doctor: "Dr. Michael Chen",
                time: "Tomorrow, 10:30 AM",
                icon: Activity,
              },
            ].map((appointment, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50"
              >
                <div className="p-2 rounded-full bg-background">
                  <appointment.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{appointment.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.doctor}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {appointment.time}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Medication Schedule</h2>
          <div className="space-y-4">
            {[
              {
                name: "Metformin",
                dosage: "500mg",
                time: "8:00 AM",
                icon: Pill,
              },
              {
                name: "Lisinopril",
                dosage: "10mg",
                time: "9:00 PM",
                icon: Clock,
              },
            ].map((medication, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50"
              >
                <div className="p-2 rounded-full bg-background">
                  <medication.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{medication.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {medication.dosage}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {medication.time}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
