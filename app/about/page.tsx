'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mountain, Github, Twitter, Linkedin, Mail, MapPin, Users } from 'lucide-react'
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.header 
        className="px-4 lg:px-6 h-16 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <Mountain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">BlogVista</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Posts', href: '/posts' },
            { name: 'Contact', href: '/contact' },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors" href={item.href}>
                {item.name}
              </Link>
            </motion.div>
          ))}
           <ModeToggle />
        </nav>
      </motion.header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div 
              className="flex flex-col items-center space-y-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=200&text=BlogVista"
                  alt="BlogVista Logo"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-blue-500 shadow-lg"
                />
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                About BlogVista
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                BlogVista is more than just a platform; it's a community of passionate writers, thinkers, and readers. We're dedicated to sharing insightful articles, thought-provoking ideas, and engaging stories that inspire, educate, and entertain our global audience.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="https://github.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Journey
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[700px] text-gray-600 md:text-lg dark:text-gray-300 text-center leading-relaxed mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founded in 2023, BlogVista started as a small personal blog and has since grown into a vibrant community of writers and readers. We believe in the power of words to change perspectives, spark conversations, and drive positive change in the world.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { title: "Our Mission", description: "To inspire and educate through compelling content, fostering a global community of lifelong learners and critical thinkers.", icon: Users },
                { title: "Our Vision", description: "To become the go-to platform for insightful and diverse perspectives, shaping the future of digital discourse and knowledge sharing.", icon: Mountain },
                { title: "Our Values", description: "Integrity in our content, creativity in our approach, and unwavering commitment to community engagement and empowerment.", icon: Mail }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { name: "Jane Doe", role: "Founder & Editor-in-Chief", image: "/placeholder.svg?height=300&width=300&text=Jane" },
                { name: "John Smith", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300&text=John" },
                { name: "Emily Brown", role: "Content Strategist", image: "/placeholder.svg?height=300&width=300&text=Emily" }
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                    <div className="flex space-x-2">
                      <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Community
            </motion.h2>
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="w-full md:w-1/3">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Write for Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Share your expertise and insights with our growing community of readers.</p>
                  <Button asChild>
                    <Link href="/write-for-us">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="w-full md:w-1/3">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Get our latest articles and updates delivered straight to your inbox.</p>
                  <Button asChild>
                    <Link href="/subscribe">Subscribe Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <motion.footer 
        className="w-full py-6 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 BlogVista. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="/privacy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}