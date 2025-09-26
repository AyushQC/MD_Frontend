import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LayoutDashboard,
  Brain,
  FileText,
  GraduationCap,
  User,
  Calendar,
  TrendingUp,
  BookOpen,
  Stethoscope,
  Palette,
  Calculator,
  Microscope,
  Wrench,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const upcomingExams = [
    {
      name: "UPSC Civil Services",
      date: "June 2025",
      description: "Preliminary examination for civil services",
      category: "Government",
    },
    {
      name: "SSC CGL",
      date: "July 2025",
      description: "Combined Graduate Level Examination",
      category: "Government",
    },
    {
      name: "IBPS PO",
      date: "August 2025",
      description: "Probationary Officer recruitment",
      category: "Banking",
    },
    {
      name: "GATE 2026",
      date: "February 2026",
      description: "Graduate Aptitude Test in Engineering",
      category: "Engineering",
    },
  ]

  const streams = [
    {
      name: "Engineering",
      icon: Wrench,
      color: "bg-blue-500",
      description: "Technical and engineering fields",
      exams: [
        { name: "JEE Main", link: "https://jeemain.nta.nic.in/" },
        { name: "KCET", link: "https://kea.kar.nic.in/" },
        { name: "COMEDK", link: "https://comedk.org/" },
      ],
    },
    {
      name: "Medical",
      icon: Stethoscope,
      color: "bg-red-500",
      description: "Healthcare and medical sciences",
      exams: [
        { name: "NEET UG", link: "https://neet.nta.nic.in/" },
        { name: "AIIMS", link: "https://www.aiims.edu/" },
        { name: "JIPMER", link: "https://www.jipmer.edu.in/" },
      ],
    },
    {
      name: "Arts",
      icon: Palette,
      color: "bg-purple-500",
      description: "Liberal arts and humanities",
      exams: [
        { name: "CUET", link: "https://cuet.samarth.ac.in/" },
        { name: "JNU Entrance", link: "https://www.jnu.ac.in/" },
        { name: "BHU UET", link: "https://www.bhu.ac.in/" },
      ],
    },
    {
      name: "Commerce",
      icon: Calculator,
      color: "bg-green-500",
      description: "Business and commerce",
      exams: [
        { name: "CA Foundation", link: "https://www.icai.org/" },
        { name: "CS Foundation", link: "https://www.icsi.edu/" },
        { name: "CMA Foundation", link: "https://icmai.in/" },
      ],
    },
    {
      name: "Science",
      icon: Microscope,
      color: "bg-orange-500",
      description: "Pure and applied sciences",
      exams: [
        { name: "IIT JAM", link: "https://jam.iitm.ac.in/" },
        { name: "GATE", link: "https://gate.iitm.ac.in/" },
        { name: "NET", link: "https://ugcnet.nta.nic.in/" },
      ],
    },
    {
      name: "Vocational",
      icon: BookOpen,
      color: "bg-indigo-500",
      description: "Skill-based training programs",
      exams: [
        { name: "ITI Entrance", link: "https://www.dget.nic.in/" },
        { name: "Polytechnic", link: "https://www.dget.nic.in/" },
        { name: "NSQF Certification", link: "https://www.nsqf.gov.in/" },
      ],
    },
  ]

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
                className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
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
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
              <p className="text-gray-600">Track your progress and explore new opportunities</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                  <span>Explore Career Streams</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {streams.map((stream, index) => {
                    const IconComponent = stream.icon
                    return (
                      <Link key={index} href={`/streams?focus=${stream.name.toLowerCase()}`} className="group">
                        <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                          <div
                            className={`w-16 h-16 ${stream.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`}
                          >
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="font-medium text-gray-900 text-sm">{stream.name}</h3>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Upcoming Government Exams */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    <span>Upcoming Government Exams</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingExams.map((exam, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{exam.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {exam.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{exam.description}</p>
                          <div className="flex items-center space-x-1 text-sm text-blue-600">
                            <Calendar className="h-4 w-4" />
                            <span>{exam.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Exams
                  </Button>
                </CardContent>
              </Card>

              {/* Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    <span>Your Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Career Quiz Completion</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Roadmap Progress</span>
                        <span className="text-sm text-gray-500">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Complete your career assessment</li>
                      <li>• Explore engineering roadmaps</li>
                      <li>• Update your academic preferences</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
