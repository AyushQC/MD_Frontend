"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, MapPin, Star, GraduationCap, ExternalLink } from "lucide-react"
import Link from "next/link"

const collegesData = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, Delhi",
    type: "Government",
    stream: "Engineering",
    programs: ["B.Tech", "M.Tech", "PhD"],
    rating: 4.8,
    fees: "₹2.5L per year",
    seats: 1200,
    established: 1961,
    description: "Premier engineering institute known for excellence in technology and research.",
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences",
    location: "New Delhi, Delhi",
    type: "Government",
    stream: "Medical",
    programs: ["MBBS", "MD", "MS"],
    rating: 4.9,
    fees: "₹1.5L per year",
    seats: 125,
    established: 1956,
    description: "Top medical college in India with world-class healthcare education.",
  },
  {
    id: 3,
    name: "St. Xavier's College",
    location: "Mumbai, Maharashtra",
    type: "Private",
    stream: "Arts",
    programs: ["BA", "MA", "BSc"],
    rating: 4.5,
    fees: "₹50K per year",
    seats: 800,
    established: 1869,
    description: "Renowned liberal arts college with excellent academic reputation.",
  },
  {
    id: 4,
    name: "Shri Ram College of Commerce",
    location: "New Delhi, Delhi",
    type: "Government",
    stream: "Commerce",
    programs: ["B.Com", "M.Com", "BBA"],
    rating: 4.6,
    fees: "₹30K per year",
    seats: 600,
    established: 1926,
    description: "Leading commerce college under Delhi University.",
  },
  {
    id: 5,
    name: "Indian Statistical Institute",
    location: "Kolkata, West Bengal",
    type: "Government",
    stream: "Science",
    programs: ["BSc", "MSc", "PhD"],
    rating: 4.7,
    fees: "₹1L per year",
    seats: 300,
    established: 1931,
    description: "Premier institute for statistics and mathematical sciences.",
  },
  {
    id: 6,
    name: "National Institute of Fashion Technology",
    location: "New Delhi, Delhi",
    type: "Government",
    stream: "Vocational",
    programs: ["B.Des", "M.Des", "MBA"],
    rating: 4.4,
    fees: "₹2L per year",
    seats: 400,
    established: 1986,
    description: "Leading fashion and design institute in India.",
  },
]

const districts = [
  "All Districts",
  "New Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
]

const streams = ["All Streams", "Engineering", "Medical", "Arts", "Commerce", "Science", "Vocational"]

const programs = ["All Programs", "B.Tech", "MBBS", "BA", "B.Com", "BSc", "B.Des", "MBA", "M.Tech", "MD"]

export default function CollegeFinder() {
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")
  const [selectedStream, setSelectedStream] = useState("All Streams")
  const [selectedProgram, setSelectedProgram] = useState("All Programs")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredColleges = collegesData.filter((college) => {
    const matchesDistrict = selectedDistrict === "All Districts" || college.location.includes(selectedDistrict)
    const matchesStream = selectedStream === "All Streams" || college.stream === selectedStream
    const matchesProgram =
      selectedProgram === "All Programs" || college.programs.some((program) => program.includes(selectedProgram))
    const matchesSearch = searchQuery === "" || college.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesDistrict && matchesStream && matchesProgram && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">College Finder</h1>
            </div>
            <p className="text-lg text-gray-600">
              Discover the best colleges and universities across India for your preferred stream and program
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search & Filter Colleges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Search College</label>
                  <Input
                    placeholder="Enter college name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">District</label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Stream</label>
                  <Select value={selectedStream} onValueChange={setSelectedStream}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {streams.map((stream) => (
                        <SelectItem key={stream} value={stream}>
                          {stream}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Program</label>
                  <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing {filteredColleges.length} colleges matching your criteria
                </p>
                <Button
                  onClick={() => {
                    setSelectedDistrict("All Districts")
                    setSelectedStream("All Streams")
                    setSelectedProgram("All Programs")
                    setSearchQuery("")
                  }}
                  variant="outline"
                  size="sm"
                  className="bg-transparent"
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="grid gap-6">
            {filteredColleges.length === 0 ? (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria to find more results.</p>
                </CardContent>
              </Card>
            ) : (
              filteredColleges.map((college) => (
                <Card key={college.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{college.location}</span>
                              </div>
                              <Badge variant={college.type === "Government" ? "default" : "secondary"}>
                                {college.type}
                              </Badge>
                              <Badge variant="outline">{college.stream}</Badge>
                            </div>
                            <p className="text-gray-700 mb-4">{college.description}</p>
                          </div>
                          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-semibold text-yellow-700">{college.rating}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-semibold text-blue-900">{college.fees}</div>
                            <div className="text-xs text-blue-600">Annual Fees</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-semibold text-green-900">{college.seats}</div>
                            <div className="text-xs text-green-600">Total Seats</div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-lg font-semibold text-purple-900">{college.established}</div>
                            <div className="text-xs text-purple-600">Established</div>
                          </div>
                          <div className="text-center p-3 bg-orange-50 rounded-lg">
                            <div className="text-lg font-semibold text-orange-900">{college.programs.length}</div>
                            <div className="text-xs text-orange-600">Programs</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Programs:</h4>
                          <div className="flex flex-wrap gap-2">
                            {college.programs.map((program, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3 lg:w-48">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          Compare
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          Save College
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
