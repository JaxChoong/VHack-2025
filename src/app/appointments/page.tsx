"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, Video, Phone, MapPin } from "lucide-react"

const appointments = [
  {
    title: "General Checkup",
    doctor: "Dr. Sarah Wilson",
    date: "Today",
    time: "2:00 PM",
    type: "In-person",
    location: "Main Clinic, Room 204",
    icon: MapPin,
  },
  {
    title: "Blood Test",
    doctor: "Dr. Michael Chen",
    date: "Tomorrow",
    time: "10:30 AM",
    type: "In-person",
    location: "Laboratory Center",
    icon: MapPin,
  },
  {
    title: "Follow-up Consultation",
    doctor: "Dr. Emily Brown",
    date: "March 15, 2024",
    time: "3:15 PM",
    type: "Video Call",
    location: "Online",
    icon: Video,
  },
  {
    title: "Medication Review",
    doctor: "Dr. James Taylor",
    date: "March 20, 2024",
    time: "11:00 AM",
    type: "Phone Call",
    location: "Phone",
    icon: Phone,
  },
]

export default function Appointments() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage your upcoming medical appointments</p>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule New
        </button>
      </div>

      <div className="space-y-6">
        {appointments.map((appointment, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-full bg-primary/10">
                <appointment.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{appointment.title}</h3>
                    <p className="text-muted-foreground">{appointment.doctor}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-sm bg-accent rounded-full">Reschedule</button>
                    <button className="px-3 py-1 text-sm bg-destructive text-destructive-foreground rounded-full">Cancel</button>
                  </div>
                </div>
                <div className="mt-4 flex gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}