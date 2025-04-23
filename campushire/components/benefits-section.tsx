"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const studentBenefits = [
    "Gain real-world project experience",
    "Build a professional portfolio",
    "Earn while learning",
    "Develop client communication skills",
  ]

  const clientBenefits = [
    "Access to fresh talent and innovative ideas",
    "Cost-effective project completion",
    "Support student growth and development",
    "Centralized talent discovery platform",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">For Students</h3>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {studentBenefits.map((benefit, index) => (
                <motion.li key={index} variants={item} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">For Clients</h3>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {clientBenefits.map((benefit, index) => (
                <motion.li key={index} variants={item} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
