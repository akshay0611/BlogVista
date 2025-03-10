"use client"

import { motion } from "framer-motion"
import { Scroll, Shield, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header" 

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      Terms of Service
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg">
                      Welcome to BlogVista. By using our website, you agree to comply with and be bound by the following
                      terms and conditions of use.
                    </p>
                  </motion.div>

                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        title: "Agreement to Terms",
                        icon: Scroll,
                        content:
                          "By accessing or using BlogVista, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.",
                      },
                      {
                        title: "Use License",
                        icon: Shield,
                        content:
                          "Permission is granted to temporarily download one copy of the materials (information or software) on BlogVista's website for personal, non-commercial transitory viewing only.",
                      },
                      {
                        title: "Disclaimer",
                        icon: Scale,
                        content:
                          "The materials on BlogVista's website are provided on an 'as is' basis. BlogVista makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
                      },
                      {
                        title: "Limitations",
                        icon: Shield,
                        content:
                          "In no event shall BlogVista or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BlogVista's website, even if BlogVista or a BlogVista authorized representative has been notified orally or in writing of the possibility of such damage.",
                      },
                      {
                        title: "Revisions and Errata",
                        icon: Scroll,
                        content:
                          "The materials appearing on BlogVista's website could include technical, typographical, or photographic errors. BlogVista does not warrant that any of the materials on its website are accurate, complete, or current. BlogVista may make changes to the materials contained on its website at any time without notice.",
                      },
                      {
                        title: "Links",
                        icon: Shield,
                        content:
                          "BlogVista has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BlogVista of the site. Use of any such linked website is at the user's own risk.",
                      },
                      {
                        title: "Modifications",
                        icon: Scroll,
                        content:
                          "BlogVista may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
                      },
                      {
                        title: "Governing Law",
                        icon: Scale,
                        content:
                          "These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
                      },
                    ].map((item, index) => (
                      <AccordionItem
                        value={`item-${index}`}
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <AccordionTrigger className="hover:no-underline py-4">
                          <motion.div
                            className="flex items-center w-full"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <item.icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.title}</span>
                          </motion.div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 py-4 px-9 text-base leading-relaxed">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

