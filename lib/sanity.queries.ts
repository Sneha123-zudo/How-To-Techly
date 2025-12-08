import { groq } from 'next-sanity'

const articleFields = groq`
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  category->{
    _id,
    title,
    slug,
    icon,
    description
  },
  author->{
    _id,
    name,
    avatar,
    bio
  },
  featuredImage,
  publishedAt,
  updatedAt,
  readTime,
  steps,
  tipsAndWarnings,
  faq,
  seo
`

const articlePreviewFields = groq`
  _id,
  title,
  slug,
  excerpt,
  category->{
    title,
    slug
  },
  author->{
    name
  },
  featuredImage,
  publishedAt,
  readTime
`

export const getArticleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    ${articleFields}
  }
`

export const getAllArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc){
    ${articlePreviewFields}
  }
`

export const getArticlesByCategoryQuery = groq`
  *[_type == "article" && category._ref in *[_type == "category" && slug.current == $slug]._id] | order(publishedAt desc){
    ${articlePreviewFields}
  }
`

export const getRecentArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc)[0...$limit]{
    ${articlePreviewFields}
  }
`

export const getPopularArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc)[0...$limit]{
    ${articlePreviewFields}
  }
`

export const getCategoriesQuery = groq`
  *[_type == "category"] | order(title asc){
    _id,
    title,
    slug,
    icon,
    description,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }
`

export const getCategoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    icon,
    description,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }
`

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    _id,
    siteTitle,
    siteDescription,
    logo,
    navigationLinks,
    footerLinks,
    contactEmail,
    socialLinks
  }
`

export const searchArticlesQuery = groq`
  *[_type == "article" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*"
  )] | order(publishedAt desc){
    ${articlePreviewFields}
  }
`

export const getAuthorByIdQuery = groq`
  *[_type == "author" && _id == $id][0]{
    _id,
    name,
    avatar,
    bio
  }
`

export const getRelatedArticlesQuery = groq`
  *[_type == "article" && category._ref == $categoryId && _id != $currentArticleId] | order(publishedAt desc)[0...$limit]{
    ${articlePreviewFields}
  }
`
