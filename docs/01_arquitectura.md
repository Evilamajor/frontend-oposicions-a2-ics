# Workspace frontend — arquitectura inicial

Aquest document descriu l’estructura inicial del frontend i les decisions arquitectòniques associades.

---

## 1. Objectiu

Crear un frontend escalable que permeti:

- gestionar múltiples sistemes d’estudi
- integrar backend en el futur
- incorporar funcionalitats d’IA
- mantenir separació clara de responsabilitats

---

## 2. Principi de disseny

El sistema no és una web tradicional.

És una:

> plataforma d’estudi per oposicions

Per això, la seva arquitectura ha de reflectir:

- estructura del temari
- formes d’estudi
- separació entre contingut i UI

---

## 3. Sistemes d’estudi

La plataforma es divideix en dos sistemes diferenciats:

### Transversal

Sistema comú a múltiples oposicions:

- altament estructurat
- basat en normativa
- reutilitzable
- orientat a memorització i test

### Específic

Sistema propi de cada oposició (ex: A2 ICS):

- contingut contextual
- més pes de casos pràctics
- orientat a comprensió
- menys reutilitzable

---

## 4. Estructura del frontend

```txt
src/
├── core/
├── data/
│   ├── transversal/
│   └── especific/
├── features/
│   ├── transversal/
│   └── especific/
├── layouts/
├── pages/
├── router/
├── shared/
```

---

## 5. Descripció de carpetes

### core/

Conté la lògica comuna del sistema.

Futurament inclourà:

- connexió amb backend (API)
- serveis d’IA
- transformació de dades
- gestió d’estat global (si cal)

---

### data/

Conté dades del temari.

Inicialment:

- dades mock (local)
- estructura Bloc → Tema → Secció → Punt

Separació:

- transversal → contingut reutilitzable
- específic → contingut propi de cada oposició

---

### features/

Conté funcionalitats del sistema d’estudi.

Separació per tipus:

- transversal → funcionalitats comunes
- específic → funcionalitats adaptades

Exemples futurs:

- visor de punts
- sistema de test
- sistema d’esquemes
- casos pràctics

---

### layouts/

Defineix estructures de pàgina.

Exemples:

- layout d’estudi (panells)
- layout simple (home)
- layout amb normativa

---

### pages/

Defineix pantalles associades a rutes.

Exemples:

- Home
- Study
- Tema
- Test

---

### router/

Gestiona la navegació.

Funcions:

- definició de rutes
- separació per sistema (transversal / específic)
- futur suport per rutes dinàmiques

---

### shared/

Components reutilitzables.

Exemples:

- botons
- headers
- elements UI comuns

---

## 6. Decisió clau

No es creen dos projectes separats.

Es construeix un únic frontend amb:

- múltiples sistemes
- arquitectura modular
- dades separades

---

## 7. Estat actual

Actualment:

- estructura creada ✔️
- cap fitxer modificat ✔️
- projecte funcional ✔️

---

## 8. Proper pas

Definir el model de dades real:

- temari transversal
- temari específic
- estructura per backend

Fitxer previst:

```txt
src/data/temari.js
```

---

## 9. Visió futura

Aquest frontend evolucionarà cap a:

- backend amb API
- sistema d’autenticació
- serveis d’IA
- personalització d’estudi

---

## 10. Conclusió

S’ha establert una base arquitectònica:

- neta
- escalable
- orientada a oposicions
- preparada per TFG

Aquest és el punt de partida del sistema.