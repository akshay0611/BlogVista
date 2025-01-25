'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mountain, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
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
              className="flex flex-col items-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
  Have a question or feedback? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
</p>

            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
  <CardContent className="p-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <a href="mailto:contact@blogvista.com" className="hover:underline">
          contact@blogvista.com
        </a>
      </div>
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <a href="tel:+15551234567" className="hover:underline">
          +1 (555) 123-4567
        </a>
      </div>
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
        <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <span>123 Blog Street, Content City, ST 12345</span>
      </div>
    </div>
  </CardContent>
</Card>

              </motion.div>
              <motion.form 
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input placeholder="Your Name" type="text" required className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />
                <Input placeholder="Your Email" type="email" required className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />
                <Input placeholder="Subject" type="text" required className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />
                <Textarea placeholder="Your Message" required className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm min-h-[150px]" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

