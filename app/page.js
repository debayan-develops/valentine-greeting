import React from 'react';

export default function Home() {
  return (
    // Main container with a romantic soft gradient background
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-100 via-red-50 to-pink-100">
      
      <div className="max-w-3xl w-full text-center space-y-8 animate-fadeIn">
        
        {/* --- CUSTOMIZE HERE: The Main Greeting Header --- */}
        <h1 className="text-5xl md:text-7xl font-bold text-rose-800 font-serif tracking-tight mt-10">
          Happy Valentine's Day, guluuu ❤️
        </h1>
        <p className="text-xl text-rose-600 font-serif italic">
          You mean the world to me.
        </p>

        {/* The Message Card container */}
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-pink-100 my-10">
          {/* --- CUSTOMIZE HERE: Your Beautiful Message --- */}
          {/* Use <p> tags for paragraphs. The font is set to be readable and elegant. */}
          <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-sans space-y-6">
            <p>
              My Dearest,
            </p>
            <p>
              I wanted to create something small to remind you how incredibly special you are to me. Every day with you feels like a celebration of love.
            </p>
            <p>
              Thank you for being my partner, my best friend, and my greatest adventure. You make life beautiful in ways I never imagined possible.
            </p>
            <p className="font-bold text-rose-700 pt-4">
              All my love, always,<br/>
              Hulu
            </p>
          </div>
        </div>

        {/* --- CUSTOMIZE HERE: Photo Gallery --- */}
        {/* Update the 'src' to match your file names in public/images/ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pb-16">
          
          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/1.jpg"  // Change '1.jpg' if your image is named differently
              alt="Us together" 
              className="w-full h-96 object-cover"
            />
          </div>
           
           {/* Image 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500 md:mt-8">
            <img 
              src="/images/2.jpg" // Change '2.jpg'
              alt="A special memory" 
              className="w-full h-96 object-cover"
            />
          </div>

           {/* Image 3 (Optional - remove this whole div if you only have 2) */}
           <div className="rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500 md:col-span-2 md:w-1/2 md:mx-auto">
            <img 
              src="/images/3.jpg" 
              alt="Another favorite moment" 
              className="w-full h-96 object-cover"
            />
          </div>

        </div>

      </div>
    </main>
  );
}