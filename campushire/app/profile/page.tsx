import type { Metadata } from "next"
import ProfileHeader from "@/components/profile/profile-header"
import ProfileTabs from "@/components/profile/profile-tabs"

export const metadata: Metadata = {
  title: "Profile | CampusHire",
  description: "View and edit your profile",
}

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <ProfileHeader />
      <ProfileTabs />
    </div>
  )
}
