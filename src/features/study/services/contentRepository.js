const BASE = `${import.meta.env.BASE_URL}content/transversal`

async function parseJsonOrUnavailable(res, unavailableMessage) {
  const contentType = res.headers.get('content-type') || ''

  if (!contentType.includes('application/json')) {
    throw new Error(unavailableMessage)
  }

  try {
    return await res.json()
  } catch {
    throw new Error(unavailableMessage)
  }
}

export async function loadThemeIndex(themeSlug) {
  const res = await fetch(`${BASE}/${themeSlug}/index.json`)
  if (!res.ok) throw new Error("No s'ha pogut carregar l'index del tema")
  return parseJsonOrUnavailable(res, "No s'ha pogut carregar l'index del tema")
}

export async function loadPointIndex(themeSlug, pointPath) {
  const res = await fetch(`${BASE}/${themeSlug}/${pointPath}`)
  if (!res.ok) throw new Error("No s'ha pogut carregar l'index del punt")
  return parseJsonOrUnavailable(res, 'Contingut no disponible per aquest punt')
}

export async function loadPointResource(themeSlug, pointId, resourceName, resourceFile) {
  const res = await fetch(`${BASE}/${themeSlug}/punts/${pointId}/${resourceFile}`)
  if (!res.ok) throw new Error(`No s'ha pogut carregar el recurs ${resourceName}`)

  if (resourceFile.endsWith('.json')) {
    return parseJsonOrUnavailable(res, 'Contingut no disponible per aquest punt')
  }

  const content = await res.text()
  if (content.trimStart().toLowerCase().startsWith('<!doctype html')) {
    throw new Error('Contingut no disponible per aquest punt')
  }

  return content
}
