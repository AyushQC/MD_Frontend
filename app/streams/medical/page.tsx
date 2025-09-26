import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  User,
  BookOpen,
  Stethoscope,
  ExternalLink,
  Map,
  Calendar,
  TrendingUp,
  Heart,
  ArrowLeft,
  Clock,
  Users,
  DollarSign,
  LayoutDashboard,
  Brain,
} from "lucide-react"
import Link from "next/link"

export default function MedicalStream() {
  const medicalFields = [
    {
      name: "MBBS (General Medicine)",
      description: "Comprehensive medical education covering all aspects of healthcare",
      avgSalary: "₹6-30 LPA",
      jobOpportunities: "High",
      topCompanies: ["AIIMS", "Apollo", "Fortis", "Max Healthcare", "Manipal"],
      skills: ["Clinical Skills", "Patient Care", "Medical Knowledge", "Communication"],
    },
    {
      name: "BDS (Dental Surgery)",
      description: "Specialized training in oral health and dental procedures",
      avgSalary: "₹4-20 LPA",
      jobOpportunities: "Medium",
      topCompanies: ["Clove Dental", "Dental Corp", "Private Practice", "Hospitals"],
      skills: ["Dental Procedures", "Patient Management", "Oral Surgery", "Preventive Care"],
    },
    {
      name: "BAMS (Ayurvedic Medicine)",
      description: "Traditional Indian medicine system with modern applications",
      avgSalary: "₹3-15 LPA",
      jobOpportunities: "Growing",
      topCompanies: ["Patanjali", "Dabur", "Himalaya", "Government Hospitals"],
      skills: ["Ayurvedic Principles", "Herbal Medicine", "Panchakarma", "Diagnosis"],
    },
    {
      name: "BHMS (Homeopathic Medicine)",
      description: "Alternative medicine focusing on natural healing processes",
      avgSalary: "₹2-12 LPA",
      jobOpportunities: "Medium",
      topCompanies: ["SBL", "Dr. Reckeweg", "Private Clinics", "Wellness Centers"],
      skills: ["Homeopathic Remedies", "Case Taking", "Constitutional Analysis", "Patient Care"],
    },
  ]

  const exams = [
    { name: "NEET UG", link: "https://neet.nta.nic.in/", difficulty: "Very High", attempts: "1 per year" },
    { name: "NEET PG", link: "https://neet.nta.nic.in/", difficulty: "Very High", attempts: "1 per year" },
    { name: "AIIMS", link: "https://www.aiims.edu/", difficulty: "Very High", attempts: "1 per year" },
    { name: "JIPMER", link: "https://www.jipmer.edu.in/", difficulty: "High", attempts: "1 per year" },
    { name: "KCET Medical", link: "https://kea.kar.nic.in/", difficulty: "High", attempts: "1 per year" },
  ]

  const roadmapSteps = [
    {
      phase: "Foundation (Months 1-4)",
      topics: ["NCERT Biology thorough study", "Chemistry fundamentals", "Physics basics", "Previous year analysis"],
    },
    {
      phase: "Intermediate (Months 5-10)",
      topics: ["Advanced Biology concepts", "Organic Chemistry mastery", "Physics applications", "Mock test series"],
    },
    {
      phase: "Advanced (Months 11-12)",
      topics: ["Revision and practice", "Full-length tests", "Time management", "Exam strategy"],
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
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Medical</h1>
                  <p className="text-gray-600">Healthcare and medical sciences for aspiring doctors</p>
                </div>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2M+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">₹6-30L</div>
                  <div className="text-sm text-gray-600">Average Salary</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Job Placement</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5.5 Years</div>
                  <div className="text-sm text-gray-600">Course Duration</div>
                </CardContent>
              </Card>
            </div>

            {/* Medical Fields */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-600" />
                  <span>Medical Specializations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {medicalFields.map((field, index) => (
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
                          <div className="text-xs text-gray-500 mb-2">Top Employers</div>
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
                            <Badge variant="destructive">{exam.difficulty}</Badge>
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
