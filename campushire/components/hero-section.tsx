"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-primary text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Connect, Collaborate, Create
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8 max-w-lg"
            >
              CampusHire bridges the gap between student freelancers and clients, creating opportunities for real-world
              experience and collaboration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="secondary" size="lg" className="relative overflow-hidden group">
                <span className="relative z-10">Find Talent</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Offer Services
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-4 w-full h-full bg-secondary/20 rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating on projects"
                width={500}
                height={400}
                className="relative z-10 rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
