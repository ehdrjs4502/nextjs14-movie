"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignButton({ user }: any) {
  const router = useRouter();
  if (user === null) {
    return <Link href="/login">login</Link>;
  }
  return (
    <a
      onClick={() => {
        signOut(); // next-auth 로그아웃
        localStorage.removeItem("favoriteMovies-storage"); // 선호 영화 목록 로컬 삭제
      }}
    >
      logout
    </a>
  );
}
