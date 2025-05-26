"use client";

import { useUserStore } from "stores/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserFetched } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (isUserFetched && !user) {
      router.replace("/auth/sign-in");
    }
  }, [isUserFetched, user, router]);

  if (!user) return null;

  return <>{children}</>;
}
