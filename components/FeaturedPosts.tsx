"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

interface Blog {
  _id: string
  title: string
  description: string
  content: string
  category: string
  thumbnail: string
}

export function FeaturedPosts() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (!response.ok) {
          throw new Error("Failed to fetch blogs")
        }
        const data = await response.json()
        console.log("API Response:", data) // Log the API response
        if (Array.isArray(data.data)) {
          setBlogs(data.data.slice(0, 3)) // Limit to 3 blogs if the response is an object
        } else if (Array.isArray(data)) {
          setBlogs(data.slice(0, 3)) // Limit to 3 blogs if the response is an array
        } else {
          throw new Error("Invalid data format: Expected an array")
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
        setError("Failed to load blogs. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  if (!blogs || blogs.length === 0) {
    return <div className="text-center py-12">No blogs available.</div>
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Posts
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => ( // Ensure only 3 blogs are displayed
            <motion.div
              key={blog._id}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-75 transition-opacity duration-300 ease-in-out"></div>
              <Image
                src={blog.thumbnail || "/placeholder.svg"}
                alt={blog.title}
                className="object-cover w-full h-64"
                width={600}
                height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{blog.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{blog.description}</p>
                <Link
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                  href={`/posts/${blog._id}`}
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}