import type { Metadata } from "next"
import GigFilters from "@/components/gigs/gig-filters"
import GigGrid from "@/components/gigs/gig-grid"
import GigHeader from "@/components/gigs/gig-header"

export const metadata: Metadata = {
  title: "Find Gigs | CampusHire",
  description: "Browse and find freelance opportunities",
}

export default function GigsPage() {
  return (
    <div className="container py-8">
      <GigHeader />
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="w-full md:w-1/4">
          <GigFilters />
        </div>
        <div className="w-full md:w-3/4">
          <GigGrid />
        </div>
      </div>
    </div>
  )
}
