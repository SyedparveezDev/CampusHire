"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function RecommendedGigs() {
  const gigs = [
    {
      title: "WordPress Website Development",
      budget: "$200-$500",
      skills: ["WordPress", "PHP", "CSS"],
      postedDate: "2 days ago",
    },
    {
      title: "Social Media Content Creation",
      budget: "$150-$300",
      skills: ["Photoshop", "Copywriting"],
      postedDate: "1 day ago",
    },
    {
      title: "Data Analysis for Research Project",
      budget: "$300-$600",
      skills: ["Excel", "SPSS", "R"],
      postedDate: "3 days ago",
    },
    {
      title: "Video Editing for YouTube Channel",
      budget: "$100-$250",
      skills: ["Premiere Pro", "After Effects"],
      postedDate: "5 hours ago",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recommended Gigs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gigs.map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium">{gig.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Budget: {gig.budget}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {gig.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Posted: {gig.postedDate}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
