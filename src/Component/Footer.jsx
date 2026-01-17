import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-10 px-6 md:px-20 border-t border-red-900/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-red-400">Busayo Davies</h2>
          <p className="text-sm text-white">
            Certified Life Coach & Counsellor
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="/about" className="hover:text-red-400 transition-colors">
            About
          </a>
          <a href="/services" className="hover:text-red-400 transition-colors">
            Services
          </a>
          <a href="/book" className="hover:text-red-400 transition-colors">
            Book
          </a>
          <a href="/contact" className="hover:text-red-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-5">
          <a
            href="mailto:youunveiledwithbdavies@gmail.com"
            className="hover:text-red-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://web.facebook.com/search/top/?q=Busayo%20davies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/busayo_davies/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/busayo-davies-mpmc-cscm-5a89421b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500 pt-4">
        © {new Date().getFullYear()} Busayo Davies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
