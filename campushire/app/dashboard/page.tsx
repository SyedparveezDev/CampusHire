import type { Metadata } from "next"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import RecentProjects from "@/components/dashboard/recent-projects"
import RecommendedGigs from "@/components/dashboard/recommended-gigs"
import DashboardHeader from "@/components/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "Dashboard | CampusHire",
  description: "Manage your freelance projects and gigs",
}

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <DashboardStats />
          <RecentProjects />
        </div>
        <div className="lg:col-span-1">
          <RecommendedGigs />
        </div>
      </div>
    </div>
  )
}
