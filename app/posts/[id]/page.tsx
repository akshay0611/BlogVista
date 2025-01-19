"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation'; // Use useParams for Next.js app directory

type Post = {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export default function PostPage() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams(); // Get the params from the URL
  const id = params?.id as string; // Safely access the id property

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        try {
          const res = await fetch(`/api/blogs/${id}`);
          if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
          }
          const data = await res.json();
          setPost(data.data);
        } catch (error) {
          console.error('Error fetching post:', error);
          setError('Failed to load post. Please try again later.');
        } finally {
          setLoading(false);
        }
      }

      fetchPost();
    }
  }, [id]);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center text-blue-600 dark:text-blue-400">
          <ArrowLeft className="mr-2" />
          Back to Posts
        </Button>
      </motion.header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>

        <Card className="overflow-hidden dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="relative aspect-video mb-6">
              <img
                src={post.thumbnail || '/placeholder.svg'}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{post.author}</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="text-gray-600 dark:text-gray-300">{post.content}</div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {formatDate(post.updatedAt) !== formatDate(post.createdAt) ? `Updated: ${formatDate(post.updatedAt)}` : 'New'}
              </span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}