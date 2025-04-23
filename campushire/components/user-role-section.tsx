"use client"

import { User, Building, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function UserRoleSection() {
  const roles = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Student Freelancers",
      description:
        "Showcase your skills, find projects that match your expertise, and build your portfolio while earning.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Faculty & Staff",
      description: "Find talented students to help with research, departmental projects, or event organization.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Startups & Businesses",
      description: "Connect with fresh talent, innovative ideas, and cost-effective solutions for your projects.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
  ]

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
          Who Can Use CampusHire?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center h-full"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
              >
                {role.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
              <div className="relative w-full h-32 rounded-lg overflow-hidden">
                <Image src={role.image || "/placeholder.svg"} alt={role.title} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
