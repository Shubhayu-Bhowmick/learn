"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Video,
  BookOpen,
  Users,
  MessageSquare,
  DollarSign,
  Globe,
  Play,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  { icon: Bell, text: "Alert & Notifications" },
  { icon: Video, text: "Live Classes" },
  { icon: BookOpen, text: "Cutting Edge Curriculum" },
  { icon: Users, text: "World Class Faculty" },
  { icon: MessageSquare, text: "Student Discussion Forum" },
  { icon: DollarSign, text: "Affordable Fee Structure" },
  { icon: Globe, text: "Learn Anytime Anywhere" },
  { icon: Play, text: "Online Video Lecture" },
];

export default function MarketingSection() {
  return (
    <section className="bg-black py-16 md:py-24 md:px-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <span className="text-[#C0392B] font-medium">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              User Friendly Interface And Very Easy To Use Learning Platform
            </h2>
            <p className="text-gray-300">
              Experience a seamless learning journey with our intuitive platform
              designed for both beginners and advanced learners. Access all your
              educational needs in one place with our comprehensive suite of
              features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center group-hover:bg-[#C0392B]/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-[#C0392B]" />
                  </div>
                  <span className="text-gray-200 group-hover:text-[#C0392B] transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link
                href="/features"
                className="inline-block bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <Image
              height={800}
              width={800}
              src="/learnui2.png"
              alt="Learning Platform Interface"
              className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-[#C0392B]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
