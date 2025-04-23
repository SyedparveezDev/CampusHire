"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("portfolio")

  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design", level: "Advanced" },
    { name: "Figma", level: "Advanced" },
    { name: "CSS/SCSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "GraphQL", level: "Beginner" },
  ]

  const portfolio = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website with product filtering and cart functionality.",
      technologies: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers with real-time data visualization.",
      technologies: ["Next.js", "Chart.js", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Mobile Banking App",
      description: "UI/UX design for a mobile banking application focused on user experience and accessibility.",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ]

  const reviews = [
    {
      client: "TechStart Inc.",
      project: "E-commerce Website Redesign",
      rating: 5,
      comment:
        "Alex did an outstanding job redesigning our e-commerce website. The new design is not only visually appealing but also significantly improved our conversion rates. Highly recommended!",
      date: "March 15, 2025",
    },
    {
      client: "Creative Solutions",
      project: "Mobile App UI Design",
      rating: 4,
      comment:
        "Great work on our mobile app UI design. Alex was responsive, creative, and delivered the project on time. Would work with again.",
      date: "February 28, 2025",
    },
    {
      client: "Digital Marketing Pro",
      project: "Landing Page Development",
      rating: 5,
      comment:
        "Exceptional work! Alex created a beautiful landing page that perfectly captured our brand identity. The page loads quickly and looks great on all devices. Alex was also very accommodating with our revision requests.",
      date: "January 10, 2025",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8"
    >
      <Tabs defaultValue="portfolio" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative w-full h-40">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex justify-between items-center p-3 border rounded-lg"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Badge
                      variant={
                        skill.level === "Advanced"
                          ? "default"
                          : skill.level === "Intermediate"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {skill.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{review.client}</h3>
                        <p className="text-sm text-muted-foreground">{review.project}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm my-3">{review.comment}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{review.date}</span>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>Helpful</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
