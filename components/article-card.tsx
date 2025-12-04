import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  slug: string
  readTime?: string
}

export function ArticleCard({ title, excerpt, category, slug, readTime = "5 min read" }: ArticleCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={`/tech-guide-thumbnail-for-.jpg?height=216&width=384&query=tech guide thumbnail for ${title}`}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </p>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{readTime}</span>
          <Link href={`/article/${slug}`}>
            <Button size="sm" variant="ghost" className="text-accent hover:text-accent">
              Read More →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
