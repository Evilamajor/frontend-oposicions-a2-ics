import { useEffect, useState } from 'react'
import { loadPointIndex, loadPointResource } from '../services/contentRepository'

export function usePointSummary({ themeSlug, selectedPunt }) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      if (!themeSlug || !selectedPunt) {
        setContent(null)
        setError(null)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const pointIndexPath = `punts/${selectedPunt}/index.json`
        const pointIndex = await loadPointIndex(themeSlug, pointIndexPath)

        const summaryFile = pointIndex.resources?.summary

        if (!summaryFile) {
          throw new Error('No hi ha summary definit')
        }

        const html = await loadPointResource(themeSlug, selectedPunt, 'summary', summaryFile)

        setContent(html)
      } catch (err) {
        setError(err.message)
        setContent(null)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [themeSlug, selectedPunt])

  return { content, loading, error }
}
