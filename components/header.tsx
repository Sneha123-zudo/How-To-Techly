"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            HowToTechly
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="ghost" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
