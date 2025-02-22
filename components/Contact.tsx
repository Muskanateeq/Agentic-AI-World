import { Mail, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-black" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Ready to transform your business with AI?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-purple-500 mr-2" />
              <span>contact@agentiaworld.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-purple-500 mr-2" />
              <span>www.agentiaworld.com</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4 ">
                <Input placeholder="First Name" className="bg-black border-gray-900 rounded-xl focus:border-purple-500 focus:ring-purple-500" />
                <Input placeholder="Last Name" className="bg-black border-gray-900 rounded-xl focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <Input placeholder="Email Address" className="bg-black border-gray-900 mb-4 rounded-xl focus:border-purple-500 focus:ring-purple-500" />
              <Textarea placeholder="Your Message" className="bg-black border-gray-900 mb-4 rounded-xl focus:border-purple-500 focus:ring-purple-500" rows={4} />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

