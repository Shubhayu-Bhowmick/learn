import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import FeatureSection from "./feature-section";
import MobileMenu from "./mobile-menu";
import MarketingSection from "./marketing-section";
import TestimonialsSection from "./testimonials-section";
import ContactSection from "./contact-section";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden">
        {/* Background with pattern and gradient */}
        <div className="absolute inset-0 pattern-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#C0392B] to-[#E74C3C] opacity-50" />
        <div className="clouds">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-4 md:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#EDEDED]" />
            <span className="text-2xl font-bold text-[#EDEDED]">learn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-[#B0B0B0] hover:text-[#EDEDED] transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#B0B0B0] hover:text-[#EDEDED] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-[#B0B0B0] hover:text-[#EDEDED] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-[#B0B0B0] hover:text-[#EDEDED] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />

          {/* Get Started Button (Desktop) */}
          <Link
            href="/signup"
            className="hidden md:block bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-[#EDEDED] px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 container mx-auto px-4 lg:px-16 pt-12 sm:pt-20 md:pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDED] leading-tight">
                Transform Your Future Through Interactive Learning
              </h1>
              <p className="text-[#B0B0B0] text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                Discover a new way of learning with our cutting-edge platform.
                Join thousands of students worldwide in their journey to
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-[#EDEDED] px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-block text-center"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/demo"
                  className="border border-[#B0B0B0] text-[#EDEDED] px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors inline-block text-center"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/learnui.png"
                alt="Learning Platform Interface"
                className="relative z-10 mx-auto"
                height={800}
                width={800}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Feature Section */}
      <FeatureSection />
      <MarketingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
