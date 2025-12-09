import Link from "next/link"
import { Search, Smartphone, Laptop, Brain, Wrench, Book, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryCard } from "@/components/category-card"
import { ArticleCard } from "@/components/article-card"

const categories = [
  { title: "Fix Your Device", icon: <Smartphone className="h-6 w-6" />, slug: "fix-device" },
  { title: "Software & Apps", icon: <Laptop className="h-6 w-6" />, slug: "software-apps" },
  { title: "AI Tools", icon: <Brain className="h-6 w-6" />, slug: "ai-tools" },
  { title: "Troubleshooting", icon: <Wrench className="h-6 w-6" />, slug: "troubleshooting" },
  { title: "How-To Guides", icon: <Book className="h-6 w-6" />, slug: "how-to-guides" },
  { title: "Quick Fixes", icon: <Zap className="h-6 w-6" />, slug: "quick-fixes" },
]

const popularGuides = [
  {
    title: "How to Speed Up Your Slow Android Phone",
    excerpt: "Learn proven techniques to optimize your Android performance and free up storage.",
    category: "Fix Your Device",
    slug: "speed-up-android",
  },
  {
    title: "Complete Guide to Google Workspace Collaboration",
    excerpt: "Master team collaboration features in Google Workspace for seamless teamwork.",
    category: "Software & Apps",
    slug: "google-workspace-guide",
  },
  {
    title: "ChatGPT Tips & Tricks Every User Should Know",
    excerpt: "Unlock the full potential of ChatGPT with these expert tips and advanced techniques.",
    category: "AI Tools",
    slug: "chatgpt-tips",
  },
  {
    title: "Printer Not Working? Complete Troubleshooting Guide",
    excerpt: "Step-by-step solutions to fix common printer issues and connectivity problems.",
    category: "Troubleshooting",
    slug: "printer-troubleshooting",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-card via-card to-muted py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-balance">
              Tech Problems? <span className="text-primary">Fixed in Minutes</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Step-by-step guides anyone can follow. No technical jargon, just simple solutions.
            </p>

            <div className="flex gap-2 bg-card p-2 rounded-lg shadow-md max-w-2xl mx-auto">
              <Input type="search" placeholder="Search guides..." className="flex-1 border-0 bg-transparent" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-center">Explore by Category</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.slug} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides Section */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold">Popular Guides</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {popularGuides.map((guide) => (
                <ArticleCard key={guide.slug} {...guide} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">About HowToTechly</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              We believe everyone should be able to solve their tech problems without feeling overwhelmed. Our mission
              is to create simple, clear, and accessible tech guides that empower everyday people to take control of
              their devices and apps.
            </p>
            <Link href="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More About Us</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
