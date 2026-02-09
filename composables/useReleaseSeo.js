import { useReleases } from './useReleases'

export function useReleaseSeo(overrides = {}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const { releases } = useReleases()

  // Extract the release slug from the route path (e.g., '/releases/Evkalipt' -> 'releases/Evkalipt')
  const routePath = route.path.replace(/^\//, '').replace(/\/$/, '')

  // Find the release that matches the current route
  const release = releases.find(r => r.name === routePath)

  if (!release) {
    return
  }

  const siteUrl = config.public.siteUrl || 'https://mestnostrecords.com'
  const title = overrides.title || `${release.artistName} — ${release.releaseName}`
  const description = overrides.description || `${release.releaseName} by ${release.artistName} on Mestnost Records`
  const imageUrl = overrides.image || `${siteUrl}/static/${release.image}.jpg`
  const pageUrl = `${siteUrl}/${release.name}`

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: pageUrl,
    ogType: 'music.album',
    ogSiteName: 'Mestnost Records',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
  })
}
