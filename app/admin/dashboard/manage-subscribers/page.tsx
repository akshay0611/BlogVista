"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Subscriber {
  _id: string
  email: string
  subscribedAt: string
}

export default function ManageSubscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/subscribers")
      const data = await response.json()
      if (data.success) {
        setSubscribers(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch subscribers:", error)
    }
  }

  const handleDeleteSubscriber = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/subscribers/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id))
        setSuccessMessage("Subscriber removed successfully!")
        setTimeout(() => setSuccessMessage(null), 3000) // Clear the message after 3 seconds
      }
    } catch (error) {
      console.error("Failed to delete subscriber:", error)
      setSuccessMessage("Failed to remove subscriber. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000) // Clear the message after 3 seconds
    } finally {
      setLoading(false)
    }
  }

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

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Manage Newsletter Subscribers</CardTitle>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Send Newsletter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscribers.map((subscriber) => (
                  <div key={subscriber._id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="flex items-center">
                      <Users className="mr-3 h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">{subscriber.email}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Subscribed on {new Date(subscriber.subscribedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleDeleteSubscriber(subscriber._id)} disabled={loading}>
                      {loading ? "Removing..." : "Remove"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}