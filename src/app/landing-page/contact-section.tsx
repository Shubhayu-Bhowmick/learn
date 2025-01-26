"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="bg-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C0392B] font-medium"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2"
          >
            Get In Touch With Us
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gray-900 rounded-2xl p-6 md:p-8"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-white">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help?"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#C0392B] to-[#E74C3C] hover:opacity-90">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
