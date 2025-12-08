import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getImageUrl(source: SanityImageSource): string {
  return urlFor(source).url()
}

export function getImageUrlWithDimensions(
  source: SanityImageSource,
  width: number,
  height?: number
): string {
  if (height) {
    return urlFor(source).width(width).height(height).url()
  }
  return urlFor(source).width(width).url()
}

export function getImageUrlWithQuality(source: SanityImageSource, quality: number = 80): string {
  return urlFor(source).quality(quality).url()
}
