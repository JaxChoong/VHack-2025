"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, Video, Phone, MapPin, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const appointments = [
  {
    title: "General Checkup",
    doctor: "Dr. Sarah Wilson",
    date: "Today",
    time: "2:00 PM",
    type: "In-person",
    location: "Main Clinic, Room 204",
    icon: MapPin,
    status: "upcoming",
  },
  {
    title: "Blood Test",
    doctor: "Dr. Michael Chen",
    date: "Tomorrow",
    time: "10:30 AM",
    type: "In-person",
    location: "Laboratory Center",
    icon: MapPin,
    status: "upcoming",
  },
  {
    title: "Follow-up Consultation",
    doctor: "Dr. Emily Brown",
    date: "March 15, 2024",
    time: "3:15 PM",
    type: "Video Call",
    location: "Online",
    icon: Video,
    status: "upcoming",
  },
  {
    title: "Medication Review",
    doctor: "Dr. James Taylor",
    date: "March 20, 2024",
    time: "11:00 AM",
    type: "Phone Call",
    location: "Phone",
    icon: Phone,
    status: "upcoming",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Appointments() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Appointments
          </h1>
          <p className="text-muted-foreground">Manage your upcoming medical appointments</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md">
          <Calendar className="h-5 w-5" />
          Schedule New
        </button>
      </div>

      <motion.div 
        className="space-y-4 md:space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {appointments.map((appointment, i) => (
          <motion.div key={i} variants={item}>
            <Card className="p-4 md:p-6 hover:shadow-md transition-all duration-200 border-l-4 border-primary">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <appointment.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{appointment.title}</h3>
                      <p className="text-muted-foreground">{appointment.doctor}</p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none px-4 py-1.5 text-sm bg-accent hover:bg-accent/90 rounded-full transition-all duration-200 hover:shadow-sm">
                        Reschedule
                      </button>
                      <button className="flex-1 sm:flex-none px-4 py-1.5 text-sm bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full transition-all duration-200 hover:shadow-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{appointment.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {appointment.type}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}