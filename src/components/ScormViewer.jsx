import { useState } from 'react'

export default function ScormViewer({ puntId }) {
  const [step, setStep] = useState(0)

  const steps = [
    'Concepte general del punt',
    'Desenvolupament del concepte',
    'Detall jurídic o tècnic',
    'Resum final'
  ]

  return (
    <div className="scorm-viewer">
      <h3>Explicació del punt {puntId}</h3>

      <p>{steps[step]}</p>

      <button onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}>
        Següent
      </button>
    </div>
  )
}
