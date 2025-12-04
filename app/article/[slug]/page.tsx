"use client"

import { useState } from "react"
import Link from "next/link"
import { ThumbsUp, ThumbsDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArticleCard } from "@/components/article-card"

const steps = [
  {
    number: 1,
    title: "Check Your Internet Connection",
    content:
      "Verify that your device is connected to a stable Wi-Fi or cellular network. Restart your router if needed.",
  },
  {
    number: 2,
    title: "Clear App Cache and Data",
    content: "Go to Settings > Apps > [App Name] > Storage > Clear Cache. This often resolves performance issues.",
  },
  {
    number: 3,
    title: "Update the Application",
    content: "Visit your app store and ensure the application is updated to the latest version available.",
  },
  {
    number: 4,
    title: "Restart Your Device",
    content: "Power off your device completely and wait 10 seconds before turning it back on.",
  },
  {
    number: 5,
    title: "Reinstall the Application",
    content: "As a last resort, uninstall and reinstall the application from your app store.",
  },
]

const faqItems = [
  {
    question: "Why is my app crashing repeatedly?",
    answer:
      "App crashes can be caused by outdated versions, insufficient storage, or conflicts with other apps. Try the steps in this guide first.",
  },
  {
    question: "Will clearing cache delete my data?",
    answer:
      "Clearing cache will not delete your personal data. It only removes temporary files. Your accounts and settings remain intact.",
  },
  {
    question: "Should I update to the latest version immediately?",
    answer:
      "Generally yes, as updates include bug fixes and security improvements. However, wait a few days after a major update if you prefer stability.",
  },
  {
    question: "What if these steps don't work?",
    answer:
      "If none of these solutions work, contact the app developer's support team or post in community forums for app-specific help.",
  },
]

const relatedArticles = [
  {
    title: "How to Free Up Storage Space on Your Phone",
    excerpt: "Learn various methods to clean up your device and free up precious storage.",
    category: "Fix Your Device",
    slug: "free-up-storage",
  },
  {
    title: "Phone Battery Draining Fast? Here's What to Do",
    excerpt: "Discover the common culprits draining your battery and how to fix them.",
    category: "Troubleshooting",
    slug: "battery-drain-fix",
  },
  {
    title: "Complete Beginner's Guide to Phone Settings",
    excerpt: "Understand your phone settings and optimize them for your needs.",
    category: "How-To Guides",
    slug: "phone-settings-guide",
  },
]

export default function ArticlePage() {
  const [helpful, setHelpful] = useState<boolean | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Fix Your Device", href: "/category/fix-device" },
              { label: "App Issues" },
            ]}
          />

          {/* Article Header */}
          <div className="mt-8 mb-12">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-balance">Fix Common App Issues in 5 Steps</h1>
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Last Updated: Nov 26, 2025</span>
              <span>5 min read</span>
              <span>By Tech Expert</span>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
              <img src="/app-troubleshooting-guide.jpg" alt="App issues" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Is your favorite app acting up? From freezing and crashing to slow performance, app issues can be
                frustrating. The good news is that most common app problems can be fixed with simple troubleshooting
                steps. Follow this guide to get your apps working smoothly again.
              </p>

              {/* Table of Contents */}
              <div className="mb-12 rounded-lg border border-border bg-muted p-6">
                <h3 className="mb-4 font-semibold">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  {steps.map((step) => (
                    <li key={step.number}>
                      <a href={`#step-${step.number}`} className="text-primary hover:underline">
                        Step {step.number}: {step.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="text-primary hover:underline">
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Steps */}
              {steps.map((step) => (
                <div key={step.number} id={`step-${step.number}`} className="mb-12">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                  </div>
                  <div className="ml-14 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                    <img
                      src={`/single-footprint-sand.png?height=300&width=600&query=step ${step.number}`}
                      alt={`Step ${step.number}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="ml-14 text-muted-foreground">{step.content}</p>
                </div>
              ))}

              {/* Tips & Warnings */}
              <div className="mb-12 rounded-lg border-l-4 border-accent bg-yellow-50 dark:bg-yellow-950/20 p-6">
                <h3 className="mb-3 font-semibold text-accent">💡 Tips & Warnings</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Always backup your important data before making changes</li>
                  <li>• Some apps may require admin permissions to update</li>
                  <li>• If issues persist, reach out to the app developer's support</li>
                </ul>
              </div>

              {/* FAQ */}
              <div id="faq" className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Feedback */}
              <div className="mb-12 rounded-lg border border-border bg-card p-6 text-center">
                <h3 className="mb-4 font-semibold">Was this article helpful?</h3>
                <div className="flex justify-center gap-4">
                  <Button
                    variant={helpful === true ? "default" : "outline"}
                    onClick={() => setHelpful(true)}
                    className={helpful === true ? "bg-primary text-primary-foreground" : ""}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Yes, it helped
                  </Button>
                  <Button
                    variant={helpful === false ? "default" : "outline"}
                    onClick={() => setHelpful(false)}
                    className={helpful === false ? "bg-accent text-accent-foreground" : ""}
                  >
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    Not really
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mb-12 flex gap-4 rounded-lg border border-border bg-card p-6">
                <img
                  src="/diverse-profile-avatars.png"
                  alt="Author"
                  className="h-20 w-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="mb-2 font-semibold">Tech Expert</h3>
                  <p className="text-sm text-muted-foreground">
                    Passionate about making technology accessible to everyone. With 10+ years of experience, I love
                    simplifying complex tech concepts.
                  </p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mb-12 rounded-lg border border-primary bg-primary/5 p-8">
                <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                <p className="mb-4 text-muted-foreground">
                  Get new guides delivered to your inbox. No spam, just helpful tips.
                </p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="bg-card" />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Ad Placeholder 1 */}
              <div className="mb-8 rounded-lg border border-border bg-muted p-6 text-center text-sm text-muted-foreground">
                <div className="mb-2 text-xs">Advertisement</div>
                <div className="aspect-square bg-primary/10 rounded flex items-center justify-center text-xs">
                  300x250
                </div>
              </div>

              {/* Popular in Category */}
              <div className="mb-8">
                <h4 className="mb-4 font-semibold">Popular in Category</h4>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link href="#" className="hover:text-primary transition-colors">
                      How to factory reset your phone
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-primary transition-colors">
                      Best RAM cleaning apps
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-primary transition-colors">
                      Screen time management
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-primary transition-colors">
                      VPN setup guide
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-primary transition-colors">
                      Secure your password
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Ad Placeholder 2 */}
              <div className="rounded-lg border border-border bg-muted p-6 text-center text-sm text-muted-foreground">
                <div className="mb-2 text-xs">Advertisement</div>
                <div className="aspect-auto bg-primary/10 rounded flex items-center justify-center h-48 text-xs">
                  300x600
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-20 border-t border-border pt-12">
            <h2 className="mb-8 text-3xl font-bold">Related Articles</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
