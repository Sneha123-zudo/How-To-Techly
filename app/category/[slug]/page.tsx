"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArticleCard } from "@/components/article-card"
import { Smartphone, Laptop, Brain } from "lucide-react"

const categoryData: Record<string, any> = {
  "fix-device": {
    title: "Fix Your Device",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Troubleshoot and fix common hardware and software issues on your devices.",
    subcategories: ["Mobile Phones", "Laptops & PCs", "Tablets", "Printers", "Smart Devices"],
  },
  "software-apps": {
    title: "Software & Apps",
    icon: <Laptop className="h-8 w-8" />,
    description: "Learn how to use popular software and applications effectively.",
    subcategories: ["Productivity Tools", "Social Media", "Streaming Services", "Communication Apps", "Utilities"],
  },
  "ai-tools": {
    title: "AI Tools",
    icon: <Brain className="h-8 w-8" />,
    description: "Master AI-powered tools and applications for productivity and creativity.",
    subcategories: ["ChatGPT & LLMs", "Image Generation", "Content Creation", "Automation", "Development Tools"],
  },
}

const articles = [
  {
    title: "How to Speed Up Your Slow Android Phone",
    excerpt: "Learn proven techniques to optimize your Android performance and free up storage.",
    category: "Fix Your Device",
    slug: "speed-up-android",
    readTime: "6 min read",
  },
  {
    title: "Complete iPhone Storage Cleanup Guide",
    excerpt: "Master the art of managing your iPhone storage and keeping it running smoothly.",
    category: "Fix Your Device",
    slug: "iphone-storage-cleanup",
    readTime: "7 min read",
  },
  {
    title: "Fix WiFi Connection Issues on Any Device",
    excerpt: "Troubleshoot WiFi problems with our step-by-step solution guide.",
    category: "Fix Your Device",
    slug: "wifi-issues-fix",
    readTime: "5 min read",
  },
  {
    title: "Laptop Overheating? Complete Cooling Guide",
    excerpt: "Learn what causes laptop overheating and how to fix it permanently.",
    category: "Fix Your Device",
    slug: "laptop-overheating",
    readTime: "8 min read",
  },
  {
    title: "Screen Flickering Problems - Complete Fix",
    excerpt: "Solve screen flickering issues on monitors and laptops with proven solutions.",
    category: "Fix Your Device",
    slug: "screen-flickering",
    readTime: "6 min read",
  },
  {
    title: "Battery Not Charging? Here's What to Do",
    excerpt: "Diagnose and fix charging issues on phones and tablets.",
    category: "Fix Your Device",
    slug: "battery-charging-issues",
    readTime: "5 min read",
  },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [sortBy, setSortBy] = useState("recent")
  const data = categoryData[params.slug]

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center">
            <h1 className="text-2xl font-bold">Category not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: data.title }]} />

          {/* Category Header */}
          <div className="my-12">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">{data.icon}</div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{data.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{data.description}</p>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              onClick={() => setSortBy("recent")}
              className={sortBy === "recent" ? "bg-primary text-primary-foreground" : ""}
            >
              Most Recent
            </Button>
            <Button
              variant={sortBy === "popular" ? "default" : "outline"}
              onClick={() => setSortBy("popular")}
              className={sortBy === "popular" ? "bg-primary text-primary-foreground" : ""}
            >
              Most Popular
            </Button>
            <Button
              variant={sortBy === "helpful" ? "default" : "outline"}
              onClick={() => setSortBy("helpful")}
              className={sortBy === "helpful" ? "bg-primary text-primary-foreground" : ""}
            >
              Most Helpful
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Subcategories */}
              <div className="mb-8">
                <h4 className="mb-4 font-semibold">Subcategories</h4>
                <ul className="space-y-2">
                  {data.subcategories.map((subcategory: string) => (
                    <li key={subcategory} className="text-sm">
                      <a href="#" className="hover:text-primary transition-colors">
                        {subcategory}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular in Category */}
              <div className="mb-8">
                <h4 className="mb-4 font-semibold">Popular in this Category</h4>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <a href="#" className="hover:text-primary transition-colors">
                      Fix common errors
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="hover:text-primary transition-colors">
                      Setup and installation
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="hover:text-primary transition-colors">
                      Performance optimization
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="hover:text-primary transition-colors">
                      Security and privacy
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href="#" className="hover:text-primary transition-colors">
                      Troubleshooting guide
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="rounded-lg border border-primary bg-primary/5 p-6">
                <h4 className="mb-2 font-semibold">Subscribe to this Category</h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  Get new guides in this category delivered to your inbox.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
