"use client"

export default function CoursesLanding() {
  return (
    <section className="-w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-15 -mb-20 mb-5">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 gap-10">
            <h2 className="text-4xl font-medium tracking-tight max-w-xl">
              Learn <span className="relative inline-block px-1"><span className="text-primary font-serif">Indonesian<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-100 opacity-20"></span></span></span><br />at your own pace
            </h2>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Structured lessons, guided practice, and useful resources — everything you need to start speaking with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-zinc-500 text-md mb-8 max-w-sm leading-relaxed">
                 The app gives you a personalized learning journey tailored to your goals, skill level, and daily progress. It combines vocabulary building, grammar lessons, pronunciation training, and interactive speaking practice into one seamless experience. 
                </p>
                <button className="border border-zinc-200 px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  Start learning
                </button>
              </div>
              
              <div className="-mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-zinc-400 text-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Choose your level
                </div>
                <div className="flex items-center gap-4 text-zinc-900 font-medium text-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                  Learn core phrases
                </div>
                <div className="flex items-center gap-4 text-zinc-400 text-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Practice pronunciation
                </div>
                <div className="flex items-center gap-4 text-zinc-400 text-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                  Build real conversations
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden">
                 <img src="/assets/xdr.png" alt="students learning Indonesian" className='w-full h-full object-cover' />
              </div>

            </div>
          </div>
    </section>
  );
}