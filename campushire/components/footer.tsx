"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: "How it Works", href: "#" },
      { name: "Browse Projects", href: "#" },
      { name: "Find Freelancers", href: "#" },
      { name: "Success Stories", href: "#" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Tutorials", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">CampusHire</h3>
            <p className="text-gray-400">A freelance collaboration platform tailored for students.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Github className="h-5 w-5" />
                </motion.div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Twitter className="h-5 w-5" />
                </motion.div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Linkedin className="h-5 w-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {footerLinks.platform.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {footerLinks.resources.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {footerLinks.legal.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} CampusHire. All rights reserved.</p>
          <p className="mt-2">Created by Syed Parveez Afhamm</p>
        </motion.div>
      </div>
    </footer>
  )
}
