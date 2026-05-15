"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") !== "true") {
      router.push("/");
    }
  }, [router]);

  return <>{children}</>;
}
