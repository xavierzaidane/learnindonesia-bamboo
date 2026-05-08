"use client"

import { ArrowRight, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Reason() {
  return (
    <section className="-mt-19 pb-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      <div className="bg-primary/20 text  rounded-tl-[3rem] md:rounded-tl-[5rem] lg:rounded-tl-[70px] min-h-[400px] rounded-tr-[3rem] md:rounded-tr-[5rem] lg:rounded-tr-[70px] min-h-[400px] pt-20 md:pt-32 pb-12 pr-6 md:pr-12 relative overflow-hidden group">
             
             {/* Interactive Background Glow */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-lime/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-lime/20 transition-colors duration-700"></div>

             <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                
                {/* Left: Counter */}
                <div className="lg:col-span-4 flex items-end">
                   <div className="relative select-none">
                      <span className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-none text tracking-tighter opacity-90">02</span>
                      <span className="text-2xl md:text-4xl text font-medium ml-2">/06</span>
                   </div>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-5 flex flex-col justify-end pb-0 md:pb-8">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="flex items-center gap-3 mb-6"
                   >
                      <Zap className="text-brand-lime w-6 h-6" />
                      <h3 className="text-xl font-bold text-brand-lime">Smart Engineering</h3>
                   </motion.div>
                   <motion.p 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                     className="text text-base md:text-lg leading-relaxed mb-8"
                   >
                     Built with precision and powered by innovation, Elix combines advanced motor technology with intelligent energy management. Every ride feels smoother, faster, and smarter.
                   </motion.p>
                   <div className="h-[1px] w-full bg-neutral-800 relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-brand-lime/50"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                   </div>
                </div>
             </div>
             <div/>
            </div>
    </section>
  );
}