'use client'
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Tek<span className="text-[#98be2f]">Mindz</span><span className="text-[#98be2f]">DAI</span>
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* Facebook */}
          <a 
            href="#" 
            className="w-12 h-12 bg-blue-700 bg-opacity-30 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            className="w-12 h-12 bg-blue-700 bg-opacity-30 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>

          {/* X (Twitter) */}
          <a 
            href="#" 
            className="w-12 h-12 bg-blue-700 bg-opacity-30 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a 
            href="#" 
            className="w-12 h-12 bg-blue-700 bg-opacity-30 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-blue-600 bg-opacity-30 mb-6"></div>

        {/* Copyright */}
        <p className="text-blue-200 text-sm">
          Copyright © 2025 TEKMINZDAI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}