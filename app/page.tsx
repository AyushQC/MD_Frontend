import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Target, TrendingUp, GraduationCap, MapPin } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Margadarshi</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative py-20 px-4">
          {/* Background space - you can add your background here */}
          <div className="absolute inset-0 z-0">{/* This is where you can add your background image or pattern */}</div>

          {/* Content container */}
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
                Margadarshi - Your One-Stop Career & Education Guide
              </h1>
              <p className="text-xl text-gray-600 mb-12 text-pretty max-w-2xl mx-auto">
                Discover your perfect career path with personalized guidance, expert roadmaps, and comprehensive
                resources tailored for Indian students.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Illustration */}
            <div className="mb-12 relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 mx-auto max-w-2xl">
                <div className="grid grid-cols-3 gap-6 items-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Study</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Plan</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Succeed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                >
                  Take Career Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your College</h2>
              <p className="text-gray-600">
                Discover the perfect college for your career goals with our advanced search filters
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Districts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program/Course</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Programs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Link href="/colleges">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Search
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm flex items-center space-x-2">
                <span>💡</span>
                <span>Login and complete your profile to get personalized college suggestions!</span>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Margadarshi?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive career guidance tailored specifically for Indian students and their unique
            educational landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Roadmaps</h3>
            <p className="text-gray-600">
              Get customized career paths based on your interests, strengths, and academic background with
              timeline-based planning.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Exams</h3>
            <p className="text-gray-600">
              Stay updated with upcoming government exams, eligibility criteria, and preparation strategies for
              competitive exams.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">College Finder</h3>
            <p className="text-gray-600">
              Discover the best colleges and universities across India based on your preferred stream, location, and
              budget.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shape Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect career path with Margadarshi's expert guidance.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">Margadarshi</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in career and education guidance for Indian students.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/quiz" className="hover:text-white">
                    Career Quiz
                  </Link>
                </li>
                <li>
                  <Link href="/colleges" className="hover:text-white">
                    College Finder
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Government Exams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Streams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Study Materials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Margadarshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
