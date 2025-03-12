"use client"

import { Card } from "@/components/ui/card"
import { Bell, MessageSquare } from "lucide-react"
import {
  Activity,
  Heart,
  Weight,
  Thermometer,
  Calendar,
  Pill,
  Clock,
  TrendingUp
} from "lucide-react"

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your health overview for today</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                <div className="p-2 rounded-full bg-background">
                  <appointment.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{appointment.title}</p>
                  <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                </div>
                <p className="text-sm text-muted-foreground">{appointment.time}</p>
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
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                <div className="p-2 rounded-full bg-background">
                  <medication.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{medication.name}</p>
                  <p className="text-sm text-muted-foreground">{medication.dosage}</p>
                </div>
                <p className="text-sm text-muted-foreground">{medication.time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}