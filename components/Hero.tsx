"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react";

const messages = [
  "Would you like to explore our AI integration solutions?",
  "Let me assist you with advanced data analytics.",
  "How can I enhance your business operations today?",
]

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState("")
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      const timer = setTimeout(() => {
        setCurrentMessage((prev) => prev + messages[messageIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentMessage("")
        setCharIndex(0)
        setMessageIndex((messageIndex + 1) % messages.length)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [charIndex, messageIndex])

  return (
    <section className="h-screen text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-purple-500 mb-4 text-sm animate-fadeInUp">• POWERED BY PANAVERSITY</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Enterprise AI Agents
          </span>
          <br />
          <span className="text-white">for the Future</span>
        </h1>
        <div className="mb-8 max-w-2xl mx-auto animate-fadeInUp hover-effect" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gray-900 rounded-lg p-6 flex items-center h-20">
          <Bot size={28} className="text-purple-400 mr-2" />
            <p className="text-gray-300 flex-grow text-left text-lg">
              {currentMessage}
              <span className="text-purple-500 animate-pulse">|</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            className="h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl animate-fadeInUp transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(147,51,234,0.8)]"
            style={{ animationDelay: "0.6s" }}
          >
            Deploy Your AI Agent →
          </Button>
          <Button
            variant="outline"
            className="h-12 bg-transparent text-white border-gray-700 hover:border-purple-500 hover:bg-black px-8 py-3 rounded-xl animate-fadeInUp transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(147,51,234,0.8)]"
            style={{ animationDelay: "0.8s" }}
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

