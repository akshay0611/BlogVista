"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mountain, Twitter, Linkedin, Mail, Users, ArrowUp } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            BlogVista
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Posts", href: "/posts" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <ModeToggle />
        </nav>
      </motion.header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
          <div className="container mx-auto relative z-10">
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
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="flex items-center justify-center w-48 h-48 rounded-full border-4 border-blue-500 shadow-lg bg-white dark:bg-gray-800 ">
                  <Mountain className="h-24 w-24 text-blue-600 dark:text-blue-400" />
                </div>
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
                Exploring technology, lifestyle, and productivity through the lens of a passionate blogger.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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
              Welcome to BlogVista
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-600 md:text-lg dark:text-gray-300 text-center leading-relaxed mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              BlogVista is my personal corner on the internet where I share stories, insights, and reflections on
              technology, lifestyle, and productivity. Established in 2023, it is a space where my thoughts find their
              voice and my experiences are brought to life through words.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                {
                  title: "Technology",
                  description:
                    "Stay updated with the latest tech trends and innovations as I explore and share insights on the ever-evolving tech landscape.",
                  icon: Users,
                },
                {
                  title: "Lifestyle",
                  description:
                    "Discover tips and ideas for living a balanced and fulfilling life, drawn from my personal experiences and reflections.",
                  icon: Mountain,
                },
                {
                  title: "Productivity",
                  description:
                    "Learn how to maximize efficiency and achieve more through practical tips, tools, and strategies that have worked for me.",
                  icon: Mail,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet the Author
            </motion.h2>
            <motion.div
  className="flex flex-col md:flex-row items-center justify-center gap-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
    <Image src="/images/owner.jpg" alt="Author" width={300} height={300} />
  </motion.div>
  <div className="max-w-md">
    <h3 className="text-2xl font-semibold mb-2">Akshay Kumar</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">Blogger & Tech Enthusiast</p>
    <p className="text-gray-700 dark:text-gray-300 mb-6">
  Hi there! I&apos;m Akshay, the voice behind BlogVista. With a passion for technology and a knack for
  simplifying complex concepts, I started this blog to share my journey and insights with you. When I&apos;m
  not writing, you can find me tinkering with the latest gadgets or exploring new productivity hacks.
</p>
    <div className="flex space-x-4">
      <Button asChild variant="outline">
        <Link href="https://x.com/Aksh0605">
          <Twitter className="h-5 w-5 mr-2" />
          Follow on Twitter
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="https://www.linkedin.com/in/akshaykumar0611/">
          <Linkedin className="h-5 w-5 mr-2" />
          Connect on LinkedIn
        </Link>
      </Button>
    </div>
  </div>
</motion.div>
</div>
</section>


      </main>
      <Footer />
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  )
}