"use client"

import { ArrowRight, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Reason() {
  return (
    <section className="-mt-19 pb-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      <div className="text rounded-tl-[3rem] md:rounded-tl-[5rem] lg:rounded-tl-[70px] min-h-[300px] rounded-tr-[3rem] md:rounded-tr-[5rem] lg:rounded-tr-[70px] bg-gradient-to-t from-background via-primary/20 to-primary/30  pt-20 md:pt-32 pb-12 pr-6 md:pr-12 relative overflow-hidden group">
             
             {/* Interactive Background Glow */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-lime/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-lime/20 transition-colors duration-700"></div>

             <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                
                {/* Left: Counter */}
                <div className="lg:col-span-5 flex -mt-18">
                   <div className="relative select-none">
                      <span className="text-4xl font-medium leading-none text tracking-tighter opacity-90">Why Students Really Love to Learn with <span className="text-primary font-serif ">Learnindo ?</span></span>
                      <p className="text-muted-foreground text-md mt-5">Behind every lesson is a real conversation and an AI-powered learning experience designed to help you speak Indonesian naturally every single day.</p>
                   </div>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-7 flex justify-end pb-0 md:pb-8 -mt-18 gap-18">
                        <div>
                            <div className="text-foreground/80 text-5xl tracking-tighter font-semibold mb-2">56+</div>
                            <p className="text-muted-foreground">Customer Support</p>
                        </div>
                        <div>
                            <div className="text-foreground/80 text-5xl tracking-tighter font-semibold mb-2">24+</div>
                            <p className="text-muted-foreground">Productivity Boost</p>
                        </div>
                        <div>
                            <div className="text-foreground/80 text-5xl  tracking-tighter  font-semibold mb-2">1K+</div>
                            <p className="text-muted-foreground">Active Users</p>
                        </div>
                </div>
             </div>
             <div/>
            </div>
    </section>
  );
}