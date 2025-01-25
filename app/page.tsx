"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, BookOpen, Users, Zap, Star } from "lucide-react"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Footer } from "@/components/Footer"
import { FeaturedPosts } from "@/components/FeaturedPosts"

export default function LandingPage() {
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
          <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Welcome to BlogVista
                </motion.h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                  Explore a world of ideas, stories, and insights. Join us on this journey of discovery and inspiration.
                </p>
              </motion.div>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                  <Link href="/posts">Latest Posts</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

    {/* Featured Posts  */}
    <FeaturedPosts />
        
<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-4 md:px-6">
    <motion.h2
      className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Blog Categories
    </motion.h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: BookOpen,
          name: "Technology",
          description: "Stay updated with the latest tech trends and innovations.",
        },
        { icon: Users, name: "Lifestyle", description: "Discover tips for a balanced and fulfilling life." },
        {
          icon: Zap,
          name: "Productivity",
          description: "Learn how to maximize your efficiency and achieve more.",
        },
      ].map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <category.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{category.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>
     
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4 md:px-6">
    <motion.h2
      className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      What Our Readers Say
    </motion.h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Alex Johnson",
          quote:
            "BlogVista has become my go-to source for insightful articles. The content is always fresh and thought-provoking!",
        },
        {
          name: "Sarah Lee",
          quote:
            "I love how diverse the topics are. There's always something new to learn and explore on BlogVista.",
        },
        {
          name: "Michael Chen",
          quote: "The writing quality is top-notch. Each post is well-researched and beautifully crafted.",
        },
      ].map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <Card className="bg-blue-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold">{testimonial.name}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ perspective: 1000 }}
              >
                <motion.div whileHover={{ rotateY: 5, rotateX: -5 }} transition={{ duration: 0.5 }}>
                  <Image
                    src="/images/owner.jpg"
                    alt="Author"
                    width={400}
                    height={400}
                    className="rounded-full mx-auto lg:mx-0 shadow-xl"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  About the Author
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hi, I&apos;m Akshay Kumar, the creator of BlogVista.
                  I&apos;m passionate about sharing knowledge and inspiring others through my writing. My goal is to
                  create a platform where curiosity thrives and ideas flourish.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
     
      </main>
      <Footer />
    </div>
  )
}