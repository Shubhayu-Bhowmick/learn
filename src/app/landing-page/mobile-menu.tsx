"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#EDEDED] p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link
            href="#"
            className="text-[#EDEDED] hover:text-[#B0B0B0] transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-[#EDEDED] hover:text-[#B0B0B0] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="#"
            className="text-[#EDEDED] hover:text-[#B0B0B0] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-[#EDEDED] hover:text-[#B0B0B0] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-[#EDEDED] px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
