import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Bot size={28} className="text-purple-400 mr-2" />
            <span className="text-purple-400 mr-2">Agentia</span> World
          </h3>
          <p className="text-gray-400 mb-4">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex space-x-4">
            <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                API
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  )
}

