import { useEffect, useState } from 'react'
import { loadPointIndex, loadPointResource } from '../services/contentRepository'

export function usePointResource({ themeSlug, selectedPunt, activeView }) {
  const [content, setContent] = useState(null)
  const [contentType, setContentType] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      if (!themeSlug || !selectedPunt || !activeView) {
        setContent(null)
        setContentType(null)
        setError(null)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const pointIndexPath = `punts/${selectedPunt}/index.json`
        const pointIndex = await loadPointIndex(themeSlug, pointIndexPath)

        const resourceFile = pointIndex.resources?.[activeView]

        if (!resourceFile) {
          throw new Error(`No hi ha recurs definit per ${activeView}`)
        }

        const loadedContent = await loadPointResource(
          themeSlug,
          selectedPunt,
          activeView,
          resourceFile
        )

        setContent(loadedContent)
        setContentType(resourceFile.endsWith('.json') ? 'json' : 'html')
      } catch (err) {
        setError(err.message)
        setContent(null)
        setContentType(null)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [themeSlug, selectedPunt, activeView])

  return { content, contentType, loading, error }
}
