import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  User,
  BookOpen,
  Wrench,
  ExternalLink,
  Map,
  Calendar,
  TrendingUp,
  Cog,
  ArrowLeft,
  Clock,
  Users,
  DollarSign,
  LayoutDashboard,
  Brain,
} from "lucide-react"
import Link from "next/link"

export default function EngineeringStream() {
  const engineeringFields = [
    {
      name: "Computer Science Engineering",
      description: "Software development, AI, machine learning, and data science",
      avgSalary: "₹8-25 LPA",
      jobOpportunities: "High",
      topCompanies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
      skills: ["Programming", "Data Structures", "Algorithms", "System Design"],
    },
    {
      name: "Mechanical Engineering",
      description: "Design, manufacturing, and maintenance of mechanical systems",
      avgSalary: "₹4-15 LPA",
      jobOpportunities: "Medium",
      topCompanies: ["Tata Motors", "Mahindra", "L&T", "BHEL", "Bajaj"],
      skills: ["CAD Design", "Thermodynamics", "Manufacturing", "Project Management"],
    },
    {
      name: "Electrical Engineering",
      description: "Power systems, electronics, and electrical equipment design",
      avgSalary: "₹5-18 LPA",
      jobOpportunities: "Medium",
      topCompanies: ["NTPC", "PowerGrid", "Siemens", "ABB", "Schneider"],
      skills: ["Circuit Design", "Power Systems", "Control Systems", "Electronics"],
    },
    {
      name: "Civil Engineering",
      description: "Infrastructure development, construction, and urban planning",
      avgSalary: "₹3-12 LPA",
      jobOpportunities: "Medium",
      topCompanies: ["L&T", "DLF", "Godrej Properties", "NBCC", "IRCON"],
      skills: ["Structural Design", "Project Planning", "AutoCAD", "Construction Management"],
    },
  ]

  const exams = [
    { name: "JEE Main", link: "https://jeemain.nta.nic.in/", difficulty: "High", attempts: "2 per year" },
    { name: "JEE Advanced", link: "https://jeeadv.ac.in/", difficulty: "Very High", attempts: "1 per year" },
    { name: "KCET", link: "https://kea.kar.nic.in/", difficulty: "Medium", attempts: "1 per year" },
    { name: "COMEDK", link: "https://comedk.org/", difficulty: "Medium", attempts: "1 per year" },
    { name: "BITSAT", link: "https://www.bitsadmission.com/", difficulty: "High", attempts: "Multiple slots" },
    { name: "VITEEE", link: "https://viteee.vit.ac.in/", difficulty: "Medium", attempts: "Multiple slots" },
  ]

  const roadmapSteps = [
    {
      phase: "Foundation (Months 1-3)",
      topics: ["Mathematics fundamentals", "Physics basics", "Chemistry essentials", "Basic problem solving"],
    },
    {
      phase: "Intermediate (Months 4-8)",
      topics: ["Advanced mathematics", "Physics applications", "Chemistry reactions", "Mock tests"],
    },
    {
      phase: "Advanced (Months 9-12)",
      topics: ["Complex problem solving", "Time management", "Full-length tests", "Revision strategies"],
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
              <Link
                href="/streams"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Streams</span>
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Engineering</h1>
                  <p className="text-gray-600">Technical and engineering fields with diverse specializations</p>
                </div>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15M+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">₹8-25L</div>
                  <div className="text-sm text-gray-600">Average Salary</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Job Placement</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4 Years</div>
                  <div className="text-sm text-gray-600">Course Duration</div>
                </CardContent>
              </Card>
            </div>

            {/* Engineering Fields */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cog className="h-6 w-6 text-blue-600" />
                  <span>Engineering Specializations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {engineeringFields.map((field, index) => (
                    <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{field.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{field.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Average Salary</div>
                            <div className="font-semibold text-green-600">{field.avgSalary}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Job Market</div>
                            <Badge variant={field.jobOpportunities === "High" ? "default" : "secondary"}>
                              {field.jobOpportunities}
                            </Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-2">Top Companies</div>
                          <div className="flex flex-wrap gap-1">
                            {field.topCompanies.slice(0, 3).map((company, companyIndex) => (
                              <Badge key={companyIndex} variant="outline" className="text-xs">
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500 mb-2">Key Skills</div>
                          <div className="flex flex-wrap gap-1">
                            {field.skills.slice(0, 3).map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Entrance Exams */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <span>Entrance Exams</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {exams.map((exam, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{exam.name}</h4>
                            <Badge
                              variant={
                                exam.difficulty === "Very High"
                                  ? "destructive"
                                  : exam.difficulty === "High"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {exam.difficulty}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">{exam.attempts}</div>
                        </div>
                        <a
                          href={exam.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Roadmap */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Map className="h-6 w-6 text-purple-600" />
                    <span>12-Month Study Roadmap</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {roadmapSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-semibold text-purple-600">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{step.phase}</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {step.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {index < roadmapSteps.length - 1 && (
                          <div className="absolute left-4 top-8 w-0.5 h-6 bg-purple-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />6 Month Plan
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />3 Month Plan
                      </Button>
                    </div>
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
