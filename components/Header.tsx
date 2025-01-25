// components/Header.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mountain, User } from "lucide-react" 
import { ModeToggle } from "@/components/ui/mode-toggle"

export function Header() {
  return (
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
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          <Link
            href="" // Link 
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <User className="h-6 w-6" /> 
          </Link>
        </motion.div>
        <ModeToggle />
      </nav>
    </motion.header>
  )
}