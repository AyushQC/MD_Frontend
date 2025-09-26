"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  User,
  BookOpen,
  Wrench,
  Stethoscope,
  Palette,
  Calculator,
  Microscope,
  ExternalLink,
  Map,
  Calendar,
  LayoutDashboard,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

export default function Streams() {
  const searchParams = useSearchParams()
  const focusStream = searchParams.get("focus")
  const streamRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const streams = [
    {
      name: "Engineering",
      icon: Wrench,
      color: "bg-blue-500",
      description: "Technical and engineering fields with diverse specializations",
      exams: [
        { name: "JEE Main", link: "https://jeemain.nta.nic.in/" },
        { name: "JEE Advanced", link: "https://jeeadv.ac.in/" },
        { name: "KCET", link: "https://kea.kar.nic.in/" },
        { name: "COMEDK", link: "https://comedk.org/" },
        { name: "BITSAT", link: "https://www.bitsadmission.com/" },
        { name: "VITEEE", link: "https://viteee.vit.ac.in/" },
      ],
      roadmapOptions: ["1 Month", "3 Months", "6 Months", "12 Months"],
    },
    {
      name: "Medical",
      icon: Stethoscope,
      color: "bg-red-500",
      description: "Healthcare and medical sciences for aspiring doctors",
      exams: [
        { name: "NEET UG", link: "https://neet.nta.nic.in/" },
        { name: "NEET PG", link: "https://neet.nta.nic.in/" },
        { name: "AIIMS", link: "https://www.aiims.edu/" },
        { name: "JIPMER", link: "https://www.jipmer.edu.in/" },
        { name: "KCET Medical", link: "https://kea.kar.nic.in/" },
      ],
      roadmapOptions: ["3 Months", "6 Months", "12 Months", "24 Months"],
    },
    {
      name: "Arts",
      icon: Palette,
      color: "bg-purple-500",
      description: "Liberal arts, literature, and creative fields",
      exams: [
        { name: "CUET", link: "https://cuet.samarth.ac.in/" },
        { name: "JNU Entrance", link: "https://www.jnu.ac.in/" },
        { name: "BHU UET", link: "https://www.bhu.ac.in/" },
        { name: "DU Entrance", link: "https://www.du.ac.in/" },
        { name: "EFLU Entrance", link: "https://efluniversity.ac.in/" },
      ],
      roadmapOptions: ["1 Month", "3 Months", "6 Months"],
    },
    {
      name: "Commerce",
      icon: Calculator,
      color: "bg-green-500",
      description: "Business, finance, and commerce related fields",
      exams: [
        { name: "CA Foundation", link: "https://www.icai.org/" },
        { name: "CS Foundation", link: "https://www.icsi.edu/" },
        { name: "CMA Foundation", link: "https://icmai.in/" },
        { name: "CUET Commerce", link: "https://cuet.samarth.ac.in/" },
        { name: "IPU CET", link: "https://ipu.ac.in/" },
      ],
      roadmapOptions: ["1 Month", "3 Months", "6 Months", "12 Months"],
    },
    {
      name: "Science",
      icon: Microscope,
      color: "bg-orange-500",
      description: "Pure and applied sciences including research fields",
      exams: [
        { name: "CUET Science", link: "https://cuet.samarth.ac.in/" },
        { name: "IIT JAM", link: "https://jam.iitm.ac.in/" },
        { name: "GATE", link: "https://gate.iitm.ac.in/" },
        { name: "NET", link: "https://ugcnet.nta.nic.in/" },
        { name: "JEST", link: "https://www.jest.org.in/" },
      ],
      roadmapOptions: ["3 Months", "6 Months", "12 Months", "24 Months"],
    },
    {
      name: "Vocational",
      icon: BookOpen,
      color: "bg-indigo-500",
      description: "Skill-based training and professional courses",
      exams: [
        { name: "ITI Entrance", link: "https://www.dget.nic.in/" },
        { name: "Polytechnic", link: "https://www.dget.nic.in/" },
        { name: "NSQF Certification", link: "https://www.nsqf.gov.in/" },
        { name: "Skill India", link: "https://www.skillindia.gov.in/" },
      ],
      roadmapOptions: ["1 Month", "3 Months", "6 Months"],
    },
  ]

  useEffect(() => {
    if (focusStream) {
      const targetStream = streamRefs.current[focusStream]
      if (targetStream) {
        setTimeout(() => {
          targetStream.scrollIntoView({ behavior: "smooth", block: "center" })
          targetStream.classList.add("ring-2", "ring-blue-500", "ring-opacity-50")
          setTimeout(() => {
            targetStream.classList.remove("ring-2", "ring-blue-500", "ring-opacity-50")
          }, 3000)
        }, 100)
      }
    }
  }, [focusStream])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
          <div className="p-6">
            <Link href="/" className="flex items-center space-x-2 mb-8 hover:opacity-80 transition-opacity">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Margadarshi</span>
            </Link>

            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/quiz"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Brain className="h-5 w-5" />
                <span>Career Quiz</span>
              </Link>
              <Link
                href="/streams"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Streams</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Streams</h1>
              <p className="text-gray-600">Explore different career paths with related exams and roadmaps</p>
            </div>

            {/* Streams Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {streams.map((stream, index) => {
                const IconComponent = stream.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300"
                    ref={(el) => {
                      streamRefs.current[stream.name.toLowerCase()] = el
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${stream.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{stream.name}</h3>
                          <p className="text-sm text-gray-600 font-normal">{stream.description}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Related Exams */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <BookOpen className="h-4 w-4" />
                          <span>Related Exams</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {stream.exams.map((exam, examIndex) => (
                            <a
                              key={examIndex}
                              href={exam.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span className="text-sm font-medium text-gray-700">{exam.name}</span>
                              <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-600" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Roadmap Generator */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <Map className="h-4 w-4" />
                          <span>Generate Roadmap</span>
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Create a personalized study plan for {stream.name.toLowerCase()}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {stream.roadmapOptions.map((duration, durationIndex) => (
                            <Button
                              key={durationIndex}
                              variant="outline"
                              size="sm"
                              className="flex items-center justify-center space-x-2 bg-transparent"
                            >
                              <Calendar className="h-3 w-3" />
                              <span>{duration}</span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link href={`/streams/${stream.name.toLowerCase()}`}>
                          <Button className="w-full" variant="default">
                            Explore {stream.name} Career Path
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
