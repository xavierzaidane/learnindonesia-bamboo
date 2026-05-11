"use client";

import { useRef } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export default function LatestBlogs() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const { current } = scrollRef;
			const scrollAmount = direction === "left" ? -340 : 340;
			current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	const latestBlogs = [
		...blogPosts.filter((post) => post.isNew),
		...blogPosts.filter((post) => !post.isNew),
	];

	return (
		<section className="max-w-7xl mx-auto px-6 py-20">
			<div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight opacity-90">
						Latest <span className="relative inline-block px-1"><span className="text-primary font-serif">Blog Posts<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-100 opacity-20"></span></span></span> & Tips
					</h2>
				</div>
				<div className="flex items-end gap-5 md:items-center">
					<div className="flex gap-3 shrink-0">
						<button
							onClick={() => scroll("left")}
							className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 transition-all duration-300 hover:bg-primary hover:text-white"
							aria-label="Scroll latest blogs left"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => scroll("right")}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-primary border border-zinc-200 text-white hover:text-black transition-all duration-300 hover:bg-background"
							aria-label="Scroll latest blogs right"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>

			<div
				ref={scrollRef}
				className="-mx-6 flex gap-8 overflow-x-auto px-6 pb-2 scroll-smooth"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{latestBlogs.map((post) => (
					<div key={post.id} className="min-w-64 max-w-7xl shrink-0 md:min-w-72 md:max-w-72">
						<BlogCard post={post} />
					</div>
				))}
			</div>
		</section>
	);
}
