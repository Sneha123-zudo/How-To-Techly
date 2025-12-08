# Sanity CMS Integration - Foundation Layer (Day 1)

## Files Created

### Configuration
- `/sanity.config.ts` - Main Sanity Studio configuration

### Schemas
- `/schemas/index.ts` - Schema exports
- `/schemas/article.ts` - Article content type with full fields
- `/schemas/category.ts` - Category taxonomy
- `/schemas/author.ts` - Author profiles
- `/schemas/siteSettings.ts` - Global site settings
- `/schemas/blockContent.ts` - Portable Text configuration

### Client & Utilities
- `/lib/sanity.client.ts` - Sanity client instances (read & write)
- `/lib/sanity.image.ts` - Image URL builder utilities
- `/lib/sanity.types.ts` - Strict TypeScript types
- `/lib/sanity.queries.ts` - GROQ queries
- `/lib/sanity.fetch.ts` - Data fetching helper functions
- `/lib/sanity.portabletext.tsx` - Portable Text rendering components

### Studio Route
- `/app/studio/[[...index]]/page.tsx` - Embedded Sanity Studio

### Environment
- `.env.example` - Environment variable template

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Sanity Project
```bash
npm create sanity@latest -- --project-id <your-project-id> --dataset production
```

Or manually at: https://www.sanity.io/manage

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
SANITY_WRITE_TOKEN=your_write_token
SANITY_READ_TOKEN=your_read_token
REVALIDATE_SECRET=your_secret_key
```

### 4. Deploy Sanity Studio

The studio is embedded at `/studio` route. Access it at:
```
http://localhost:3000/studio
```

### 5. Create Initial Content

In the Sanity Studio, create:
1. At least one Author
2. At least one Category
3. One Site Settings document
4. Sample Articles

## Available Queries

All queries are exported from `/lib/sanity.queries.ts`:

- `getArticleBySlugQuery` - Single article by slug
- `getAllArticlesQuery` - All articles (preview)
- `getArticlesByCategoryQuery` - Articles filtered by category
- `getRecentArticlesQuery` - Recent articles with limit
- `getPopularArticlesQuery` - Popular articles with limit
- `getCategoriesQuery` - All categories with article counts
- `getCategoryBySlugQuery` - Single category by slug
- `getSiteSettingsQuery` - Global site settings
- `searchArticlesQuery` - Search articles by term
- `getRelatedArticlesQuery` - Related articles by category

## TypeScript Types

All types are strictly typed in `/lib/sanity.types.ts`:

- `Article` - Full article type
- `ArticlePreview` - Lightweight article preview
- `Category` - Category type
- `Author` - Author type
- `SiteSettings` - Global settings
- `FAQ` - FAQ item
- `Step` - Tutorial step
- `SEO` - SEO metadata

## Image Handling

Use the image utilities from `/lib/sanity.image.ts`:

```typescript
import { urlFor, getImageUrl } from '@/lib/sanity.image'

// Basic URL
const url = getImageUrl(article.featuredImage)

// With dimensions
const url = getImageUrlWithDimensions(article.featuredImage, 800, 600)

// With quality
const url = getImageUrlWithQuality(article.featuredImage, 90)
```

## Data Fetching

Use the helper functions from `/lib/sanity.fetch.ts`:

```typescript
import { getArticleBySlug, getAllArticles, getCategories } from '@/lib/sanity.fetch'

// In a server component
const article = await getArticleBySlug('my-article-slug')
const articles = await getAllArticles()
const categories = await getCategories()
```

## Portable Text Rendering

Use the components from `/lib/sanity.portabletext.tsx`:

```typescript
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/sanity.portabletext'

// In your component
<PortableText value={article.steps[0].content} components={portableTextComponents} />
```

## Next Steps (Day 2)

- Create article pages
- Create category pages
- Create search functionality
- Implement portable text rendering
- Add ISR/revalidation
- Create CMS preview mode
