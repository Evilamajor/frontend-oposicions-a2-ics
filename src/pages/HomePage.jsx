import { useNavigate } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()

  const oppositionNews = [
    'Convocatòria A2 ICS prevista 2027 — pendent de confirmació',
    'Actualització del TREBEP amb impacte potencial en el temari',
    'Concurs de trasllat ICS: actualització de punts prevista novembre 2026',
    'Part transversal ICS: temes 1–11 en desenvolupament',
    'Part específica A2: estructura pendent de desplegament'
  ]

  return (
    <main className="home-page">
      <header className="home-header">
        <h1>Preparació oposicions ICS</h1>
        <p>
          Plataforma d’estudi per a la preparació de processos selectius de l’Institut
          Català de la Salut.
        </p>
      </header>

      <section className="home-main-grid">
        <div className="home-left-column">
          <article className="home-card home-card-primary" onClick={() => navigate('/temari')}>
            <div className="ics-logo-slot" aria-hidden="true">
              <img
                src={`${import.meta.env.BASE_URL}assets/logos/imatgelogo.png`}
                alt="Temari ICS: Part transversal"
                className="home-card-logo"
              />
            </div>
          </article>

          <article className="home-card home-card-disabled" aria-disabled="true">
            <div className="home-card-content">
              <h2>Part específica Tècnics/ques de Gestió Administrativa ICS</h2>
              <p>Àmbit específic A2. Estructura preparada per al desenvolupament posterior.</p>
            </div>
            <span className="coming-soon-tag">Properament</span>
          </article>
        </div>

        <aside className="home-news-column">
          <h2>Estat de les oposicions</h2>
          <div className="news-ticker-window" aria-label="Avisos i novetats">
            <div className="news-ticker-track">
              <ul className="news-ticker-list">
                {oppositionNews.map((item) => (
                  <li key={`news-a-${item}`} className="news-ticker-item">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="news-ticker-list" aria-hidden="true">
                {oppositionNews.map((item) => (
                  <li key={`news-b-${item}`} className="news-ticker-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
