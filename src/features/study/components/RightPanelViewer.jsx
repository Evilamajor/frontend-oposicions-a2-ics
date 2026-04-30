import { usePointResource } from '../hooks/usePointResource'

export default function RightPanelViewer({ themeSlug, selectedPunt, activeView }) {
  const { content, contentType, loading, error } = usePointResource({
    themeSlug,
    selectedPunt,
    activeView,
  })

  if (!selectedPunt) {
    return (
      <div className="empty-state">
        Selecciona un punt per veure l'explicacio o un recurs associat.
      </div>
    )
  }

  if (loading) {
    return <div className="empty-state">Carregant contingut...</div>
  }

  if (error) {
    return <div className="empty-state">No s'ha pogut carregar el contingut: {error}</div>
  }

  if (contentType === 'html') {
    return <div className="right-panel-content" dangerouslySetInnerHTML={{ __html: content }} />
  }

  if (contentType === 'json') {
    return <pre className="right-panel-json">{JSON.stringify(content, null, 2)}</pre>
  }

  return <div className="empty-state">Contingut no disponible.</div>
}
