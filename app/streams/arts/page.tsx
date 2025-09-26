import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  User,
  ArrowLeft,
  BookOpen,
  Palette,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Target,
  LayoutDashboard,
  Brain,
} from "lucide-react"
import Link from "next/link"

export default function ArtsStream() {
  const specializations = [
    {
      name: "Literature & Languages",
      description: "Study of languages, literature, and linguistic analysis",
      careers: ["Writer", "Translator", "Editor", "Content Creator"],
      avgSalary: "₹3-8 LPA",
    },
    {
      name: "History & Archaeology",
      description: "Study of past civilizations and cultural heritage",
      careers: ["Historian", "Archaeologist", "Museum Curator", "Researcher"],
      avgSalary: "₹4-10 LPA",
    },
    {
      name: "Fine Arts",
      description: "Visual arts, painting, sculpture, and creative expression",
      careers: ["Artist", "Art Director", "Gallery Manager", "Art Therapist"],
      avgSalary: "₹3-12 LPA",
    },
    {
      name: "Philosophy & Ethics",
      description: "Study of fundamental questions about existence and morality",
      careers: ["Professor", "Counselor", "Policy Analyst", "Writer"],
      avgSalary: "₹4-15 LPA",
    },
  ]

  const entranceExams = [
    { name: "CUET", fullName: "Common University Entrance Test", link: "https://cuet.samarth.ac.in/" },
    { name: "JNU Entrance", fullName: "Jawaharlal Nehru University", link: "https://www.jnu.ac.in/" },
    { name: "BHU UET", fullName: "Banaras Hindu University", link: "https://www.bhu.ac.in/" },
    { name: "DU Entrance", fullName: "Delhi University", link: "https://www.du.ac.in/" },
    { name: "EFLU Entrance", fullName: "English & Foreign Languages University", link: "https://efluniversity.ac.in/" },
  ]

  const studyRoadmap = [
    {
      phase: "Foundation (Months 1-2)",
      topics: [
        "Basic concepts in chosen specialization",
        "Reading comprehension",
        "Writing skills",
        "Critical thinking",
      ],
    },
    {
      phase: "Intermediate (Months 3-4)",
      topics: ["Advanced theoretical concepts", "Research methodology", "Historical analysis", "Creative projects"],
    },
    {
      phase: "Advanced (Months 5-6)",
      topics: ["Specialized topics", "Thesis preparation", "Portfolio development", "Practical applications"],
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
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Arts & Humanities</h1>
                  <p className="text-gray-600">Liberal arts, literature, and creative fields</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Specializations */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-purple-600" />
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
                      <Clock className="h-6 w-6 text-purple-600" />
                      <span>6-Month Study Roadmap</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studyRoadmap.map((phase, index) => (
                        <div key={index} className="border-l-4 border-purple-500 pl-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                          <ul className="space-y-1">
                            {phase.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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
                      <BookOpen className="h-6 w-6 text-purple-600" />
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
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
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
                      <Users className="h-6 w-6 text-purple-600" />
                      <span>Quick Stats</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average Salary Range</span>
                        <span className="font-semibold text-gray-900">₹3-15 LPA</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Study Duration</span>
                        <span className="font-semibold text-gray-900">3-4 Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Job Market</span>
                        <span className="font-semibold text-green-600">Growing</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Creativity Level</span>
                        <span className="font-semibold text-purple-600">Very High</span>
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
