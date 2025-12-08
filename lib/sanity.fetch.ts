import { client } from './sanity.client'
import {
  getArticleBySlugQuery,
  getAllArticlesQuery,
  getArticlesByCategoryQuery,
  getRecentArticlesQuery,
  getPopularArticlesQuery,
  getCategoriesQuery,
  getCategoryBySlugQuery,
  getSiteSettingsQuery,
  searchArticlesQuery,
  getRelatedArticlesQuery,
} from './sanity.queries'
import type {
  Article,
  ArticlePreview,
  Category,
  CategoryWithArticleCount,
  SiteSettings,
} from './sanity.types'

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return await client.fetch(getArticleBySlugQuery, { slug })
}

export async function getAllArticles(): Promise<ArticlePreview[]> {
  return await client.fetch(getAllArticlesQuery)
}

export async function getArticlesByCategory(slug: string): Promise<ArticlePreview[]> {
  return await client.fetch(getArticlesByCategoryQuery, { slug })
}

export async function getRecentArticles(limit: number = 10): Promise<ArticlePreview[]> {
  return await client.fetch(getRecentArticlesQuery, { limit })
}

export async function getPopularArticles(limit: number = 10): Promise<ArticlePreview[]> {
  return await client.fetch(getPopularArticlesQuery, { limit })
}

export async function getCategories(): Promise<CategoryWithArticleCount[]> {
  return await client.fetch(getCategoriesQuery)
}

export async function getCategoryBySlug(slug: string): Promise<CategoryWithArticleCount | null> {
  return await client.fetch(getCategoryBySlugQuery, { slug })
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await client.fetch(getSiteSettingsQuery)
}

export async function searchArticles(searchTerm: string): Promise<ArticlePreview[]> {
  return await client.fetch(searchArticlesQuery, { searchTerm })
}

export async function getRelatedArticles(
  categoryId: string,
  currentArticleId: string,
  limit: number = 3
): Promise<ArticlePreview[]> {
  return await client.fetch(getRelatedArticlesQuery, { categoryId, currentArticleId, limit })
}
