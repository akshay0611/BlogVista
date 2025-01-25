"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/useSession"
import type { User } from "@supabase/supabase-js"
import { FileText, Users, LogOut, Plus, BarChart2, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useSession()

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
    }

    fetchUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/sign-in")
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 dark:text-gray-300 mr-4">{user.email}</span>
              <Button onClick={handleSignOut} variant="outline">
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Daily Views</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,456</div>
                <p className="text-xs text-muted-foreground">+5% from last week</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="blogs" className="space-y-4">
            <TabsList>
              <TabsTrigger value="blogs">Manage Blogs</TabsTrigger>
              <TabsTrigger value="subscribers">Newsletter Subscribers</TabsTrigger>
            </TabsList>

            <TabsContent value="blogs">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Blog Posts</CardTitle>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" /> New Post
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <FileText className="mr-3 h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">How to Get Started with React</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Published on June 1, 2023</p>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <FileText className="mr-3 h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">10 Tips for Better SEO</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 15, 2023</p>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <FileText className="mr-3 h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">The Future of Web Development</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 1, 2023</p>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscribers">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Newsletter Subscribers</CardTitle>
                    <Button>
                      <Mail className="mr-2 h-4 w-4" /> Send Newsletter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <Users className="mr-3 h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-medium">john.doe@example.com</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Subscribed on June 5, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <Users className="mr-3 h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-medium">jane.smith@example.com</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Subscribed on May 28, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="flex items-center">
                        <Users className="mr-3 h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-medium">alex.johnson@example.com</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Subscribed on May 20, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}