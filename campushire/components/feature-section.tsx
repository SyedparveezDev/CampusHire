"use client"

import { Briefcase, Users, Award, Brain } from "lucide-react"
import { motion } from "framer-motion"
import FeatureCard from "./feature-card"

export default function FeatureSection() {
  const features = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Gig Marketplace",
      description: "Post and find freelance opportunities tailored for the academic community.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Talent Discovery",
      description: "Connect with skilled student freelancers based on verified skills and reviews.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Gamification",
      description: "Earn badges and climb leaderboards as you complete projects and gain experience.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI Recommendations",
      description: "Get personalized project and talent suggestions powered by AI.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
