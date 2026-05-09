"use client"

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-bg-base/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-bg-base rounded-sm" />
        </div>
        <span className="text-xl font-bold tracking-tight">LearnIndo</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium ">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link
          href="/courses"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          Courses
        </Link>
        <Link href="/library" className="hover:text-primary transition-colors">
          Knowledge Library
        </Link>
        <Link href="/forum" className="hover:text-primary transition-colors">
          Forum
        </Link>
        <Link href="/news" className="hover:text-primary transition-colors">
          News
        </Link>
         <Link href="#" className="hover:text-primary transition-colors">
          Blogs
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          About Us
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-5 py-2 text-sm font-medium bg-primary hover:bg-white/15 text-white rounded-full transition-colors">
          Get started
        </button>
      </div>
    </nav>
  );
}