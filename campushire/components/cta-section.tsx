"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Join CampusHire today and be part of a growing community of student freelancers and clients.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="secondary" size="lg" className="relative overflow-hidden group">
            <span className="relative z-10">Sign Up as Freelancer</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Post a Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
