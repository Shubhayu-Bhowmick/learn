"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    profession: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    text: "The platform has been instrumental in advancing my coding skills. The curriculum is well-structured and the instructors are highly knowledgeable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    profession: "Data Scientist",
    image: "/placeholder.svg?height=80&width=80",
    text: "I appreciate the flexibility of learning at my own pace. The course content is comprehensive and up-to-date with industry standards.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    profession: "UX Designer",
    image: "/placeholder.svg?height=80&width=80",
    text: "The interactive learning approach and practical projects have helped me build a strong portfolio. Highly recommend for aspiring designers.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
            Testimonial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2"
          >
            What Say Our Clients!
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-[#C0392B] to-[#E74C3C] p-0.5 rounded-xl">
                <div className="bg-gray-900 rounded-xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <Image
                      height={400}
                      width={400}
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].profession}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-6 text-center md:text-left">
                    {testimonials[currentIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#C0392B]/10 hover:bg-[#C0392B]/20 text-[#C0392B] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#C0392B]/10 hover:bg-[#C0392B]/20 text-[#C0392B] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
