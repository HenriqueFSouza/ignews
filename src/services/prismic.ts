import * as prismic from '@prismicio/client'

export default function getPrismicClient(req?: unknown) {
  const Prismic = prismic.createClient( 
    process.env.PRISMIC_ENDPOINT,
    { 
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return Prismic;
}