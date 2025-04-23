"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("freelancer")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to dashboard after successful signup
    router.push("/dashboard")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" required disabled={isLoading} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" required disabled={isLoading} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required disabled={isLoading} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required disabled={isLoading} />
                <p className="text-xs text-muted-foreground">Must be at least 8 characters long</p>
              </div>

              <div className="space-y-2">
                <Label>I am a</Label>
                <RadioGroup
                  defaultValue="freelancer"
                  value={userType}
                  onValueChange={setUserType}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freelancer" id="freelancer" disabled={isLoading} />
                    <Label htmlFor="freelancer" className="font-normal">
                      Student Freelancer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" disabled={isLoading} />
                    <Label htmlFor="client" className="font-normal">
                      Client
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>

            <div className="text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
