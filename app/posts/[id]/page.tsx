'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostPage() {
  const router = useRouter()
  const { id } = router.query // Dynamic route parameter

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/posts" className="flex items-center">
          <ArrowLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          <span className="ml-2 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Back to Posts
          </span>
        </Link>
      </motion.header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Blog Post {id}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Image
              src={`/placeholder.svg?height=400&width=800&text=Post+${id}`}
              alt={`Blog post ${id} image`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              width={800}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This is a detailed description of blog post {id}. It provides in-depth insights and valuable information
              about the topic. Explore the key aspects, learn from the examples, and enjoy the read!
            </p>
          </motion.div>
        </div>
      </main>
      <motion.footer
        className="w-full py-6 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 BlogVista. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}