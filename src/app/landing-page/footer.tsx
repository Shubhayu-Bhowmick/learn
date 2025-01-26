"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "News", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Safety Center", href: "#" },
    { name: "Community", href: "#" },
  ],
  legal: [
    { name: "Cookies Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Law Enforcement", href: "#" },
  ],
  install: [
    { name: "iOS", href: "#" },
    { name: "Android", href: "#" },
    { name: "Windows", href: "#" },
    { name: "MacOS", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-8 w-8 text-[#C0392B]" />
              <span className="text-2xl font-bold text-white">learn</span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              Transform your future through interactive learning. Join our
              platform and discover a new way of mastering skills with
              expert-led courses and a supportive community.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#C0392B] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#C0392B] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Learn. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#C0392B] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#C0392B] text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
