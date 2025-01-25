import Link from "next/link"
import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Mountain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">BlogVista</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Exploring ideas, one post at a time.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Posts", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Stay updated with our latest posts</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 BlogVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}