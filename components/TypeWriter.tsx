"use client"

import { useState, useEffect } from "react"

const messages = [
  "Let me assist you with advanced data analytics.",
  "Would you like to explore our AI integration solutions?",
  "Hello! I'm your AI agent. How can I enhance your business today?",
]

export function TypewriterEffect() {
  const [text, setText] = useState("")
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + messages[messageIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setText("")
        setMessageIndex((messageIndex + 1) % messages.length)
        setCharIndex(0)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, messageIndex])

  return (
    <div className="h-16 flex items-center">
      <p className="text-gray-300">{text}</p>
      <span className="animate-blink">|</span>
    </div>
  )
}

