"use client"

import { Card } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Calendar, Activity, Weight, Heart } from "lucide-react"

const personalInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Health Street, Medical City, MC 12345",
  dateOfBirth: "January 15, 1985",
  bloodType: "A+",
  height: "175 cm",
  weight: "68 kg"
}

const medicalHistory = [
  {
    condition: "Type 2 Diabetes",
    diagnosedDate: "2020",
    status: "Managed",
    medications: ["Metformin 500mg"]
  },
  {
    condition: "Hypertension",
    diagnosedDate: "2019",
    status: "Controlled",
    medications: ["Lisinopril 10mg"]
  }
]

const allergies = ["Penicillin", "Pollen"]

export default function Profile() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full">
            <User className="h-4 w-4" />
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
          <p className="text-muted-foreground">Patient ID: #12345</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{personalInfo.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">{personalInfo.dateOfBirth}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Health Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-accent/50 rounded-lg">
              <Activity className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Blood Type</p>
              <p className="font-medium">{personalInfo.bloodType}</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <Heart className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Height</p>
              <p className="font-medium">{personalInfo.height}</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <Weight className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="font-medium">{personalInfo.weight}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Medical History</h2>
          <div className="space-y-4">
            {medicalHistory.map((condition, i) => (
              <div key={i} className="p-4 bg-accent/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{condition.condition}</h3>
                  <span className="text-sm px-2 py-1 bg-primary/10 rounded-full">
                    {condition.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Diagnosed: {condition.diagnosedDate}</p>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">Medications:</p>
                  <ul className="list-disc list-inside">
                    {condition.medications.map((med, j) => (
                      <li key={j} className="text-sm">{med}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Allergies</h2>
          <div className="flex flex-wrap gap-2">
            {allergies.map((allergy, i) => (
              <span key={i} className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm">
                {allergy}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}