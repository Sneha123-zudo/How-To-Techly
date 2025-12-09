"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your message! We'll respond within 24 hours.")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">Have a question or suggestion? We'd love to hear from you!</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <Input type="text" placeholder="Your name" required className="bg-card" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" required className="bg-card" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <select className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm">
                      <option>General Question</option>
                      <option>Request a Guide</option>
                      <option>Report an Error</option>
                      <option>Business Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. We'll never share your email with anyone.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

                <div className="mb-8">
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <p className="text-muted-foreground">hello@howtotechly.com</p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-semibold">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-6 9-11.1z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.54 6.42a8.53 8.53 0 01-2.4.66 4.2 4.2 0 001.84-2.31 8.41 8.41 0 01-2.67 1.02 4.2 4.2 0 00-7.26 2.87c0 .33.04.65.13.96A11.94 11.94 0 012.14 4.27a4.2 4.2 0 001.3 5.61 4.16 4.16 0 01-1.9-.52v.05a4.2 4.2 0 003.37 4.12 4.21 4.21 0 01-1.89.07 4.2 4.2 0 003.92 2.91A8.44 8.44 0 012 18.98a11.9 11.9 0 006.46 1.88c7.75 0 11.99-6.42 11.99-11.99 0-.18 0-.37-.01-.55a8.55 8.55 0 002.1-2.18z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.8 8.001c0-.159.003-.316.003-.474a6.963 6.963 0 01-6.964-6.964 6.966 6.966 0 01.474.003v11.93l3.482-2.006a4.974 4.974 0 11-5.96.526v4.124a9.14 9.14 0 1015.97-7.14z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mb-8 rounded-lg border border-primary bg-primary/5 p-6">
                  <h3 className="mb-2 font-semibold">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-3 font-semibold">Need a Guide?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Can't find what you're looking for? Let us know and we'll create a guide for you!
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Request a Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left">How do I request a guide on a specific topic?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can use the contact form above and select "Request a Guide" as your subject. Let us know the topic
                  you're interested in and we'll add it to our list.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left">
                  Can you help me with my specific technical problem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While we can't provide individual support, our guides cover many common issues. If you find an error
                  in our guides, please report it using the contact form.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left">
                  Do you offer paid consulting or professional services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Currently, all our content is free and community-focused. For enterprise or professional services,
                  please reach out to hello@howtotechly.com.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-left">How can I contribute or suggest improvements?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We love community contributions! Use the contact form to share your ideas, report errors, or suggest
                  improvements to our existing guides.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
