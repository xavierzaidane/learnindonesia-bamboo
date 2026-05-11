'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants';

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

interface NavbarProps {
  onBookClick?: () => void;
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past typical Hero height (approx 600px)
      if (window.scrollY > 600) {
        setShowBookCall(true);
      } else {
        setShowBookCall(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: typeof NAV_ITEMS[0]) => {
    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'nav_click', {
        event_category: 'navigation',
        event_label: item.label
      });
    }

    // We allow default behavior (anchor jump) for all items now, including Forum (#forums) and Home (#home)
    // This ensures hash routing works and scrolling works natively.
    
    if (item.label === 'Forum') {
      onNavigate?.('forum');
      setIsOpen(false);
    } else {
      // For Home or Sections (#services, etc), we ensure we are in the 'home' view
      onNavigate?.('home');
      setIsOpen(false);
    }
  };

  const handleJoinUsClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'open_booking_modal', { source: 'navbar' });
    }
    onBookClick?.();
  };

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between px-10 py-4 mx-auto w-full bg-bg-base/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link 
        href="/" 
        onClick={() => { 
          if (typeof window !== 'undefined' && window.gtag) {
             window.gtag('event', 'nav_click', { event_category: 'navigation', event_label: 'Logo' });
          }
          onNavigate?.('home'); 
        }}
        className="flex items-center gap-3 group z-50 relative"
      >
        <img src="/assets/logo.png" alt="logo learnindonesia" className="h-10 w-auto" />
        <span className="text-2xl font-medium font-serif tracking-tight text-brand-dark">
          {APP_NAME}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8  font-medium">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
             href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          >
            {item.label}
            {item.hasDropdown && <ChevronDown size={16} />}
          </a>
        ))}
      </div>

      {/* CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-4 z-50 relative">
        {/* Scroll-triggered Book Discovery Call Button */}
        <div 
          className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
            showBookCall ? 'max-w-[300px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          <button 
            onClick={handleJoinUsClick}
            className="bg-primary/20  px-6 py-3 rounded-full font-medium hover:bg-primary/30 transition-opacity text-sm whitespace-nowrap"
          >
            Register Now
          </button>
        </div>

        <button 
          onClick={handleJoinUsClick}
          className="hidden md:block bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
        >
          Join Us
        </button>
        <button 
          className="md:hidden p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 text-xl font-medium text-brand-dark">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
               href={item.href}
              className="flex items-center justify-between border-b border-gray-100 pb-4"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={20} />}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              handleJoinUsClick();
            }}
            className="bg-brand-lime text-brand-dark px-6 py-4 rounded-full font-medium text-center mt-4 w-full"
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;