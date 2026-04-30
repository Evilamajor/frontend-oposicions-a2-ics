import { useEffect, useState } from 'react'
import { loadThemeIndex } from '../services/contentRepository'

export function useThemePoints({ themeSlug, fallbackPoints }) {
  const [themeIndex, setThemeIndex] = useState(null)
  const [points, setPoints] = useState(fallbackPoints ?? [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [source, setSource] = useState('fallback')

  useEffect(() => {
    let cancelled = false

    async function load() {
      if (!themeSlug) {
        setThemeIndex(null)
        setPoints(fallbackPoints ?? [])
        setError(null)
        setLoading(false)
        setSource('fallback')
        return
      }

      try {
        setLoading(true)
        setError(null)

        const data = await loadThemeIndex(themeSlug)

        if (cancelled) return

        const loadedPoints = Array.isArray(data.points) ? data.points : []
        const safeFallbackPoints = fallbackPoints ?? []
        const shouldUseJson =
          loadedPoints.length > 0 &&
          (safeFallbackPoints.length === 0 || loadedPoints.length >= safeFallbackPoints.length)

        setThemeIndex(data)
        setPoints(shouldUseJson ? loadedPoints : safeFallbackPoints)
        setSource(shouldUseJson ? 'json' : 'fallback')
      } catch (err) {
        if (cancelled) return

        setThemeIndex(null)
        setPoints(fallbackPoints ?? [])
        setError(err.message)
        setSource('fallback')
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [themeSlug, fallbackPoints])

  return {
    themeIndex,
    points,
    loading,
    error,
    source,
    total: points.length,
  }
}
