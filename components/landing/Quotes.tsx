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
                    Helping you <span className="text">learn</span>,{" "}
                    <span className="text-brand-olive">practice</span>{" "}
                    <span className="text-gray-500">Indonesian</span> naturally through{" "}
                    <span className="text-gray-500">interactive</span> lessons,{" "}
                    <span className="font-medium font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">
                      real conversations
                    </span>
                    , smarter{" "}
                    <span className="font-medium font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">
                      AI guidance
                    </span>
                    , and daily{" "}
                    <span className="font-medium font-serif text-primary decoration-brand-lime/50 underline decoration-4 underline-offset-4">
                      confidence
                    </span>
                    .
                  </h2>
             </div>
             <div/>
</div>
    </section>
  );
}