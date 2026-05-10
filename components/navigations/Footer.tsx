import React from 'react';

import { MapPin, Phone, Mail } from 'lucide-react';


const Footer: React.FC = () => {
  return (

      <footer className="bg-primary/20 py-16 px-6 rounded-t-[7rem] mt-24 mx-2 md:mx-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Brand & Contact Info */}
          <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4">
                <img
                    src="/assets/logo.png"
                    alt="logo learnindonesia"
                    className="h-10 w-auto"
                />

                <h2 className="text-3xl font-medium font-serif tracking-tight">
                    LearnIndo
                </h2>
                </div>
            <p className="text-gray-800 max-w-sm text-lg leading-relaxed mb-8">
              Redefining the dental experience with comfort, clarity, and care. 
              Join the movement toward healthier smiles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-800">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>
                  116 Changi Rd, <br />
                  Singapore 419718
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>6569061224</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@bamboosys.com</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-12 md:gap-24 flex-wrap lg:justify-end lg:flex-1 w-full lg:w-auto">
            <div>
              <h4 className="font-medium text-primary mb-6 tracking-wide uppercase text-sm">Navigation</h4>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Knowledge Library
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Blogs
                  </a>
                </li>
                 <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-6 tracking-wide uppercase text-sm">Legal</h4>
              <ul className="space-y-3 text-gray-800">
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-primary hover:translate-x-2 transition-all duration-300">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/20 mt-16 pt-8 text-center  text-sm">
          © {new Date().getFullYear()} LearnIndo. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;