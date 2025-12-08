import { PortableTextBlock } from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityReference {
  _ref: string
  _type: 'reference'
}

export interface FAQ {
  _key: string
  question: string
  answer: string
}

export interface Step {
  _key: string
  stepNumber: number
  title: string
  content: PortableTextBlock[]
  image?: SanityImage
}

export interface SEO {
  title?: string
  description?: string
  image?: SanityImage
}

export interface Category {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  icon?: string
  description?: string
}

export interface Author {
  _id: string
  _type: 'author'
  _createdAt: string
  _updatedAt: string
  name: string
  avatar?: SanityImage
  bio?: string
}

export interface Article {
  _id: string
  _type: 'article'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: SanitySlug
  excerpt: string
  category: Category
  author: Author
  featuredImage: SanityImage
  publishedAt: string
  updatedAt?: string
  readTime: number
  steps?: Step[]
  tipsAndWarnings?: PortableTextBlock[]
  faq?: FAQ[]
  seo?: SEO
}

export interface NavigationLink {
  _key: string
  label: string
  href: string
}

export interface SocialLinks {
  twitter?: string
  facebook?: string
  youtube?: string
  pinterest?: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  _createdAt: string
  _updatedAt: string
  siteTitle: string
  siteDescription: string
  logo?: SanityImage
  navigationLinks?: NavigationLink[]
  footerLinks?: NavigationLink[]
  contactEmail: string
  socialLinks?: SocialLinks
}

export type ArticlePreview = Pick<
  Article,
  '_id' | 'title' | 'slug' | 'excerpt' | 'featuredImage' | 'publishedAt' | 'readTime'
> & {
  category: Pick<Category, 'title' | 'slug'>
  author: Pick<Author, 'name'>
}

export type CategoryWithArticleCount = Category & {
  articleCount: number
}
