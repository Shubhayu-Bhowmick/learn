"use client";

import { motion } from "framer-motion";
import { Book, Users, Award, Zap, Settings, MessageCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Book,
    title: "Diverse Course Catalog",
    description:
      "Access a wide range of courses covering various subjects and skill levels.",
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description:
      "Engage with instructors and peers through live sessions and discussion forums.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description:
      "Earn industry-recognized certifications upon course completion.",
  },
  {
    icon: Zap,
    title: "Adaptive Learning",
    description:
      "Personalized learning paths that adapt to your progress and goals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeatureSection() {
  return (
    <>
      {/* Statistics Section */}
      <section className="bg-black py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[#C0392B] font-medium mb-4"
            >
              About App
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              #1 App For Learning
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-12 text-lg"
            >
              At Learn, we believe education should be accessible, engaging, and
              tailored to your personal learning journey. As an innovative
              online learning platform, we empower learners of all levels to
              acquire new skills, enhance their knowledge, and achieve their
              career goals.
              <br />
              <br />
              Whether you’re advancing in your current field, exploring a new
              discipline, or learning for personal growth, we offer a wide range
              of high-quality courses crafted by industry experts. From
              practical, hands-on applications to theoretical concepts, our
              courses equip you with the tools and confidence to thrive in
              today’s fast-paced world.
              <br />
              <br />
              Built on the foundation of learner-centricity, our platform
              provides flexible learning options, interactive content, and a
              supportive community. With a user-friendly interface, progress
              tracking, and easily accessible resources, we ensure your
              educational experience is effective, engaging, and enjoyable.{" "}
              <br />
              <br />
              Join us today and begin your journey with Application
              Learning—where knowledge meets opportunity.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-12 mb-8"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  className="bg-[#C0392B]/20 p-3 rounded-lg group-hover:bg-[#C0392B]/30 transition-colors"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Settings className="w-6 h-6 text-[#C0392B]" />
                </motion.div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    1234
                  </motion.div>
                  <motion.div
                    className="text-[#C0392B]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Active Install
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  className="bg-[#C0392B]/20 p-3 rounded-lg group-hover:bg-[#C0392B]/30 transition-colors"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="w-6 h-6 text-[#C0392B]" />
                </motion.div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    1234
                  </motion.div>
                  <motion.div
                    className="text-[#C0392B]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Clients Reviews
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Hero-like Background */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background with pattern and gradient */}
        <div className="absolute inset-0 pattern-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#C0392B] to-[#E74C3C] opacity-50" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#EDEDED] mb-12 text-center"
          >
            Key Features
          </motion.h2>

          <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#E74C3C]" />
                <h3 className="text-xl font-semibold text-[#EDEDED] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#B0B0B0]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
