'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mountain, Lock, Shield, Eye, Database, Cookie, UserCheck, RefreshCw, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.header 
        className="px-4 lg:px-6 h-16 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <Mountain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">BlogVista</span>
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
              <Link className="text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors" href={item.href}>
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
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">At BlogVista, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.</p>
                  </motion.div>

                  <Tabs defaultValue="collect" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                      <TabsTrigger value="collect">Collect</TabsTrigger>
                      <TabsTrigger value="use">Use</TabsTrigger>
                      <TabsTrigger value="protect">Protect</TabsTrigger>
                      <TabsTrigger value="rights">Your Rights</TabsTrigger>
                    </TabsList>
                    <TabsContent value="collect">
                      <Card>
                        <CardContent className="space-y-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-semibold">Information We Collect</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">We may collect personal information such as your name, email address, and other details when you subscribe to our newsletter, leave comments, or contact us. We also collect non-personal information such as browser type, IP address, and pages visited through cookies and similar technologies.</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="use">
                      <Card>
                        <CardContent className="space-y-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-semibold">How We Use Your Information</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. This includes sending you newsletters, responding to your inquiries, and analyzing website usage to enhance our content and functionality.</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="protect">
                      <Card>
                        <CardContent className="space-y-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-semibold">Data Protection</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="rights">
                      <Card>
                        <CardContent className="space-y-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <UserCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-semibold">Your Rights</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving communications from us. To exercise these rights, please contact us using the information provided at the end of this policy.</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-lg font-semibold">Third-Party Disclosure</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                    <div className="flex items-center space-x-2">
                      <Cookie className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-lg font-semibold">Cookies</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

                    <div className="flex items-center space-x-2">
                      <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-lg font-semibold">Changes to This Policy</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last modified&quot; date at the bottom of this page.</p>

                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-lg font-semibold">Contact Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">If you have any questions about this Privacy Policy, please contact us at privacy@blogvista.com.</p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Last modified: {currentDate}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <motion.footer 
        className="w-full py-6 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 BlogVista. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" href="/privacy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}