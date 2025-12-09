import type { ReactNode } from "react"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  icon: ReactNode
  slug: string
}

export function CategoryCard({ title, icon, slug }: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`}>
      <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary cursor-pointer">
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </Link>
  )
}
