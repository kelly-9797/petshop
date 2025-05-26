"use client";

import { useUserStore } from "stores/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectIfLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserFetched } = useUserStore();

  const router = useRouter();

  useEffect(() => {
    if (isUserFetched && user) {
      router.replace("/");
    }
  }, [isUserFetched, user, router]);

  if (user) return null;

  return <>{children}</>;
}
