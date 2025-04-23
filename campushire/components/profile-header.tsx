"use client"

import { Button } from "@/components/ui/button"
import { Edit, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 items-start"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="w-32 h-32 relative">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 shadow-md cursor-pointer">
          <Edit className="h-4 w-4" />
        </div>
      </motion.div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold">SYED PARVEEZ AFHAM</h1>
            <p className="text-muted-foreground">Web Developer & UI Designer</p>
          </div>
          <Button>Edit Profile</Button>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            <span>Computer Science, NYU</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            <span>12 Projects Completed</span>
          </div>
        </div>

        <p className="text-sm max-w-2xl">
          Passionate web developer and UI designer with experience in creating responsive websites and applications.
          Currently pursuing a degree in Computer Science at NYU. Skilled in React, Next.js, and UI/UX design.
        </p>
      </div>
    </motion.div>
  )
}
