"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export const useSession = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!data.session || error) {
        // Redirect to sign-in if no session is found
        router.push("/admin/sign-in");
      }
    };

    checkSession();
  }, [router]);
};