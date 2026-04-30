import { usePointSummary } from '../hooks/usePointSummary'

export default function PointSummaryViewer({ themeSlug, selectedPunt }) {
  const { content, loading, error } = usePointSummary({
    themeSlug,
    selectedPunt,
  })

  if (!selectedPunt) {
    return <div className="empty-state">Selecciona un punt per veure el resum.</div>
  }

  if (loading) {
    return <div className="empty-state">Carregant resum...</div>
  }

  if (error) {
    return <div className="empty-state">No s'ha pogut carregar el resum: {error}</div>
  }

  return <div className="point-summary-content" dangerouslySetInnerHTML={{ __html: content }} />
}
