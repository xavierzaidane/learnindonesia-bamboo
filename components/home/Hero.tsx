"use client"

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-35 pb-20 px-6  flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      {/* Left Column */}
      <div className="flex flex-col items-start text-left flex-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8">
          <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-black rounded-full">
            New
          </span>
          <span className="text-sm font-medium ">
            Introducing AI Automation
          </span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>

       <h1 className="text-5xl md:text-6xl lg:text-[5.7rem] font-medium leading-[0.95] text-brand-dark tracking-tight">
              Your <span className="relative inline-block ">
                 happier,
                 <span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span>
              </span> <br />
              healthier smile
            </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mt-5">
          Empower your finance team. The onestop plateform for all financial
          management of small and medium-sized business.
        </p>

        <div className="flex w-full max-w-md items-left backdrop-blur-md border border rounded-full p-1.5 mb-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-4 text-sm outline-none "
          />
          <button className="px-6 py-2.5 text-sm font-medium bg-secondary text-black hover:bg-secondary/90 rounded-full transition-colors whitespace-nowrap">
            Book a Demo
          </button>
        </div>

      
      </div>

      <div className="flex-1 flex justify-center lg:justify-end relative h-96 lg:h-full">
      
           {/* Background circles - position these as you want */}
        <img
          src="/assets/Ellipse1.png"
          alt="Background decoration"
          className="absolute w-92 h-92 top-20 right-45 pointer-events-none opacity-60"
        />
        <img
          src="/assets/Ellipse2.png"
          alt="Background decoration"
          className="absolute w-92 h-92 bottom-3 -right-5 pointer-events-none"
        />

        {/* Main image - on top */}
        <img
          src="/assets/indoguy.png"
          alt="Finance dashboard"
          className="w-full max-w-md lg:max-w-lg rounded-lg relative top-10 z-10"
        />
      </div>
    </section>
  );
}