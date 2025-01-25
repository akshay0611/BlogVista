"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";
import { User } from "@supabase/supabase-js"; // Import the User type from Supabase

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null); // Use User | null type
  const router = useRouter();

  // Use the custom hook to protect the route
  useSession();

  // Fetch the current user
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      }
    };

    fetchUser();
  }, []);

  // Handle sign-out
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/sign-in");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Admin Dashboard
          </h1>
          <Button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Sign Out
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Welcome, {user.email}!
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is your admin dashboard. You can manage your blog posts, users,
            and other settings from here.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="text-blue-700 dark:text-blue-200 font-medium">
                  Create New Post
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  Add a new blog post to your site.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h4 className="text-green-700 dark:text-green-200 font-medium">
                  Manage Users
                </h4>
                <p className="text-sm text-green-600 dark:text-green-300">
                  View and manage user accounts.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="text-purple-700 dark:text-purple-200 font-medium">
                  View Analytics
                </h4>
                <p className="text-sm text-purple-600 dark:text-purple-300">
                  Check your site performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}