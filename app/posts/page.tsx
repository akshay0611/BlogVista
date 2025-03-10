"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header" 

type Post = {
  _id: string;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
  createdAt: string;
  category: string; 
};

// Define the badge colors for each category
const badgeColors: Record<Post['category'], string> = {
  Technology: 'bg-blue-500',
  Lifestyle: 'bg-green-500',
  Productivity: 'bg-yellow-500',
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]); // Ensure it's an empty array initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State to track the search query

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogs');
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data); // Log the data to check its structure
        setPosts(Array.isArray(data.data) ? data.data : []); // Ensuring we set an array
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Function to handle the search query change
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  // Function to filter posts based on the search query
  const filteredPosts = posts.filter((post) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowercasedQuery) ||
      post.description.toLowerCase().includes(lowercasedQuery)
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
    <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Latest Posts
        </motion.h1>
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="relative">
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchQuery} // Bind the input to the state
              onChange={handleSearchChange} // Update the state on input change
              className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </form>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading posts...</p>
        ) : error ? (
          <p className="text-center text-red-600 dark:text-red-400">{error}</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative aspect-video">
                        <Image
                          src={post.thumbnail || '/placeholder.svg'}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>{post.author}</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{formatDate(post.createdAt)}</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex justify-between items-center">
                          <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[post.category]}`}>
                            {post.category} {/* Display category */}
                          </span>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            <Link href={`/posts/${post._id}`} className="flex items-center">
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300">No posts found.</p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}