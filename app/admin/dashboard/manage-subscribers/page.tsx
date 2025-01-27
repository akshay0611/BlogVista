"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Subscriber {
  _id: string
  email: string
  createdAt: string
}

export default function ManageSubscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/subscribe")
      const data = await response.json()
      if (data.success) {
        setSubscribers(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch subscribers:", error)
      setSuccessMessage("Failed to fetch subscribers. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000)
    }
  }

  const handleDeleteSubscriber = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/subscribe`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
      if (response.ok) {
        setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id))
        setSuccessMessage("Subscriber removed successfully!")
        setTimeout(() => setSuccessMessage(null), 3000)
      }
    } catch (error) {
      console.error("Failed to delete subscriber:", error)
      setSuccessMessage("Failed to remove subscriber. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000)
    } finally {
      setLoading(false)
    }
  }

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Success Message */}
          {successMessage && (
            <div className="fixed top-4 right-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded shadow-lg">
              {successMessage}
            </div>
          )}

          <Card className="shadow-lg">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <CardTitle className="text-2xl font-bold">Manage Newsletter Subscribers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search subscribers..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Subscribed On</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubscribers.map((subscriber) => (
                      <TableRow key={subscriber._id}>
                        <TableCell className="font-medium">{subscriber.email}</TableCell>
                        <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteSubscriber(subscriber._id)}
                            disabled={loading}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {filteredSubscribers.length === 0 && (
                <div className="text-center py-4 text-gray-500 dark:text-gray-400">No subscribers found.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}