import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlgorView from '../components/AlgorView'
import NormView from '../components/NormView'
import ScormViewer from '../components/ScormViewer'
import TestView from '../components/TestView'
import PointSummaryViewer from '../features/study/components/PointSummaryViewer'
import RightPanelViewer from '../features/study/components/RightPanelViewer'
import { useThemePoints } from '../features/study/hooks/useThemePoints'
import '../styles/layout.css'

const THEME_SLUGS = {
  'tema-1': 'tema-1-sistema-sanitari',
  'tema-2': 'tema-2-ics',
  'tema-3': 'tema-3-drets-ciutadania-dades',
  'tema-4': 'tema-4-estatut-marc',
  'tema-6': 'tema-6-carrera-professional-dpo',
  'tema-7': 'tema-7-prl-assetjament',
  'tema-8': 'tema-8-igualtat-violencia-masclista',
  'tema-11': 'tema-11-ofimatica-administracio-electronica',
}

function StudyPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('transversal')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [openNormativa, setOpenNormativa] = useState(false)
  const [openTemari, setOpenTemari] = useState(true)
  const [activeNormativa, setActiveNormativa] = useState(null)
  const [selectedTema, setSelectedTema] = useState(null)
  const [selectedPunt, setSelectedPunt] = useState(null)
  const [activeView, setActiveView] = useState(null)
  const pointsListRef = useRef(null)
  const [hasPointsOverflow, setHasPointsOverflow] = useState(false)
  const [hasRemainingScroll, setHasRemainingScroll] = useState(false)

  const tema1SistemaSanitariPoints = [
    {
      id: 't1-p1',
      temaNumber: 1,
      pointNumber: 1,
      title: 'Punt 1. Concepte del sistema sanitari'
    },
    {
      id: 't1-p2',
      temaNumber: 1,
      pointNumber: 2,
      title: 'Punt 2. Principis del sistema sanitari'
    },
    {
      id: 't1-p3',
      temaNumber: 1,
      pointNumber: 3,
      title: 'Punt 3. Marc normatiu sanitari'
    },
    {
      id: 't1-p4',
      temaNumber: 1,
      pointNumber: 4,
      title: 'Punt 4. El SISCAT'
    },
    {
      id: 't1-p5',
      temaNumber: 1,
      pointNumber: 5,
      title: 'Punt 5. Estructura del SISCAT'
    },
    {
      id: 't1-p6',
      temaNumber: 1,
      pointNumber: 6,
      title: 'Punt 6. Proveïdors del sistema sanitari'
    },
    {
      id: 't1-p7',
      temaNumber: 1,
      pointNumber: 7,
      title: 'Punt 7. CatSalut'
    },
    {
      id: 't1-p8',
      temaNumber: 1,
      pointNumber: 8,
      title: 'Punt 8. Ordenació territorial'
    },
    {
      id: 't1-p9',
      temaNumber: 1,
      pointNumber: 9,
      title: 'Punt 9. Nivells assistencials'
    },
    {
      id: 't1-p10',
      temaNumber: 1,
      pointNumber: 10,
      title: 'Punt 10. Cartera de serveis'
    },
    {
      id: 't1-p11',
      temaNumber: 1,
      pointNumber: 11,
      title: 'Punt 11. Drets dels ciutadans'
    },
    {
      id: 't1-p12',
      temaNumber: 1,
      pointNumber: 12,
      title: 'Punt 12. Qualitat i coordinació assistencial'
    },
    {
      id: 't1-p13',
      temaNumber: 1,
      pointNumber: 13,
      title: 'Punt 13. Planificació sanitària i Pla de Salut de Catalunya'
    }
  ]

  const tema2InstitutCatalaSalutPoints = [
    {
      id: 't2-p1',
      temaNumber: 2,
      pointNumber: 1,
      title: 'Punt 1. Naturalesa jurídica de l’ICS'
    },
    {
      id: 't2-p2',
      temaNumber: 2,
      pointNumber: 2,
      title: 'Punt 2. Marc normatiu de l’ICS'
    },
    {
      id: 't2-p3',
      temaNumber: 2,
      pointNumber: 3,
      title: 'Punt 3. Funcions de l’ICS'
    },
    {
      id: 't2-p4',
      temaNumber: 2,
      pointNumber: 4,
      title: 'Punt 4. Estructura organitzativa'
    },
    {
      id: 't2-p5',
      temaNumber: 2,
      pointNumber: 5,
      title: 'Punt 5. Òrgans de govern'
    },
    {
      id: 't2-p6',
      temaNumber: 2,
      pointNumber: 6,
      title: 'Punt 6. Xarxa assistencial de l’ICS'
    },
    {
      id: 't2-p7',
      temaNumber: 2,
      pointNumber: 7,
      title: 'Punt 7. ICS dins el SISCAT'
    },
    {
      id: 't2-p8',
      temaNumber: 2,
      pointNumber: 8,
      title: 'Punt 8. Règim jurídic'
    },
    {
      id: 't2-p9',
      temaNumber: 2,
      pointNumber: 9,
      title: 'Punt 9. Règim econòmic'
    },
    {
      id: 't2-p10',
      temaNumber: 2,
      pointNumber: 10,
      title: 'Punt 10. Personal de l’ICS'
    },
    {
      id: 't2-p11',
      temaNumber: 2,
      pointNumber: 11,
      title: 'Punt 11. Qualitat assistencial'
    },
    {
      id: 't2-p12',
      temaNumber: 2,
      pointNumber: 12,
      title: 'Punt 12. Innovació i estratègia'
    }
  ]

  const tema3DretsCiutadaniaProteccioDadesPoints = [
    {
      id: 't3-p1',
      temaNumber: 3,
      pointNumber: 1,
      title: 'Punt 1. Concepte de drets de la ciutadania'
    },
    {
      id: 't3-p2',
      temaNumber: 3,
      pointNumber: 2,
      title: 'Punt 2. Marc normatiu dels drets'
    },
    {
      id: 't3-p3',
      temaNumber: 3,
      pointNumber: 3,
      title: 'Punt 3. Drets dels pacients'
    },
    {
      id: 't3-p4',
      temaNumber: 3,
      pointNumber: 4,
      title: 'Punt 4. Deures dels ciutadans'
    },
    {
      id: 't3-p5',
      temaNumber: 3,
      pointNumber: 5,
      title: 'Punt 5. Informació i consentiment informat'
    },
    {
      id: 't3-p6',
      temaNumber: 3,
      pointNumber: 6,
      title: 'Punt 6. Intimitat i confidencialitat'
    },
    {
      id: 't3-p7',
      temaNumber: 3,
      pointNumber: 7,
      title: 'Punt 7. Introducció a la protecció de dades'
    },
    {
      id: 't3-p8',
      temaNumber: 3,
      pointNumber: 8,
      title: 'Punt 8. Principis del RGPD'
    },
    {
      id: 't3-p9',
      temaNumber: 3,
      pointNumber: 9,
      title: 'Punt 9. Drets en protecció de dades'
    },
    {
      id: 't3-p10',
      temaNumber: 3,
      pointNumber: 10,
      title: 'Punt 10. Obligacions del responsable'
    },
    {
      id: 't3-p11',
      temaNumber: 3,
      pointNumber: 11,
      title: 'Punt 11. Protecció de dades sanitàries'
    },
    {
      id: 't3-p12',
      temaNumber: 3,
      pointNumber: 12,
      title: 'Punt 12. Seguretat i responsabilitat'
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
      title: 'Punt 1. Marc general de la carrera professional en l’àmbit sanitari'
    },
    {
      id: 't6-p2',
      temaNumber: 6,
      pointNumber: 2,
      title: 'Punt 2. Concepte de carrera professional del personal estatutari'
    },
    {
      id: 't6-p3',
      temaNumber: 6,
      pointNumber: 3,
      title: 'Punt 3. Finalitats de la carrera professional: reconeixement, motivació i qualitat assistencial'
    },
    {
      id: 't6-p4',
      temaNumber: 6,
      pointNumber: 4,
      title: 'Punt 4. Modalitats de desenvolupament professional: carrera, promoció i formació'
    },
    {
      id: 't6-p5',
      temaNumber: 6,
      pointNumber: 5,
      title: 'Punt 5. Graus o nivells de carrera professional'
    },
    {
      id: 't6-p6',
      temaNumber: 6,
      pointNumber: 6,
      title: 'Punt 6. Requisits generals per accedir als diferents nivells'
    },
    {
      id: 't6-p7',
      temaNumber: 6,
      pointNumber: 7,
      title: 'Punt 7. Avaluació de mèrits, competències i activitat professional'
    },
    {
      id: 't6-p8',
      temaNumber: 6,
      pointNumber: 8,
      title: 'Punt 8. Formació continuada i desenvolupament competencial'
    },
    {
      id: 't6-p9',
      temaNumber: 6,
      pointNumber: 9,
      title: 'Punt 9. Efectes econòmics i professionals de la carrera professional'
    },
    {
      id: 't6-p10',
      temaNumber: 6,
      pointNumber: 10,
      title: 'Punt 10. DPO: concepte i funció dins l’organització sanitària'
    },
    {
      id: 't6-p11',
      temaNumber: 6,
      pointNumber: 11,
      title: 'Punt 11. Objectius individuals, d’equip i institucionals'
    },
    {
      id: 't6-p12',
      temaNumber: 6,
      pointNumber: 12,
      title: 'Punt 12. Avaluació del compliment d’objectius i impacte retributiu'
    },
    {
      id: 't6-p13',
      temaNumber: 6,
      pointNumber: 13,
      title: 'Punt 13. Relació entre carrera professional, DPO i qualitat del servei públic sanitari'
    }
  ]

  const tema7PrlAssetjamentPoints = [
    {
      id: 't7-p1',
      temaNumber: 7,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la prevenció de riscos laborals en l’àmbit sanitari'
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
      title: 'Punt 3. Drets i deures del personal en matèria de prevenció'
    },
    {
      id: 't7-p4',
      temaNumber: 7,
      pointNumber: 4,
      title: 'Punt 4. Obligacions de l’Administració i responsabilitats preventives'
    },
    {
      id: 't7-p5',
      temaNumber: 7,
      pointNumber: 5,
      title: 'Punt 5. Organització de la prevenció: servei de prevenció, delegats i comitè de seguretat i salut'
    },
    {
      id: 't7-p6',
      temaNumber: 7,
      pointNumber: 6,
      title: 'Punt 6. Avaluació de riscos i planificació de l’activitat preventiva'
    },
    {
      id: 't7-p7',
      temaNumber: 7,
      pointNumber: 7,
      title: 'Punt 7. Riscos específics en l’àmbit sanitari'
    },
    {
      id: 't7-p8',
      temaNumber: 7,
      pointNumber: 8,
      title: 'Punt 8. Vigilància de la salut i protecció de col·lectius especialment sensibles'
    },
    {
      id: 't7-p9',
      temaNumber: 7,
      pointNumber: 9,
      title: 'Punt 9. Formació, informació i participació del personal'
    },
    {
      id: 't7-p10',
      temaNumber: 7,
      pointNumber: 10,
      title: 'Punt 10. Assetjament laboral: concepte, tipologies i elements característics'
    },
    {
      id: 't7-p11',
      temaNumber: 7,
      pointNumber: 11,
      title: 'Punt 11. Assetjament sexual i assetjament per raó de sexe'
    },
    {
      id: 't7-p12',
      temaNumber: 7,
      pointNumber: 12,
      title: 'Punt 12. Protocols d’actuació davant l’assetjament i mesures de protecció'
    },
    {
      id: 't7-p13',
      temaNumber: 7,
      pointNumber: 13,
      title: 'Punt 13. Relació entre PRL, assetjament, clima laboral i qualitat del servei públic'
    }
  ]

  const tema8IgualtatViolenciaMasclistaPoints = [
    {
      id: 't8-p1',
      temaNumber: 8,
      pointNumber: 1,
      title: 'Punt 1. Marc general de la igualtat efectiva entre dones i homes'
    },
    {
      id: 't8-p2',
      temaNumber: 8,
      pointNumber: 2,
      title: 'Punt 2. Principi d’igualtat i prohibició de discriminació'
    },
    {
      id: 't8-p3',
      temaNumber: 8,
      pointNumber: 3,
      title: 'Punt 3. Igualtat en l’ocupació pública i en les condicions de treball'
    },
    {
      id: 't8-p4',
      temaNumber: 8,
      pointNumber: 4,
      title: 'Punt 4. Plans d’igualtat i mesures d’acció positiva'
    },
    {
      id: 't8-p5',
      temaNumber: 8,
      pointNumber: 5,
      title: 'Punt 5. Transversalitat de la perspectiva de gènere en l’Administració pública'
    },
    {
      id: 't8-p6',
      temaNumber: 8,
      pointNumber: 6,
      title: 'Punt 6. Conciliació, corresponsabilitat i drets vinculats a la vida personal i familiar'
    },
    {
      id: 't8-p7',
      temaNumber: 8,
      pointNumber: 7,
      title: 'Punt 7. Violència masclista: concepte i formes de manifestació'
    },
    {
      id: 't8-p8',
      temaNumber: 8,
      pointNumber: 8,
      title: 'Punt 8. Drets de les dones en situació de violència masclista'
    },
    {
      id: 't8-p9',
      temaNumber: 8,
      pointNumber: 9,
      title: 'Punt 9. Actuació dels serveis públics davant la violència masclista'
    },
    {
      id: 't8-p10',
      temaNumber: 8,
      pointNumber: 10,
      title: 'Punt 10. Paper del sistema sanitari en la detecció, atenció i derivació'
    },
    {
      id: 't8-p11',
      temaNumber: 8,
      pointNumber: 11,
      title: 'Punt 11. Coordinació institucional i circuits d’atenció'
    },
    {
      id: 't8-p12',
      temaNumber: 8,
      pointNumber: 12,
      title: 'Punt 12. Prevenció, sensibilització i formació del personal públic'
    },
    {
      id: 't8-p13',
      temaNumber: 8,
      pointNumber: 13,
      title: 'Punt 13. Relació entre igualtat, protecció de drets i qualitat del servei públic sanitari'
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
      title: 'Punt 1. Marc general de les competències digitals en l’Administració pública'
    },
    {
      id: 't11-p2',
      temaNumber: 11,
      pointNumber: 2,
      title: 'Punt 2. Eines ofimàtiques bàsiques: processador de textos, full de càlcul i presentacions'
    },
    {
      id: 't11-p3',
      temaNumber: 11,
      pointNumber: 3,
      title: 'Punt 3. Gestió de documents digitals i organització de la informació'
    },
    {
      id: 't11-p4',
      temaNumber: 11,
      pointNumber: 4,
      title: 'Punt 4. Correu electrònic, agenda i eines col·laboratives'
    },
    {
      id: 't11-p5',
      temaNumber: 11,
      pointNumber: 5,
      title: 'Punt 5. Seguretat bàsica en l’ús d’eines digitals i bones pràctiques'
    },
    {
      id: 't11-p6',
      temaNumber: 11,
      pointNumber: 6,
      title: 'Punt 6. Administració electrònica: concepte i principis generals'
    },
    {
      id: 't11-p7',
      temaNumber: 11,
      pointNumber: 7,
      title: 'Punt 7. Dret i obligació de relacionar-se electrònicament amb l’Administració'
    },
    {
      id: 't11-p8',
      temaNumber: 11,
      pointNumber: 8,
      title: 'Punt 8. Seu electrònica, registre electrònic i notificacions electròniques'
    },
    {
      id: 't11-p9',
      temaNumber: 11,
      pointNumber: 9,
      title: 'Punt 9. Identificació i signatura electrònica'
    },
    {
      id: 't11-p10',
      temaNumber: 11,
      pointNumber: 10,
      title: 'Punt 10. Expedient administratiu electrònic i document administratiu electrònic'
    },
    {
      id: 't11-p11',
      temaNumber: 11,
      pointNumber: 11,
      title: 'Punt 11. Interoperabilitat, arxiu electrònic i reutilització de la informació'
    },
    {
      id: 't11-p12',
      temaNumber: 11,
      pointNumber: 12,
      title: 'Punt 12. Protecció de dades i confidencialitat en entorns digitals'
    },
    {
      id: 't11-p13',
      temaNumber: 11,
      pointNumber: 13,
      title: 'Punt 13. Relació entre transformació digital, eficiència administrativa i qualitat del servei públic'
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

  const normativaItems = [
    { id: 'siscat', label: 'SISCAT' },
    { id: 'ics', label: 'ICS' },
    { id: 'estatut_marc', label: 'Estatut marc (Llei 55/2003)' },
    { id: 'trebep', label: 'TREBEP' },
    { id: 'rgpd', label: 'RGPD' },
    { id: 'lopd', label: 'LO 3/2018' },
    { id: 'igualtat', label: 'LO 3/2007 Igualtat' },
    { id: 'violencia', label: 'Llei 5/2008 Violència masclista' },
    { id: 'pacient', label: 'Llei 41/2002 Autonomia pacient' },
    { id: 'eadmin', label: 'Llei 29/2010 Administració electrònica' }
  ]

  const selectedTemaNumber = selectedTema?.id
    ? Number(selectedTema.id.match(/^tema-(\d+)-/)?.[1] ?? 0)
    : null
  const selectedTemaKey = selectedTema?.id?.match(/^tema-\d+/)?.[0] ?? null
  const selectedThemeSlug = selectedTemaKey ? THEME_SLUGS[selectedTemaKey] ?? null : null
  const activeThemeSlug = selectedThemeSlug
  const {
    points: pointsToRender,
    total: totalPoints,
  } = useThemePoints({
    themeSlug: selectedThemeSlug,
    fallbackPoints: selectedTema?.points ?? [],
  })

  const updatePointsScrollState = () => {
    const listElement = pointsListRef.current

    if (!listElement) {
      setHasPointsOverflow(false)
      setHasRemainingScroll(false)
      return
    }

    const hasOverflow = listElement.scrollHeight > listElement.clientHeight + 1
    const hasRemaining =
      listElement.scrollTop + listElement.clientHeight < listElement.scrollHeight - 1

    setHasPointsOverflow(hasOverflow)
    setHasRemainingScroll(hasOverflow && hasRemaining)
  }

  useEffect(() => {
    if (selectedPunt) {
      setHasPointsOverflow(false)
      setHasRemainingScroll(false)
      return
    }

    const rafId = window.requestAnimationFrame(updatePointsScrollState)
    window.addEventListener('resize', updatePointsScrollState)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', updatePointsScrollState)
    }
  }, [pointsToRender, selectedPunt, selectedTema])

  const renderRightPanelContent = () => {
    if (!selectedPunt) {
      return (
        <div className="empty-state">Selecciona un punt per veure l'explicacio detallada</div>
      )
    }

    switch (activeView) {
      case 'algor':
        return <AlgorView puntId={selectedPunt} />
      case 'norm':
        return <NormView puntId={selectedPunt} />
      case 'test':
        return <TestView puntId={selectedPunt} />
      default:
        return <ScormViewer puntId={selectedPunt} />
    }
  }

  const renderPuntsActuals = () => {
    return (
      <div
        className="point-list study-points-list"
        ref={pointsListRef}
        onScroll={updatePointsScrollState}
      >
        {pointsToRender.map((point, index) => {
          const pointNumber = point.order ?? point.pointNumber ?? index + 1
          const cleanTitle = String(point.title ?? '').replace(/^Punt\s+\d+\.\s*/i, '')

          return (
        <div
          className={`point-card${selectedPunt === point.id ? ' selected' : ''}`}
          key={point.id}
          onClick={() => {
            setSelectedPunt(point.id)
            setActiveView('scorm')
          }}
        >
          <div className="point-title">Punt {pointNumber}. {cleanTitle}</div>
        </div>
          )
        })}
        {totalPoints > 0 && (
          <div className="points-end-marker">Final del tema · {totalPoints} punts</div>
        )}
        {hasPointsOverflow && hasRemainingScroll && (
          <div className="scroll-hint">Desplaca&apos;t per veure tots els punts</div>
        )}
      </div>
    )
  }

  return (
    <div className={`layout study-layout${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setSidebarCollapsed((prev) => !prev)}
      >
        {sidebarCollapsed ? '<' : '>'}
      </button>

      <div className={`sidebar-left study-sidebar sidebar${sidebarCollapsed ? ' collapsed' : ''}`}>
        <div className="study-sidebar-header">
          <div className="sidebar-home-button">
            <button type="button" onClick={() => navigate('/')}>
              ← INICI
            </button>
          </div>
        </div>

        <div className="sidebar-section">
          <div
            className="sidebar-header"
            onClick={() => setOpenNormativa((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setOpenNormativa((prev) => !prev)
              }
            }}
          >
            NORMATIVA {openNormativa ? '▾' : '▸'}
          </div>

          {openNormativa && (
            <div className="sidebar-submenu">
              {normativaItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`sidebar-item${activeNormativa?.id === item.id ? ' is-active' : ''}`}
                  onClick={() => {
                    setActiveNormativa(item)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <div
            className="sidebar-header"
            onClick={() => setOpenTemari((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setOpenTemari((prev) => !prev)
              }
            }}
          >
            TEMARI TRANSVERSAL ICS {openTemari ? '▾' : '▸'}
          </div>

          {openTemari &&
            (mode === 'transversal' ? (
              <div className="sidebar-submenu">
                {transversalBlocks.map((block) =>
                  block.temes.map((tema) => {
                    const temaNumber = Number(tema.match(/^Tema (\d+):/)?.[1] ?? 0)

                    return (
                      <button
                        key={tema}
                        type="button"
                        className={`sidebar-item${selectedTemaNumber === temaNumber ? ' is-active' : ''}`}
                        onClick={
                          tema === 'Tema 1: Sistema sanitari / SISCAT'
                            ? () => {
                                setSelectedTema({
                                  id: 'tema-1-sistema-sanitari-siscat',
                                  title: 'Tema 1 — Sistema sanitari / SISCAT',
                                  points: tema1SistemaSanitariPoints
                                })
                                setSelectedPunt(null)
                                setActiveView(null)
                                setActiveNormativa(null)
                              }
                            : tema === 'Tema 2: Institut Català de la Salut'
                              ? () => {
                                  setSelectedTema({
                                    id: 'tema-2-institut-catala-salut',
                                    title: 'Tema 2 — Institut Català de la Salut',
                                    points: tema2InstitutCatalaSalutPoints
                                  })
                                  setSelectedPunt(null)
                                  setActiveView(null)
                                  setActiveNormativa(null)
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
                                    setSelectedPunt(null)
                                    setActiveView(null)
                                    setActiveNormativa(null)
                                  }
                                : tema === 'Tema 4: Estatut marc'
                                  ? () => {
                                      setSelectedTema({
                                        id: 'tema-4-estatut-marc',
                                        title: 'Tema 4 — Estatut marc',
                                        points: tema4EstatutMarcPoints
                                      })
                                      setSelectedPunt(null)
                                      setActiveView(null)
                                      setActiveNormativa(null)
                                    }
                                  : tema === 'Tema 5: TREBEP + Acord Mesa Sectorial'
                                    ? () => {
                                        setSelectedTema({
                                          id: 'tema-5-trebep-acord-mesa-sectorial',
                                          title: 'Tema 5 — TREBEP + Acord Mesa Sectorial',
                                          points: tema5TrebepAcordMesaSectorialPoints
                                        })
                                        setSelectedPunt(null)
                                        setActiveView(null)
                                        setActiveNormativa(null)
                                      }
                                    : tema === 'Tema 6: Carrera professional + DPO'
                                      ? () => {
                                          setSelectedTema({
                                            id: 'tema-6-carrera-professional-dpo',
                                            title: 'Tema 6 — Carrera professional + DPO',
                                            points: tema6CarreraProfessionalDpoPoints
                                          })
                                          setSelectedPunt(null)
                                          setActiveView(null)
                                          setActiveNormativa(null)
                                        }
                                      : tema === 'Tema 7: PRL + assetjament'
                                        ? () => {
                                            setSelectedTema({
                                              id: 'tema-7-prl-assetjament',
                                              title: 'Tema 7 — PRL + assetjament',
                                              points: tema7PrlAssetjamentPoints
                                            })
                                            setSelectedPunt(null)
                                            setActiveView(null)
                                            setActiveNormativa(null)
                                          }
                                        : tema === 'Tema 8: Igualtat + violència masclista'
                                          ? () => {
                                              setSelectedTema({
                                                id: 'tema-8-igualtat-violencia-masclista',
                                                title: 'Tema 8 — Igualtat + violència masclista',
                                                points: tema8IgualtatViolenciaMasclistaPoints
                                              })
                                              setSelectedPunt(null)
                                              setActiveView(null)
                                              setActiveNormativa(null)
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
                                                setSelectedPunt(null)
                                                setActiveView(null)
                                                setActiveNormativa(null)
                                              }
                                            : tema === 'Tema 10: Qualitat'
                                              ? () => {
                                                  setSelectedTema({
                                                    id: 'tema-10-qualitat',
                                                    title: 'Tema 10 — Qualitat',
                                                    points: tema10QualitatPoints
                                                  })
                                                  setSelectedPunt(null)
                                                  setActiveView(null)
                                                  setActiveNormativa(null)
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
                                                    setSelectedPunt(null)
                                                    setActiveView(null)
                                                    setActiveNormativa(null)
                                                  }
                              : undefined
                        }
                      >
                        {tema}
                      </button>
                    )
                  })
                )}
              </div>
            ) : (
              <div className="study-empty-state">Tema en construcció</div>
            ))}
        </div>
      </div>

      <div className="panel-center study-main">
        {activeNormativa ? (
          <div className="normativa-placeholder">
            <h2>Pàgina en construcció</h2>
            <p>{activeNormativa.label}</p>
          </div>
        ) : selectedTema ? (
          <>
            <h2 className="study-main-title">{selectedTema.title}</h2>
            <div className="center-header">
              <button
                type="button"
                onClick={() => setActiveView('algor')}
                disabled={!selectedPunt}
              >
                ALGOR
              </button>
              <button
                type="button"
                onClick={() => setActiveView('norm')}
                disabled={!selectedPunt}
              >
                NORM
              </button>
              <button
                type="button"
                onClick={() => setActiveView('test')}
                disabled={!selectedPunt}
              >
                TEST
              </button>
            </div>
            {activeThemeSlug && selectedPunt ? (
              <PointSummaryViewer themeSlug={activeThemeSlug} selectedPunt={selectedPunt} />
            ) : (
              renderPuntsActuals()
            )}
          </>
        ) : (
          <div className="study-empty-state">Selecciona un tema del navegador esquerre</div>
        )}
      </div>

      <div className="panel-right study-aside">
        <div className="auxiliary-card">
          {activeThemeSlug ? (
            <RightPanelViewer
              themeSlug={activeThemeSlug}
              selectedPunt={selectedPunt}
              activeView={activeView}
            />
          ) : (
            renderRightPanelContent()
          )}
        </div>
      </div>
    </div>
  )
}

export default StudyPage