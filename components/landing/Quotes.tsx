"use client"

import { Quote } from "lucide-react";

export default function Quotes() {
  return (
      <section className="mt-15 pb-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
         <div className="text rounded-tl-[3rem] md:rounded-tl-[5rem] lg:rounded-tl-[70px] min-h-[300px] rounded-tr-[3rem] md:rounded-tr-[5rem] lg:rounded-tr-[70px] bg-gradient-to-t from-background via-primary/20 to-primary/30  pt-20 md:pt-32 pb-12 pr-6 md:pr-12 relative overflow-hidden group">
             <div className="container mx-auto px-20 relative -mt-5">
                  <Quote
                    className="
                      absolute
                      left-260
                      -translate-x-1/2
                      -top-17
                      w-24
                      h-24
                      text-primary/20
                      rotate-6
                    "
                    strokeWidth={1.5}
                  />
                  <h2 className="relative z-10 text-5xl text-center font-medium leading-[1.1] tracking-tight opacity-90">
                  Bringing <span className="text">reliable</span>,{' '}
                  <span className="text-brand-olive">heartfelt</span>{' '}
                  <span className="text-gray-500">dental</span> support that{' '}
                  <span className="text-gray-500">inspires</span> you to feel{' '}
                  <span className="font-medium font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">stronger</span>, live{' '}
                  <span className="font-medium  font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">better</span>, and{' '}
                  <span className="font-medium font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">thrive</span>.
                </h2>
             </div>
             <div/>
</div>
    </section>
  );
}