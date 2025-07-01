"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Users,
  Mail,
  MessageSquare,
  MessageCircle,
  Zap,
  BarChart3,
  Globe,
  FileText,
  MessageSquareText,
  Heart,
  Grid3X3,
  Settings,
  ChevronRight,
  Phone,
} from "lucide-react"

export default function ActiveCampaignDashboard() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Handle iframe loading and auto-start
  useEffect(() => {
    if (isVoiceChatOpen) {
      setIsLoading(true)

      // Simulate loading time and then try to auto-start the call
      const timer = setTimeout(() => {
        setIsLoading(false)

        // Try to send a message to the iframe to auto-start the call
        if (iframeRef.current) {
          try {
            // This will attempt to trigger the start call button in the iframe
            iframeRef.current.contentWindow?.postMessage({ action: "startCall" }, "*")
          } catch (error) {
            console.log("Could not auto-start call, user will need to click Start Call button")
          }
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isVoiceChatOpen])

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-blue-500">
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-8 h-8" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded bg-blue-700">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>Getting Started</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Users className="w-5 h-5" />
            <span>Contacts</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>SMS</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Zap className="w-5 h-5" />
            <span>Automations</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <BarChart3 className="w-5 h-5" />
            <span>Deals</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Globe className="w-5 h-5" />
            <span>Website</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <FileText className="w-5 h-5" />
            <span>Reports</span>
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-blue-500 space-y-1">
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <MessageSquareText className="w-5 h-5" />
            <span>Chat with us</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Users className="w-5 h-5" />
            <span>Community</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Heart className="w-5 h-5" />
            <span>Refer Friends</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Grid3X3 className="w-5 h-5" />
            <span>Apps</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700 cursor-pointer mt-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
              B
            </div>
            <span>Brandon</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="text-gray-900 font-medium border-b-2 border-blue-600 pb-2">Getting started</div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create your first campaign</Button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-600 text-lg font-medium">ActiveCampaign for Course Creators</span>
              <ChevronRight className="w-5 h-5 text-blue-600 ml-1" />
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-2">Makes marketing</h1>
            <h1 className="text-5xl font-bold mb-8">
              <span className="text-gray-900">for course creators feel like </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">magic</span>
              <span className="text-purple-600">*</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Choose from proven playbooks designed specifically for course creators to grow your email list, nurture
              leads, and sell more courses.
            </p>

            {/* Goals Section */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Course Creator Playbook</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Select a proven marketing strategy that combines best practices with ActiveCampaign automation to
                achieve your goals in the first 30-90 days.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Grow Email List */}
                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Grow My Email List</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Attract leads interested in your course topic and turn website visitors into subscribers.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>• Lead magnet landing page</div>
                      <div>• Welcome automation</div>
                      <div>• Contact tagging system</div>
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                      Start This Playbook
                    </Button>
                  </CardContent>
                </Card>

                {/* Nurture New Leads */}
                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Nurture New Leads</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Build trust and credibility before pitching your course with valuable free content.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>• 5-email nurture sequence</div>
                      <div>• Value-first content strategy</div>
                      <div>• Behavioral segmentation</div>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      Start This Playbook
                    </Button>
                  </CardContent>
                </Card>

                {/* Sell My Course */}
                <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Sell My Course</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Convert leads to paying customers with evergreen or live course promotions.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>• Course launch sequence</div>
                      <div>• Cart abandonment follow-up</div>
                      <div>• Urgency & scarcity tactics</div>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                      Start This Playbook
                    </Button>
                  </CardContent>
                </Card>

                {/* Retain & Re-engage Students */}
                <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Retain & Re-engage</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Keep students engaged during the course and encourage repeat purchases or referrals.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div>• Student onboarding sequence</div>
                      <div>• Weekly check-in emails</div>
                      <div>• Completion & upsell automation</div>
                    </div>
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">
                      Start This Playbook
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Start Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Not sure which playbook to choose? Take our 2-minute assessment to get a personalized recommendation
                  based on your current goals and experience level.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Take Assessment</Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Browse All Templates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Phone Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Outer pulse ring - largest */}
            <div
              className="absolute inset-0 w-20 h-20 -top-3 -left-3 rounded-full bg-blue-400 opacity-30 animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Middle pulse ring */}
            <div
              className="absolute inset-0 w-16 h-16 -top-1 -left-1 rounded-full bg-blue-500 opacity-50 animate-pulse"
              style={{ animationDelay: "1s", animationDuration: "3s" }}
            ></div>

            {/* Inner pulse ring */}
            <div
              className="absolute inset-0 w-14 h-14 rounded-full bg-blue-600 opacity-70 animate-pulse"
              style={{ animationDelay: "2s", animationDuration: "3s" }}
            ></div>

            {/* Main button */}
            <Button
              onClick={() => setIsVoiceChatOpen(true)}
              className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group z-10"
              title="Talk to AI Marketing Expert"
            >
              <Phone
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                style={{ animation: "pulse 4s infinite" }}
              />

              {/* Inner glow effect */}
              <div
                className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-200"
                style={{ animation: "pulse 4s infinite" }}
              ></div>
            </Button>

            {/* Tooltip */}
            <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
              Talk to AI Marketing Expert
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Voice Chat Modal */}
        {isVoiceChatOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">ActiveCampaign Assistant</h2>
                    <p className="text-xs text-blue-100">Course marketing expert</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsVoiceChatOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-blue-700 rounded-full w-8 h-8 p-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Connecting to your AI assistant...</p>
                  <p className="text-sm text-gray-500">This may take a few seconds</p>
                </div>
              )}

              {/* Hume EVI Interface */}
              {!isLoading && (
                <div className="relative h-96 bg-gradient-to-b from-gray-50 to-white">
                  <iframe
                    ref={iframeRef}
                    src="https://empathic-voice-interface-starter-product-and-design.vercel.app/"
                    className="w-full h-full border-0"
                    title="Hume AI Voice Chat - Marketing Expert"
                    allow="microphone; camera"
                    style={{
                      background: "transparent",
                    }}
                  />

                  {/* Custom overlay to blend with ActiveCampaign styling */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Top gradient overlay */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 to-transparent"></div>
                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>

                  {/* Instruction overlay */}
                  <div className="absolute top-4 left-4 right-4 bg-blue-50 border border-blue-200 rounded-lg p-3 pointer-events-none">
                    <p className="text-sm text-blue-800 text-center">
                      👆 Click "Start Call" above to begin your conversation with the AI marketing expert
                    </p>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="border-t border-gray-100 p-3 bg-gray-50 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Powered by ActiveCampaign AI</span>
                  </div>
                  <button className="text-xs text-blue-600 hover:underline">Help</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
