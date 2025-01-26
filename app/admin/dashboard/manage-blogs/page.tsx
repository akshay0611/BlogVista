"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Plus, Save, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Blog {
  _id: string
  title: string
  description: string
  content: string
  author: string
  category: string
  thumbnail: string
  createdAt: string
}

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null)
  const [editedTitle, setEditedTitle] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedContent, setEditedContent] = useState("")
  const [editedAuthor, setEditedAuthor] = useState("")
  const [editedCategory, setEditedCategory] = useState("")
  const [editedThumbnail, setEditedThumbnail] = useState("")
  const [newBlogData, setNewBlogData] = useState({
    title: "",
    description: "",
    content: "",
    author: "Akshay Kumar",
    category: "Technology",
    thumbnail: "https://via.placeholder.com/150",
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs")
      const data = await response.json()
      if (data.success) {
        setBlogs(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error)
    }
  }

  const handleDeleteBlog = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== id))
        setSuccessMessage("Blog deleted successfully!")
        setTimeout(() => setSuccessMessage(null), 3000)
      }
    } catch (error) {
      console.error("Failed to delete blog:", error)
      setSuccessMessage("Failed to delete blog. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000)
    } finally {
      setLoading(false)
    }
  }

  const startEditing = (blog: Blog) => {
    setEditingBlogId(blog._id)
    setEditedTitle(blog.title)
    setEditedDescription(blog.description)
    setEditedContent(blog.content)
    setEditedAuthor(blog.author)
    setEditedCategory(blog.category)
    setEditedThumbnail(blog.thumbnail)
  }

  const cancelEditing = () => {
    setEditingBlogId(null)
    setEditedTitle("")
    setEditedDescription("")
    setEditedContent("")
    setEditedAuthor("")
    setEditedCategory("")
    setEditedThumbnail("")
  }

  const saveEditing = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editedTitle,
          description: editedDescription,
          content: editedContent,
          author: editedAuthor,
          category: editedCategory,
          thumbnail: editedThumbnail,
        }),
      })
      if (response.ok) {
        const updatedBlog = await response.json()
        setBlogs(blogs.map((blog) => (blog._id === id ? updatedBlog.data : blog)))
        setSuccessMessage("Blog updated successfully!")
        setTimeout(() => setSuccessMessage(null), 3000)
        cancelEditing()
      }
    } catch (error) {
      console.error("Failed to update blog:", error)
      setSuccessMessage("Failed to update blog. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateBlog = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlogData),
      })

      if (response.ok) {
        const newBlog = await response.json()
        setBlogs([...blogs, newBlog.data])
        setSuccessMessage("Blog created successfully!")
        setTimeout(() => setSuccessMessage(null), 3000)
        setNewBlogData({
          title: "",
          description: "",
          content: "",
          author: "Akshay Kumar",
          category: "Technology",
          thumbnail: "https://via.placeholder.com/150",
        })
      }
    } catch (error) {
      console.error("Failed to create blog:", error)
      setSuccessMessage("Failed to create blog. Please try again.")
      setTimeout(() => setSuccessMessage(null), 3000)
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
                <CardTitle>Manage Blog Posts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <Input
                    value={newBlogData.title}
                    onChange={(e) => setNewBlogData({ ...newBlogData, title: e.target.value })}
                    placeholder="Title"
                    className="mb-4"
                  />
                  <Input
                    value={newBlogData.description}
                    onChange={(e) => setNewBlogData({ ...newBlogData, description: e.target.value })}
                    placeholder="Description"
                    className="mb-4"
                  />
                  <Textarea
                    value={newBlogData.content}
                    onChange={(e) => setNewBlogData({ ...newBlogData, content: e.target.value })}
                    placeholder="Content"
                    className="mb-4"
                  />
                  <Input
                    value={newBlogData.thumbnail}
                    onChange={(e) => setNewBlogData({ ...newBlogData, thumbnail: e.target.value })}
                    placeholder="Thumbnail URL"
                    className="mb-4"
                  />
                  <select
                    value={newBlogData.category}
                    onChange={(e) => setNewBlogData({ ...newBlogData, category: e.target.value })}
                    className="p-2 border rounded w-full mb-4"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="General">General</option>
                  </select>
                  <Button onClick={handleCreateBlog} disabled={loading}>
                    {loading ? "Creating..." : "Create Blog"}
                    <Plus className="mr-2 h-4 w-4" />
                  </Button>
                </div>

                {blogs.map((blog) => (
                  <div key={blog._id} className="flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    {editingBlogId === blog._id ? (
                      <>
                        <Input
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="mb-4"
                          placeholder="Title"
                        />
                        <Input
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          className="mb-4"
                          placeholder="Description"
                        />
                        <Textarea
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="mb-4"
                          placeholder="Content"
                        />
                        <Input
                          value={editedAuthor}
                          onChange={(e) => setEditedAuthor(e.target.value)}
                          className="mb-4"
                          placeholder="Author"
                        />
                        <Input
                          value={editedCategory}
                          onChange={(e) => setEditedCategory(e.target.value)}
                          className="mb-4"
                          placeholder="Category"
                        />
                        <Input
                          value={editedThumbnail}
                          onChange={(e) => setEditedThumbnail(e.target.value)}
                          className="mb-4"
                          placeholder="Thumbnail URL"
                        />
                        <div className="flex justify-end space-x-2">
                          <Button onClick={() => saveEditing(blog._id)} disabled={loading}>
                            {loading ? "Saving..." : "Save"}
                            <Save className="mr-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" onClick={cancelEditing}>
                            <X className="mr-2 h-4 w-4" /> Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="mr-3 h-5 w-5 text-blue-500" />
                            <div>
                              <h3 className="font-medium">{blog.title}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Created on {new Date(blog.createdAt).toLocaleDateString()}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Author: {blog.author}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Category: {blog.category}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Description: {blog.description}</p>
                              {blog.thumbnail && (
                                <img src={blog.thumbnail} alt="Thumbnail" className="mt-2 w-20 h-20 object-cover rounded" />
                              )}
                            </div>
                          </div>
                          <div>
                            <Button variant="outline" size="sm" className="mr-2" onClick={() => startEditing(blog)}>
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDeleteBlog(blog._id)} disabled={loading}>
                              {loading ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
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