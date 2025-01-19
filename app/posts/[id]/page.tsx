"use client"

import { useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import { ArrowLeft, Calendar, Mountain, User, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ModeToggle } from "@/components/ui/mode-toggle"

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

  const params = useParams();
  const id = params?.id as string;

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
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xl font-semibold"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 dark:text-gray-400 text-xl font-semibold"
        >
          Post not found.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <Mountain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">BlogVista</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['Home', 'About', 'Posts', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors" href={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.div>
          ))}
          <ModeToggle />
        </nav>
      </motion.header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/posts" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {post.title}
        </motion.h1>

        <Card className="overflow-hidden dark:bg-gray-800 shadow-lg">
          <CardContent className="p-6">
            <motion.div
              className="relative aspect-video mb-6 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src={post.thumbnail || '/placeholder.svg'}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {post.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-2 sm:mb-0">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mb-2 sm:mb-0">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formatDate(post.updatedAt) !== formatDate(post.createdAt) ? `Updated: ${formatDate(post.updatedAt)}` : 'New'}</span>
              </div>
            </motion.div>
            <Separator className="my-6" />
            <motion.div
              className="text-gray-600 dark:text-gray-300 prose dark:prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </main>

      <motion.footer
        className="mt-8 bg-gray-100 dark:bg-gray-800 py-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 BlogVista. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}