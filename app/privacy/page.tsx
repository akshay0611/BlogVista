"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mountain, Lock, Shield, Eye, Database, Cookie, UserCheck, RefreshCw, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <Mountain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
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
                className="text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                      Privacy Policy
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg leading-relaxed">
                      At BlogVista, we are committed to protecting your privacy and ensuring the security of your
                      personal information. This Privacy Policy outlines how we collect, use, and safeguard your data
                      when you use our website.
                    </p>
                  </motion.div>

                  <Tabs defaultValue="collect" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                      <TabsTrigger value="collect" className="text-sm md:text-base">
                        Collect
                      </TabsTrigger>
                      <TabsTrigger value="use" className="text-sm md:text-base">
                        Use
                      </TabsTrigger>
                      <TabsTrigger value="protect" className="text-sm md:text-base">
                        Protect
                      </TabsTrigger>
                      <TabsTrigger value="rights" className="text-sm md:text-base">
                        Your Rights
                      </TabsTrigger>
                    </TabsList>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TabsContent value="collect">
                        <Card className="bg-purple-50 dark:bg-gray-700/50">
                          <CardContent className="space-y-4 mt-4 p-6">
                            <div className="flex items-center space-x-3">
                              <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                                Information We Collect
                              </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              We may collect personal information such as your name, email address, and other details
                              when you subscribe to our newsletter, leave comments, or contact us. We also collect
                              non-personal information such as browser type, IP address, and pages visited through
                              cookies and similar technologies.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="use">
                        <Card className="bg-blue-50 dark:bg-gray-700/50">
                          <CardContent className="space-y-4 mt-4 p-6">
                            <div className="flex items-center space-x-3">
                              <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                                How We Use Your Information
                              </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              We use the information we collect to provide and improve our services, communicate with
                              you, and personalize your experience. This includes sending you newsletters, responding to
                              your inquiries, and analyzing website usage to enhance our content and functionality.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="protect">
                        <Card className="bg-green-50 dark:bg-gray-700/50">
                          <CardContent className="space-y-4 mt-4 p-6">
                            <div className="flex items-center space-x-3">
                              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">
                                Data Protection
                              </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              We implement a variety of security measures to maintain the safety of your personal
                              information. However, no method of transmission over the Internet or electronic storage is
                              100% secure, and we cannot guarantee absolute security.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="rights">
                        <Card className="bg-orange-50 dark:bg-gray-700/50">
                          <CardContent className="space-y-4 mt-4 p-6">
                            <div className="flex items-center space-x-3">
                              <UserCheck className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                              <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">
                                Your Rights
                              </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              You have the right to access, correct, or delete your personal information at any time.
                              You can also opt-out of receiving communications from us. To exercise these rights, please
                              contact us using the information provided at the end of this policy.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </motion.div>
                  </Tabs>

                  <div className="mt-12 space-y-8">
                    {[
                      {
                        icon: Lock,
                        title: "Third-Party Disclosure",
                        content:
                          "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.",
                      },
                      {
                        icon: Cookie,
                        title: "Cookies",
                        content:
                          "We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.",
                      },
                      {
                        icon: RefreshCw,
                        title: "Changes to This Policy",
                        content:
                          'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last modified" date at the bottom of this page.',
                      },
                      {
                        icon: Mail,
                        title: "Contact Us",
                        content:
                          "If you have any questions about this Privacy Policy, please contact us at privacy@blogvista.com.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-9">{item.content}</p>
                      </motion.div>
                    ))}

                    <motion.p
                      className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      Last modified: {currentDate}
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}