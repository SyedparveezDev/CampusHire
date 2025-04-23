"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function GigGrid() {
  const gigs = [
    {
      title: "WordPress Website Development",
      description:
        "Looking for a skilled WordPress developer to create a responsive e-commerce website with custom features.",
      budget: "$300-$500",
      skills: ["WordPress", "PHP", "CSS"],
      postedBy: "TechStart Inc.",
      postedDate: "2 days ago",
    },
    {
      title: "Social Media Content Creation",
      description:
        "Need creative content for Instagram and Facebook. Looking for someone with experience in lifestyle and fashion.",
      budget: "$150-$300",
      skills: ["Photoshop", "Copywriting", "Social Media"],
      postedBy: "Style Boutique",
      postedDate: "1 day ago",
    },
    {
      title: "Data Analysis for Research Project",
      description:
        "Seeking a student with strong analytical skills to help analyze survey data for an academic research project.",
      budget: "$300-$600",
      skills: ["Excel", "SPSS", "R"],
      postedBy: "Dr. Williams",
      postedDate: "3 days ago",
    },
    {
      title: "Video Editing for YouTube Channel",
      description:
        "Looking for a video editor to create engaging content for a growing YouTube channel focused on technology reviews.",
      budget: "$100-$250",
      skills: ["Premiere Pro", "After Effects"],
      postedBy: "TechReviewer",
      postedDate: "5 hours ago",
    },
    {
      title: "Mobile App UI Design",
      description:
        "Need a creative UI designer for a fitness tracking mobile application. Experience with Figma required.",
      budget: "$400-$700",
      skills: ["Figma", "UI/UX", "Mobile Design"],
      postedBy: "FitTech Solutions",
      postedDate: "4 days ago",
    },
    {
      title: "Academic Essay Editing",
      description: "Looking for someone to proofread and edit a 5000-word academic paper on environmental science.",
      budget: "$80-$150",
      skills: ["Editing", "Proofreading", "Academic Writing"],
      postedBy: "GradStudent22",
      postedDate: "2 days ago",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {gigs.map((gig, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardContent className="pt-6 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{gig.title}</h3>
              <p className="text-muted-foreground mb-4">{gig.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {gig.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Budget: {gig.budget}</span>
                <span className="text-muted-foreground">Posted: {gig.postedDate}</span>
              </div>
              <p className="text-sm mt-2">Client: {gig.postedBy}</p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
