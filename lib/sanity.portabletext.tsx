import { PortableTextComponents } from '@portabletext/react'
import { urlFor } from './sanity.image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string; caption?: string } }) => {
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            className="w-full rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    codeBlock: ({ value }: { value: { code: string; language: string; filename?: string } }) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="rounded-t-lg bg-muted px-4 py-2 text-sm font-medium">{value.filename}</div>
          )}
          <pre className="overflow-x-auto rounded-b-lg bg-card p-4">
            <code className={`language-${value.language}`}>{value.code}</code>
          </pre>
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="mb-4 text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 text-2xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-3 text-xl font-bold">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-muted-foreground">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 ml-6 list-disc space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="my-6 ml-6 list-decimal space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-muted-foreground">{children}</li>,
    number: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">{children}</code>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value.blank ? '_blank' : undefined
      return (
        <a href={value.href} rel={rel} target={target} className="text-primary hover:underline">
          {children}
        </a>
      )
    },
  },
}
