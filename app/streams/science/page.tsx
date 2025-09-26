import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  User,
  ArrowLeft,
  BookOpen,
  Microscope,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Target,
  LayoutDashboard,
  Brain,
} from "lucide-react"
import Link from "next/link"

export default function ScienceStream() {
  const specializations = [
    {
      name: "Physics",
      description: "Study of matter, energy, and fundamental forces of nature",
      careers: ["Research Scientist", "Physics Professor", "Data Scientist", "Quantum Computing Specialist"],
      avgSalary: "₹6-20 LPA",
    },
    {
      name: "Chemistry",
      description: "Study of chemical reactions, compounds, and molecular structures",
      careers: ["Chemical Engineer", "Research Chemist", "Quality Control Analyst", "Pharmaceutical Scientist"],
      avgSalary: "₹5-18 LPA",
    },
    {
      name: "Biology",
      description: "Study of living organisms and biological processes",
      careers: ["Biologist", "Biotechnologist", "Environmental Scientist", "Genetic Counselor"],
      avgSalary: "₹4-15 LPA",
    },
    {
      name: "Mathematics",
      description: "Study of numbers, patterns, and mathematical structures",
      careers: ["Mathematician", "Statistician", "Actuary", "Data Analyst"],
      avgSalary: "₹5-22 LPA",
    },
  ]

  const entranceExams = [
    { name: "CUET Science", fullName: "Common University Entrance Test", link: "https://cuet.samarth.ac.in/" },
    { name: "IIT JAM", fullName: "Joint Admission Test for M.Sc.", link: "https://jam.iitm.ac.in/" },
    { name: "GATE", fullName: "Graduate Aptitude Test in Engineering", link: "https://gate.iitm.ac.in/" },
    { name: "NET", fullName: "National Eligibility Test", link: "https://ugcnet.nta.nic.in/" },
    { name: "JEST", fullName: "Joint Entrance Screening Test", link: "https://www.jest.org.in/" },
  ]

  const studyRoadmap = [
    {
      phase: "Foundation (Months 1-6)",
      topics: ["Basic scientific principles", "Mathematical foundations", "Laboratory techniques", "Scientific method"],
    },
    {
      phase: "Intermediate (Months 7-18)",
      topics: ["Advanced theoretical concepts", "Specialized coursework", "Research methodology", "Data analysis"],
    },
    {
      phase: "Advanced (Months 19-24)",
      topics: ["Independent research", "Thesis preparation", "Publication writing", "Conference presentations"],
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
              <Link href="/streams" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Streams
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Science</h1>
                  <p className="text-gray-600">Pure and applied sciences including research fields</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Specializations */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-orange-600" />
                      <span>Specializations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {specializations.map((spec, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                          <h3 className="font-semibold text-gray-900 mb-2">{spec.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{spec.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {spec.careers.map((career, careerIndex) => (
                              <Badge key={careerIndex} variant="secondary" className="text-xs">
                                {career}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-green-600 font-medium">{spec.avgSalary}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Study Roadmap */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-orange-600" />
                      <span>24-Month Study Roadmap</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studyRoadmap.map((phase, index) => (
                        <div key={index} className="border-l-4 border-orange-500 pl-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                          <ul className="space-y-1">
                            {phase.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Entrance Exams */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-6 w-6 text-orange-600" />
                      <span>Entrance Exams</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {entranceExams.map((exam, index) => (
                        <a
                          key={index}
                          href={exam.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-orange-600" />
                          </div>
                          <p className="text-sm text-gray-600">{exam.fullName}</p>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-orange-600" />
                      <span>Quick Stats</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average Salary Range</span>
                        <span className="font-semibold text-gray-900">₹4-22 LPA</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Study Duration</span>
                        <span className="font-semibold text-gray-900">3-6 Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Job Market</span>
                        <span className="font-semibold text-green-600">Growing</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Research Opportunities</span>
                        <span className="font-semibold text-orange-600">Excellent</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
