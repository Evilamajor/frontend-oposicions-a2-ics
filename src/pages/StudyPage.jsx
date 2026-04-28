import { useState } from 'react'
import '../styles/layout.css'

function StudyPage() {
  const [mode, setMode] = useState('transversal')
  const [selectedTema, setSelectedTema] = useState(null)
  const [selectedPointHtml, setSelectedPointHtml] = useState(null)
  const [rightPanelContent, setRightPanelContent] = useState(null)

  // Temporary static content path.
  // Future backend/AI version can replace this with a contentUrl returned by the API.
  const getPointHtmlPath = (temaNumber, pointNumber) =>
    `/content/transversal/tema-${temaNumber}/punt-${pointNumber}/index.html`

  const tema1SistemaSanitariPoints = [
    {
      id: 't1-p1',
      temaNumber: 1,
      pointNumber: 1,
      title: 'Punt 1. Marc general del sistema sanitari català'
    },
    {
      id: 't1-p2',
      temaNumber: 1,
      pointNumber: 2,
      title: 'Punt 2. Principis del sistema sanitari públic'
    },
    {
      id: 't1-p3',
      temaNumber: 1,
      pointNumber: 3,
      title: 'Punt 3. Llei d’ordenació sanitària de Catalunya'
    },
    {
      id: 't1-p4',
      temaNumber: 1,
      pointNumber: 4,
      title: 'Punt 4. Departament de Salut'
    },
    {
      id: 't1-p5',
      temaNumber: 1,
      pointNumber: 5,
      title: 'Punt 5. Servei Català de la Salut — CatSalut'
    },
    {
      id: 't1-p6',
      temaNumber: 1,
      pointNumber: 6,
      title: 'Punt 6. Institut Català de la Salut dins del sistema'
    },
    {
      id: 't1-p7',
      temaNumber: 1,
      pointNumber: 7,
      title: 'Punt 7. SISCAT: definició i funció'
    },
    {
      id: 't1-p8',
      temaNumber: 1,
      pointNumber: 8,
      title: 'Punt 8. Entitats proveïdores i xarxes assistencials'
    },
    {
      id: 't1-p9',
      temaNumber: 1,
      pointNumber: 9,
      title: 'Punt 9. Pla de salut de Catalunya'
    },
    {
      id: 't1-p10',
      temaNumber: 1,
      pointNumber: 10,
      title: 'Punt 10. Esquema global del sistema sanitari català'
    }
  ]

  const tema2InstitutCatalaSalutPoints = [
    {
      id: 't2-p1',
      temaNumber: 2,
      pointNumber: 1,
      title:
        'Punt 1. Naturalesa de l’Institut Català de la Salut com a empresa pública'
    },
    {
      id: 't2-p2',
      temaNumber: 2,
      pointNumber: 2,
      title: 'Punt 2. Missió, visió i valors de l’ICS'
    },
    {
      id: 't2-p3',
      temaNumber: 2,
      pointNumber: 3,
      title: 'Punt 3. Règim jurídic de l’ICS'
    },
    {
      id: 't2-p4',
      temaNumber: 2,
      pointNumber: 4,
      title: 'Punt 4. Objectius de l’Institut Català de la Salut'
    },
    {
      id: 't2-p5',
      temaNumber: 2,
      pointNumber: 5,
      title: 'Punt 5. Funcions principals de l’ICS'
    },
    {
      id: 't2-p6',
      temaNumber: 2,
      pointNumber: 6,
      title: 'Punt 6. Principis de gestió de l’ICS'
    },
    {
      id: 't2-p7',
      temaNumber: 2,
      pointNumber: 7,
      title: 'Punt 7. Organització general de l’ICS'
    },
    {
      id: 't2-p8',
      temaNumber: 2,
      pointNumber: 8,
      title: 'Punt 8. Estatuts de l’Institut Català de la Salut'
    },
    {
      id: 't2-p9',
      temaNumber: 2,
      pointNumber: 9,
      title: 'Punt 9. Competències de l’Institut Català de la Salut'
    },
    {
      id: 't2-p10',
      temaNumber: 2,
      pointNumber: 10,
      title: 'Punt 10. Esquema global: ICS dins del sistema sanitari català'
    }
  ]

  const tema3DretsCiutadaniaProteccioDadesPoints = [
    {
      id: 't3-p1',
      temaNumber: 3,
      pointNumber: 1,
      title: 'Punt 1. Drets i deures de la ciutadania en relació amb la salut'
    },
    {
      id: 't3-p2',
      temaNumber: 3,
      pointNumber: 2,
      title: 'Punt 2. Dret a la informació assistencial'
    },
    {
      id: 't3-p3',
      temaNumber: 3,
      pointNumber: 3,
      title: 'Punt 3. Consentiment informat'
    },
    {
      id: 't3-p4',
      temaNumber: 3,
      pointNumber: 4,
      title: 'Punt 4. Història clínica i documentació sanitària'
    },
    {
      id: 't3-p5',
      temaNumber: 3,
      pointNumber: 5,
      title: 'Punt 5. Intimitat, confidencialitat i secret professional'
    },
    {
      id: 't3-p6',
      temaNumber: 3,
      pointNumber: 6,
      title: 'Punt 6. Autonomia del pacient'
    },
    {
      id: 't3-p7',
      temaNumber: 3,
      pointNumber: 7,
      title: 'Punt 7. Drets ARSOPOL'
    },
    {
      id: 't3-p8',
      temaNumber: 3,
      pointNumber: 8,
      title: 'Punt 8. Protecció de dades personals en l’àmbit sanitari'
    },
    {
      id: 't3-p9',
      temaNumber: 3,
      pointNumber: 9,
      title: 'Punt 9. Reglament general de protecció de dades — RGPD'
    },
    {
      id: 't3-p10',
      temaNumber: 3,
      pointNumber: 10,
      title: 'Punt 10. Llei orgànica 3/2018 — LOPDGDD'
    },
    {
      id: 't3-p11',
      temaNumber: 3,
      pointNumber: 11,
      title: 'Punt 11. Delegat/ada de protecció de dades'
    },
    {
      id: 't3-p12',
      temaNumber: 3,
      pointNumber: 12,
      title:
        'Punt 12. Esquema global: drets sanitaris, informació i dades personals'
    }
  ]

  const tema4EstatutMarcPoints = [
    {
      id: 't4-p1',
      temaNumber: 4,
      pointNumber: 1,
      title: 'Punt 1. Marc general de l’Estatut marc del personal estatutari'
    },
    {
      id: 't4-p2',
      temaNumber: 4,
      pointNumber: 2,
      title: 'Punt 2. Objecte i àmbit d’aplicació'
    },
    {
      id: 't4-p3',
      temaNumber: 4,
      pointNumber: 3,
      title: 'Punt 3. Classificació del personal estatutari'
    },
    {
      id: 't4-p4',
      temaNumber: 4,
      pointNumber: 4,
      title: 'Punt 4. Drets individuals del personal estatutari'
    },
    {
      id: 't4-p5',
      temaNumber: 4,
      pointNumber: 5,
      title: 'Punt 5. Drets col·lectius del personal estatutari'
    },
    {
      id: 't4-p6',
      temaNumber: 4,
      pointNumber: 6,
      title: 'Punt 6. Deures del personal estatutari'
    },
    {
      id: 't4-p7',
      temaNumber: 4,
      pointNumber: 7,
      title:
        'Punt 7. Adquisició i pèrdua de la condició de personal estatutari fix'
    },
    {
      id: 't4-p8',
      temaNumber: 4,
      pointNumber: 8,
      title: 'Punt 8. Provisió de places, selecció i promoció interna'
    },
    {
      id: 't4-p9',
      temaNumber: 4,
      pointNumber: 9,
      title: 'Punt 9. Mobilitat del personal estatutari'
    },
    {
      id: 't4-p10',
      temaNumber: 4,
      pointNumber: 10,
      title: 'Punt 10. Jornada, permisos i llicències'
    },
    {
      id: 't4-p11',
      temaNumber: 4,
      pointNumber: 11,
      title: 'Punt 11. Retribucions i incompatibilitats'
    },
    {
      id: 't4-p12',
      temaNumber: 4,
      pointNumber: 12,
      title: 'Punt 12. Règim disciplinari i esquema global de l’Estatut marc'
    }
  ]

  const tema5TrebepAcordMesaSectorialPoints = [
    {
      id: 't5-p1',
      temaNumber: 5,
      pointNumber: 1,
      title: 'Punt 1. Marc general del TREBEP'
    },
    {
      id: 't5-p2',
      temaNumber: 5,
      pointNumber: 2,
      title: 'Punt 2. Àmbit d’aplicació del TREBEP'
    },
    {
      id: 't5-p3',
      temaNumber: 5,
      pointNumber: 3,
      title: 'Punt 3. Classes d’empleats públics'
    },
    {
      id: 't5-p4',
      temaNumber: 5,
      pointNumber: 4,
      title: 'Punt 4. Personal funcionari de carrera'
    },
    {
      id: 't5-p5',
      temaNumber: 5,
      pointNumber: 5,
      title: 'Punt 5. Personal funcionari interí'
    },
    {
      id: 't5-p6',
      temaNumber: 5,
      pointNumber: 6,
      title: 'Punt 6. Personal laboral'
    },
    {
      id: 't5-p7',
      temaNumber: 5,
      pointNumber: 7,
      title: 'Punt 7. Personal eventual'
    },
    {
      id: 't5-p8',
      temaNumber: 5,
      pointNumber: 8,
      title: 'Punt 8. Drets individuals dels empleats públics'
    },
    {
      id: 't5-p9',
      temaNumber: 5,
      pointNumber: 9,
      title: 'Punt 9. Drets individuals exercits col·lectivament'
    },
    {
      id: 't5-p10',
      temaNumber: 5,
      pointNumber: 10,
      title: 'Punt 10. Deures dels empleats públics i codi de conducta'
    },
    {
      id: 't5-p11',
      temaNumber: 5,
      pointNumber: 11,
      title: 'Punt 11. Principis ètics'
    },
    {
      id: 't5-p12',
      temaNumber: 5,
      pointNumber: 12,
      title: 'Punt 12. Principis de conducta'
    },
    {
      id: 't5-p13',
      temaNumber: 5,
      pointNumber: 13,
      title: 'Punt 13. III Acord de la Mesa Sectorial de Sanitat de l’ICS'
    },
    {
      id: 't5-p14',
      temaNumber: 5,
      pointNumber: 14,
      title: 'Punt 14. Esquema global: TREBEP, Estatut marc i Acord ICS'
    }
  ]

  const tema6CarreraProfessionalDpoPoints = [
    {
      id: 't6-p1',
      temaNumber: 6,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la incentivació i promoció professional'
    },
    {
      id: 't6-p2',
      temaNumber: 6,
      pointNumber: 2,
      title: 'Punt 2. Concepte de carrera professional'
    },
    {
      id: 't6-p3',
      temaNumber: 6,
      pointNumber: 3,
      title: 'Punt 3. Graus o nivells de carrera professional'
    },
    {
      id: 't6-p4',
      temaNumber: 6,
      pointNumber: 4,
      title: 'Punt 4. Requisits i procediment d’accés a la carrera professional'
    },
    {
      id: 't6-p5',
      temaNumber: 6,
      pointNumber: 5,
      title: 'Punt 5. Avaluació del desenvolupament professional'
    },
    {
      id: 't6-p6',
      temaNumber: 6,
      pointNumber: 6,
      title: 'Punt 6. Efectes retributius de la carrera professional'
    },
    {
      id: 't6-p7',
      temaNumber: 6,
      pointNumber: 7,
      title: 'Punt 7. Direcció per objectius — DPO'
    },
    {
      id: 't6-p8',
      temaNumber: 6,
      pointNumber: 8,
      title: 'Punt 8. Objectius, indicadors i avaluació de la DPO'
    },
    {
      id: 't6-p9',
      temaNumber: 6,
      pointNumber: 9,
      title: 'Punt 9. Retribució variable vinculada a objectius'
    },
    {
      id: 't6-p10',
      temaNumber: 6,
      pointNumber: 10,
      title:
        'Punt 10. Esquema global: carrera professional, DPO i retribució variable'
    }
  ]

  const tema7PrlAssetjamentPoints = [
    {
      id: 't7-p1',
      temaNumber: 7,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la prevenció de riscos laborals'
    },
    {
      id: 't7-p2',
      temaNumber: 7,
      pointNumber: 2,
      title: 'Punt 2. Principis de l’acció preventiva'
    },
    {
      id: 't7-p3',
      temaNumber: 7,
      pointNumber: 3,
      title: 'Punt 3. Drets i obligacions en matèria de PRL'
    },
    {
      id: 't7-p4',
      temaNumber: 7,
      pointNumber: 4,
      title: 'Punt 4. Pla de prevenció i avaluació de riscos'
    },
    {
      id: 't7-p5',
      temaNumber: 7,
      pointNumber: 5,
      title: 'Punt 5. Informació, formació i consulta dels treballadors'
    },
    {
      id: 't7-p6',
      temaNumber: 7,
      pointNumber: 6,
      title: 'Punt 6. Vigilància de la salut'
    },
    {
      id: 't7-p7',
      temaNumber: 7,
      pointNumber: 7,
      title: 'Punt 7. Serveis de prevenció'
    },
    {
      id: 't7-p8',
      temaNumber: 7,
      pointNumber: 8,
      title: 'Punt 8. Riscos laborals en l’àmbit sanitari'
    },
    {
      id: 't7-p9',
      temaNumber: 7,
      pointNumber: 9,
      title: 'Punt 9. Assetjament laboral, sexual i per raó de sexe'
    },
    {
      id: 't7-p10',
      temaNumber: 7,
      pointNumber: 10,
      title:
        'Punt 10. Assetjament per orientació sexual, identitat o expressió de gènere'
    },
    {
      id: 't7-p11',
      temaNumber: 7,
      pointNumber: 11,
      title: 'Punt 11. Protocols d’actuació davant situacions d’assetjament'
    },
    {
      id: 't7-p12',
      temaNumber: 7,
      pointNumber: 12,
      title: 'Punt 12. Esquema global: PRL, salut laboral i assetjament'
    }
  ]

  const tema8IgualtatViolenciaMasclistaPoints = [
    {
      id: 't8-p1',
      temaNumber: 8,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la igualtat efectiva de dones i homes'
    },
    {
      id: 't8-p2',
      temaNumber: 8,
      pointNumber: 2,
      title: 'Punt 2. Principi d’igualtat i no-discriminació'
    },
    {
      id: 't8-p3',
      temaNumber: 8,
      pointNumber: 3,
      title: 'Punt 3. Igualtat en l’ocupació pública'
    },
    {
      id: 't8-p4',
      temaNumber: 8,
      pointNumber: 4,
      title: 'Punt 4. Plans d’igualtat'
    },
    {
      id: 't8-p5',
      temaNumber: 8,
      pointNumber: 5,
      title: 'Punt 5. II Pla d’Igualtat de l’ICS'
    },
    {
      id: 't8-p6',
      temaNumber: 8,
      pointNumber: 6,
      title: 'Punt 6. Mesures de conciliació i corresponsabilitat'
    },
    {
      id: 't8-p7',
      temaNumber: 8,
      pointNumber: 7,
      title: 'Punt 7. Prevenció de discriminacions per raó de sexe'
    },
    {
      id: 't8-p8',
      temaNumber: 8,
      pointNumber: 8,
      title: 'Punt 8. Marc general de la violència masclista'
    },
    {
      id: 't8-p9',
      temaNumber: 8,
      pointNumber: 9,
      title: 'Punt 9. Formes i àmbits de la violència masclista'
    },
    {
      id: 't8-p10',
      temaNumber: 8,
      pointNumber: 10,
      title: 'Punt 10. Drets de les dones en situació de violència masclista'
    },
    {
      id: 't8-p11',
      temaNumber: 8,
      pointNumber: 11,
      title: 'Punt 11. Protocols i circuits d’actuació institucional'
    },
    {
      id: 't8-p12',
      temaNumber: 8,
      pointNumber: 12,
      title:
        'Punt 12. Esquema global: igualtat, no-discriminació i violència masclista'
    }
  ]

  const tema9BioeticaSecretProfessionalPoints = [
    {
      id: 't9-p1',
      temaNumber: 9,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la bioètica en l’àmbit sanitari'
    },
    {
      id: 't9-p2',
      temaNumber: 9,
      pointNumber: 2,
      title: 'Punt 2. Principi d’autonomia'
    },
    {
      id: 't9-p3',
      temaNumber: 9,
      pointNumber: 3,
      title: 'Punt 3. Principi de beneficència'
    },
    {
      id: 't9-p4',
      temaNumber: 9,
      pointNumber: 4,
      title: 'Punt 4. Principi de no-maleficència'
    },
    {
      id: 't9-p5',
      temaNumber: 9,
      pointNumber: 5,
      title: 'Punt 5. Principi de justícia'
    },
    {
      id: 't9-p6',
      temaNumber: 9,
      pointNumber: 6,
      title: 'Punt 6. Confidencialitat en la relació assistencial'
    },
    {
      id: 't9-p7',
      temaNumber: 9,
      pointNumber: 7,
      title: 'Punt 7. Secret professional'
    },
    {
      id: 't9-p8',
      temaNumber: 9,
      pointNumber: 8,
      title: 'Punt 8. Límits del secret professional'
    },
    {
      id: 't9-p9',
      temaNumber: 9,
      pointNumber: 9,
      title: 'Punt 9. Comitès d’ètica assistencial i presa de decisions'
    },
    {
      id: 't9-p10',
      temaNumber: 9,
      pointNumber: 10,
      title:
        'Punt 10. Esquema global: bioètica, confidencialitat i secret professional'
    }
  ]

  const tema10QualitatPoints = [
    {
      id: 't10-p1',
      temaNumber: 10,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la qualitat en l’àmbit sanitari'
    },
    {
      id: 't10-p2',
      temaNumber: 10,
      pointNumber: 2,
      title: 'Punt 2. Qualitat assistencial'
    },
    {
      id: 't10-p3',
      temaNumber: 10,
      pointNumber: 3,
      title: 'Punt 3. Qualitat tècnica'
    },
    {
      id: 't10-p4',
      temaNumber: 10,
      pointNumber: 4,
      title: 'Punt 4. Qualitat percebuda'
    },
    {
      id: 't10-p5',
      temaNumber: 10,
      pointNumber: 5,
      title: 'Punt 5. Seguretat del pacient i millora contínua'
    },
    {
      id: 't10-p6',
      temaNumber: 10,
      pointNumber: 6,
      title: 'Punt 6. Indicadors de qualitat'
    },
    {
      id: 't10-p7',
      temaNumber: 10,
      pointNumber: 7,
      title: 'Punt 7. Cicle PDCA'
    },
    {
      id: 't10-p8',
      temaNumber: 10,
      pointNumber: 8,
      title: 'Punt 8. Diagrama causa-efecte'
    },
    {
      id: 't10-p9',
      temaNumber: 10,
      pointNumber: 9,
      title: 'Punt 9. Avaluació i millora dels processos'
    },
    {
      id: 't10-p10',
      temaNumber: 10,
      pointNumber: 10,
      title: 'Punt 10. Esquema global: qualitat, indicadors i millora contínua'
    }
  ]

  const tema11OfimaticaAdministracioElectronicaPoints = [
    {
      id: 't11-p1',
      temaNumber: 11,
      pointNumber: 1,
      title:
        'Punt 1. Marc general de les eines ofimàtiques en l’administració sanitària'
    },
    {
      id: 't11-p2',
      temaNumber: 11,
      pointNumber: 2,
      title: 'Punt 2. Processador de textos i documents administratius'
    },
    {
      id: 't11-p3',
      temaNumber: 11,
      pointNumber: 3,
      title: 'Punt 3. Fulls de càlcul i tractament bàsic de dades'
    },
    {
      id: 't11-p4',
      temaNumber: 11,
      pointNumber: 4,
      title: 'Punt 4. Bases de dades i registres administratius'
    },
    {
      id: 't11-p5',
      temaNumber: 11,
      pointNumber: 5,
      title: 'Punt 5. Intranet corporativa i espais interns de treball'
    },
    {
      id: 't11-p6',
      temaNumber: 11,
      pointNumber: 6,
      title: 'Punt 6. Internet com a eina d’informació i gestió'
    },
    {
      id: 't11-p7',
      temaNumber: 11,
      pointNumber: 7,
      title: 'Punt 7. Correu electrònic corporatiu i bones pràctiques d’ús'
    },
    {
      id: 't11-p8',
      temaNumber: 11,
      pointNumber: 8,
      title: 'Punt 8. Administració electrònica: concepte i principis'
    },
    {
      id: 't11-p9',
      temaNumber: 11,
      pointNumber: 9,
      title:
        'Punt 9. Seu electrònica, registre electrònic i notificacions electròniques'
    },
    {
      id: 't11-p10',
      temaNumber: 11,
      pointNumber: 10,
      title: 'Punt 10. Identificació i signatura electrònica'
    },
    {
      id: 't11-p11',
      temaNumber: 11,
      pointNumber: 11,
      title:
        'Punt 11. Expedient electrònic, document electrònic i interoperabilitat'
    },
    {
      id: 't11-p12',
      temaNumber: 11,
      pointNumber: 12,
      title:
        'Punt 12. Esquema global: ofimàtica, comunicació digital i administració electrònica'
    }
  ]

  const transversalBlocks = [
    {
      bloc: 'Temari transversal ICS',
      temes: [
        'Tema 1: Sistema sanitari / SISCAT',
        'Tema 2: Institut Català de la Salut',
        'Tema 3: Drets de la ciutadania + protecció de dades',
        'Tema 4: Estatut marc',
        'Tema 5: TREBEP + Acord Mesa Sectorial',
        'Tema 6: Carrera professional + DPO',
        'Tema 7: PRL + assetjament',
        'Tema 8: Igualtat + violència masclista',
        'Tema 9: Bioètica + secret professional',
        'Tema 10: Qualitat',
        'Tema 11: Ofimàtica + administració electrònica'
      ]
    }
  ]

  const selectedTemaNumber = selectedTema?.id
    ? Number(selectedTema.id.match(/^tema-(\d+)-/)?.[1] ?? 0)
    : null

  return (
    <div className="layout study-layout">
      <div className="sidebar-left study-sidebar">
        <div className="study-sidebar-header">
          <button
            type="button"
            className={`study-mode-button${mode === 'transversal' ? ' is-active' : ''}`}
            onClick={() => setMode('transversal')}
          >
            Temari transversal
          </button>
          <button
            type="button"
            className={`study-mode-button${mode === 'especific' ? ' is-active' : ''}`}
            onClick={() => setMode('especific')}
          >
            Temari específic
          </button>
        </div>

        {mode === 'transversal' ? (
          <div className="study-theme-section">
            {transversalBlocks.map((block) => (
              <div key={block.bloc} className="study-theme-group">
                <strong className="study-theme-heading">{block.bloc}</strong>
                {block.temes.map((tema) => {
                  const temaNumber = Number(tema.match(/^Tema (\d+):/)?.[1] ?? 0)

                  return (
                    <button
                      key={tema}
                      type="button"
                      className={`study-theme-button${selectedTemaNumber === temaNumber ? ' is-active' : ''}`}
                      onClick={
                        tema === 'Tema 1: Sistema sanitari / SISCAT'
                          ? () => {
                              setSelectedTema({
                                id: 'tema-1-sistema-sanitari-siscat',
                                title: 'Tema 1 — Sistema sanitari / SISCAT',
                                points: tema1SistemaSanitariPoints
                              })
                              setSelectedPointHtml(null)
                              setRightPanelContent(null)
                            }
                          : tema === 'Tema 2: Institut Català de la Salut'
                            ? () => {
                                setSelectedTema({
                                  id: 'tema-2-institut-catala-salut',
                                  title: 'Tema 2 — Institut Català de la Salut',
                                  points: tema2InstitutCatalaSalutPoints
                                })
                                setSelectedPointHtml(null)
                                setRightPanelContent(null)
                              }
                            : tema ===
                                'Tema 3: Drets de la ciutadania + protecció de dades'
                              ? () => {
                                  setSelectedTema({
                                    id: 'tema-3-drets-ciutadania-proteccio-dades',
                                    title:
                                      'Tema 3 — Drets de la ciutadania + protecció de dades',
                                    points: tema3DretsCiutadaniaProteccioDadesPoints
                                  })
                                  setSelectedPointHtml(null)
                                  setRightPanelContent(null)
                                }
                              : tema === 'Tema 4: Estatut marc'
                                ? () => {
                                    setSelectedTema({
                                      id: 'tema-4-estatut-marc',
                                      title: 'Tema 4 — Estatut marc',
                                      points: tema4EstatutMarcPoints
                                    })
                                    setSelectedPointHtml(null)
                                    setRightPanelContent(null)
                                  }
                                : tema === 'Tema 5: TREBEP + Acord Mesa Sectorial'
                                  ? () => {
                                      setSelectedTema({
                                        id: 'tema-5-trebep-acord-mesa-sectorial',
                                        title: 'Tema 5 — TREBEP + Acord Mesa Sectorial',
                                        points: tema5TrebepAcordMesaSectorialPoints
                                      })
                                      setSelectedPointHtml(null)
                                      setRightPanelContent(null)
                                    }
                                  : tema === 'Tema 6: Carrera professional + DPO'
                                    ? () => {
                                        setSelectedTema({
                                          id: 'tema-6-carrera-professional-dpo',
                                          title: 'Tema 6 — Carrera professional + DPO',
                                          points: tema6CarreraProfessionalDpoPoints
                                        })
                                        setSelectedPointHtml(null)
                                        setRightPanelContent(null)
                                      }
                                    : tema === 'Tema 7: PRL + assetjament'
                                      ? () => {
                                          setSelectedTema({
                                            id: 'tema-7-prl-assetjament',
                                            title: 'Tema 7 — PRL + assetjament',
                                            points: tema7PrlAssetjamentPoints
                                          })
                                          setSelectedPointHtml(null)
                                          setRightPanelContent(null)
                                        }
                                      : tema === 'Tema 8: Igualtat + violència masclista'
                                        ? () => {
                                            setSelectedTema({
                                              id: 'tema-8-igualtat-violencia-masclista',
                                              title: 'Tema 8 — Igualtat + violència masclista',
                                              points: tema8IgualtatViolenciaMasclistaPoints
                                            })
                                            setSelectedPointHtml(null)
                                            setRightPanelContent(null)
                                          }
                                        : tema ===
                                            'Tema 9: Bioètica + secret professional'
                                          ? () => {
                                              setSelectedTema({
                                                id: 'tema-9-bioetica-secret-professional',
                                                title:
                                                  'Tema 9 — Bioètica + secret professional',
                                                points:
                                                  tema9BioeticaSecretProfessionalPoints
                                              })
                                              setSelectedPointHtml(null)
                                              setRightPanelContent(null)
                                            }
                                          : tema === 'Tema 10: Qualitat'
                                            ? () => {
                                                setSelectedTema({
                                                  id: 'tema-10-qualitat',
                                                  title: 'Tema 10 — Qualitat',
                                                  points: tema10QualitatPoints
                                                })
                                                setSelectedPointHtml(null)
                                                setRightPanelContent(null)
                                              }
                                            : tema ===
                                                'Tema 11: Ofimàtica + administració electrònica'
                                              ? () => {
                                                  setSelectedTema({
                                                    id: 'tema-11-ofimatica-administracio-electronica',
                                                    title:
                                                      'Tema 11 — Ofimàtica + administració electrònica',
                                                    points:
                                                      tema11OfimaticaAdministracioElectronicaPoints
                                                  })
                                                  setSelectedPointHtml(null)
                                                  setRightPanelContent(null)
                                                }
                            : undefined
                      }
                    >
                      {tema}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="study-empty-state">Tema en construcció</div>
        )}
      </div>

      <div className="panel-center study-main">
        {selectedPointHtml ? (
          <div className="point-html-view">
            <button
              type="button"
              className="back-to-points-button"
              onClick={() => setSelectedPointHtml(null)}
            >
              Tornar als punts
            </button>

            <iframe
              className="point-html-frame"
              src={selectedPointHtml}
              title="Contingut del punt"
            />
          </div>
        ) : selectedTema ? (
          <>
            <h2 className="study-main-title">{selectedTema.title}</h2>
            <div className="point-list">
              {selectedTema.points.map((point) => (
                <div className="point-card" key={point.id}>
                  <div className="point-title">{point.title}</div>
                  <div className="point-actions">
                    <button
                      type="button"
                      className="action-button"
                      onClick={() => {
                        setRightPanelContent({
                          type: 'ALGOR',
                          temaNumber: point.temaNumber,
                          pointNumber: point.pointNumber
                        })
                        setSelectedPointHtml(
                          getPointHtmlPath(point.temaNumber, point.pointNumber)
                        )
                      }}
                    >
                      ALGOR
                    </button>
                    <button
                      type="button"
                      className="action-button"
                      onClick={() => {
                        setRightPanelContent({
                          type: 'NORM',
                          temaNumber: point.temaNumber,
                          pointNumber: point.pointNumber
                        })
                        setSelectedPointHtml(
                          getPointHtmlPath(point.temaNumber, point.pointNumber)
                        )
                      }}
                    >
                      NORM
                    </button>
                    <button
                      type="button"
                      className="action-button"
                      onClick={() => {
                        setRightPanelContent({
                          type: 'TEST',
                          temaNumber: point.temaNumber,
                          pointNumber: point.pointNumber
                        })
                        setSelectedPointHtml(
                          getPointHtmlPath(point.temaNumber, point.pointNumber)
                        )
                      }}
                    >
                      TEST
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="study-empty-state">Selecciona un tema del navegador esquerre</div>
        )}
      </div>

      <div className="panel-right study-aside">
        <div className="auxiliary-card">
          <p className="auxiliary-label">Recurs auxiliar</p>
          <p className="auxiliary-message">
            {rightPanelContent
              ? rightPanelContent.type === 'TEST'
                ? `Pàgina TEST del tema ${rightPanelContent.temaNumber} punt ${rightPanelContent.pointNumber}`
                : rightPanelContent.type === 'NORM'
                  ? `Pagina NORM en construcció del tema ${rightPanelContent.temaNumber} punt ${rightPanelContent.pointNumber}`
                  : `Pagina ALGOR en construcció del tema ${rightPanelContent.temaNumber} punt ${rightPanelContent.pointNumber}`
              : 'Selecciona ALGOR, NORM o TEST d’un punt'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudyPage