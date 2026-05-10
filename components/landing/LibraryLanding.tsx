"use client"

export default function LibraryLanding() {
  return (
    <section className="-w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-15 -mb-15 mt-5">
         <div className="flex flex-col md:flex-row justify items-start md:items-end mb-5 gap-77">
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Short lessons, daily vocabulary, and practical resources — everything you need to unlock your fluency.
            </p>
            <h2 className="text-4xl font-medium tracking-tight max-w-lg">
              Learn with <span className="relative inline-block px-1"><span className="text-primary font-serif">AI Tutor<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-100 opacity-20"></span></span></span><br />with our library
            </h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">

            {/* Image - LEFT on desktop */}
            <div className="relative lg:order-1">
                <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                <img
                    src="/assets/macbook.png"
                    alt="students learning Indonesian"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

            {/* Content - RIGHT on desktop */}
            <div className="flex flex-col h-full justify-between lg:order-2 ">
                <div>
                    <h3 className="text-3xl font-noraml mb-4">AI-Powered<br />Learning</h3>
                    <p className="text-zinc-500 text-md mb-8 max-w-7xl  text-left leading-relaxed">
                      Our AI coach personalizes your learning journey based on your goals, progress, and learning style. It recommends daily exercises, adapts lessons to your pace, and provides instant feedback on pronunciation, grammar, and word usage in real time. 
                    </p>

                <button className="border border-zinc-200 px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                    Start learning
                </button>
                </div>

            </div>

            </div>
    </section>
  );
}
