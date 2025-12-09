import Link from "next/link"
import { CheckCircle, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-primary">About HowToTechly</h1>
            <p className="text-xl text-muted-foreground">Making tech simple for everyone</p>
          </div>
        </section>

        {/* About Content */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <img src="/team-members-collaborating.jpg" alt="About HowToTechly" className="rounded-lg object-cover" />
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We started HowToTechly because we saw a problem. Tech guides were either too technical for everyday
                    users or too simplified to be useful. We wanted to create something in between.
                  </p>
                  <p>
                    Our team believes that everyone, regardless of their technical background, should be able to solve
                    tech problems on their own. We're passionate about breaking down complex concepts into simple,
                    actionable steps.
                  </p>
                  <p>
                    Every guide we create is tested and refined to ensure it's accessible to everyone. We write for the
                    everyday user, the person who just wants their tech to work without needing a computer science
                    degree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-lg border border-primary bg-primary/5 p-8 sm:p-12">
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To help everyday people solve tech problems without needing to be tech experts. We believe technology
                should be accessible, understandable, and empowering for all.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold">What Makes Us Different</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Step-by-Step Guides</h3>
                <p className="text-muted-foreground">
                  Every guide is broken down into clear, numbered steps that anyone can follow. No jargon, just simple
                  instructions.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Tested Solutions</h3>
                <p className="text-muted-foreground">
                  Every solution is tested on real devices and updated regularly to reflect the latest software
                  versions.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Always Free</h3>
                <p className="text-muted-foreground">
                  All our guides are completely free. No subscriptions, no hidden costs, no ads interrupting your
                  learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl font-semibold italic text-muted-foreground">
              "Finally, tech guides I can actually understand! I've been able to fix so many issues on my own thanks to
              HowToTechly. This site is a lifesaver."
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Master Your Tech?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Explore our guides and solve your tech problems today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Learning</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Have a Question?</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
