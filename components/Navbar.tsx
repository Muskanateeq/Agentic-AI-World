"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Bot } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative flex items-center justify-between p-4 bg-black">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          {/* <span className="text-purple-500 mr-2"> */}
          <Bot size={28} className="text-purple-400 mr-2" />
          <span className="text-purple-400 mr-2">Agentia</span> World
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="#features" className="text-white hover:text-purple-500">
          Features
        </Link>
        <Link href="#technology" className="text-white hover:text-purple-500">
          Technology
        </Link>
        <Link href="#agents" className="text-white hover:text-purple-500">
          Agents
        </Link>
        <Link href="#pricing" className="text-white hover:text-purple-500">
          Pricing
        </Link>
        <Link href="#contact" className="text-white hover:text-purple-500">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">Launch Console</Button>
      </div>
      <div className="md:hidden">
      <Button onClick={toggleMenu} variant="ghost" className="text-white bg-transparent hover:bg-transparent focus:bg-transparent">
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black p-4 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link href="#features" className="text-white hover:text-purple-500">
              Features
            </Link>
            <Link href="#technology" className="text-white hover:text-purple-500">
              Technology
            </Link>
            <Link href="#agents" className="text-white hover:text-purple-500">
              Agents
            </Link>
            <Link href="#pricing" className="text-white hover:text-purple-500">
              Pricing
            </Link>
            <Link href="#contact" className="text-white hover:text-purple-500">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full mt-2">Launch Console</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

