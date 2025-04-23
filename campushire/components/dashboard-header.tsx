"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your activity.</p>
      </div>
      <Button className="flex items-center gap-2">
        <PlusCircle className="h-4 w-4" />
        <span>Create New Gig</span>
      </Button>
    </motion.div>
  )
}
