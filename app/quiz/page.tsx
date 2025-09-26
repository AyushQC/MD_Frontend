"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Brain, CheckCircle } from "lucide-react"
import Link from "next/link"

const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      "Solving mathematical problems and puzzles",
      "Reading and writing stories or articles",
      "Working with your hands and building things",
      "Helping and caring for others",
      "Analyzing data and finding patterns",
    ],
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      "Mathematics and Physics",
      "Literature and History",
      "Biology and Chemistry",
      "Arts and Design",
      "Economics and Business Studies",
    ],
  },
  {
    id: 3,
    question: "What kind of work environment appeals to you?",
    options: [
      "Office with computers and technology",
      "Laboratory or research facility",
      "Outdoor fieldwork",
      "Creative studio or workshop",
      "Hospital or healthcare facility",
    ],
  },
  {
    id: 4,
    question: "What are your strongest skills?",
    options: [
      "Logical thinking and problem-solving",
      "Communication and leadership",
      "Creativity and artistic abilities",
      "Empathy and interpersonal skills",
      "Attention to detail and organization",
    ],
  },
  {
    id: 5,
    question: "Which career outcome is most important to you?",
    options: [
      "High salary and financial stability",
      "Making a positive impact on society",
      "Creative expression and innovation",
      "Job security and work-life balance",
      "Recognition and professional growth",
    ],
  },
]

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const getCareerSuggestions = () => {
    // Simple logic based on answers - in a real app this would be more sophisticated
    const answerValues = Object.values(answers)
    const suggestions = [
      {
        career: "Software Engineering",
        match: "85%",
        description: "Based on your logical thinking skills and interest in technology",
        streams: ["Computer Science", "Information Technology"],
      },
      {
        career: "Data Science",
        match: "78%",
        description: "Your analytical skills and pattern recognition abilities align well",
        streams: ["Statistics", "Computer Science", "Mathematics"],
      },
      {
        career: "Business Analytics",
        match: "72%",
        description: "Combination of business acumen and analytical thinking",
        streams: ["Business Administration", "Economics", "Statistics"],
      },
    ]
    return suggestions
  }

  if (showResults) {
    const suggestions = getCareerSuggestions()

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
              <p className="text-lg text-gray-600">Here are your personalized career suggestions</p>
            </div>

            {/* Results */}
            <div className="space-y-6 mb-8">
              {suggestions.map((suggestion, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{suggestion.career}</h3>
                        <p className="text-gray-600 mb-3">{suggestion.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestion.streams.map((stream, streamIndex) => (
                            <span
                              key={streamIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {stream}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600 mb-1">{suggestion.match}</div>
                        <div className="text-sm text-gray-500">Match</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Explore {suggestion.career} Roadmap
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResults(false)
                }}
                variant="outline"
                className="px-8"
              >
                Retake Quiz
              </Button>
              <Link href="/dashboard">
                <Button className="px-8 bg-blue-600 hover:bg-blue-700">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Career Assessment Quiz</h1>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Answer these questions to discover careers that match your interests and strengths
            </p>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{quizQuestions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-700">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            >
              <span>{currentQuestion === quizQuestions.length - 1 ? "Get Suggestions" : "Next"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
