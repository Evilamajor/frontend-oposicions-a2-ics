# Model del temari (A2 ICS)

Aquest model defineix l’estructura base del contingut d’estudi.
L'objectiu és separar clarament:
- estructura del temari
- recursos d'estudi
- futura integració amb backend
- futura integració amb IA

---


## Jerarquia principal

```mermaid
graph TD
  Bloc["Bloc"] --> Tema["Tema"]
  Tema --> Seccio["Secció"]
  Seccio --> Punt["Punt (unitat d'estudi)"]
  ```
---
