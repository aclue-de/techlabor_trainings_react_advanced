# Setup
- start backend (See backend README.md)
- start frontend (See frontend README.md)

# Presentation
## Glossar
  1. Css-modules vs styled-components (15m, Leon?)
  2. Api-Generierung (10m + 15m, Tim?)
    - ToDo 1.1: Api Generation (Rtk-codegen & OpenApi.json)
    - ToDo 1.2: Import generated login endpoint & use it
  Kurze Pause (10m)
  3. Redux State Management (Slice - explain via flux?) (20m + 30m, Leon?)
    - ToDo 2.1: Writing Login Response into LoginSlice (RTK Slice & State Management)
    - ToDo 2.2: Reading LoginData from LoginSlice (React-Router, RTK Slice & State Management)
    - ToDo 2.3: LoginRoute Redirect based on LoginData (React-Router, Login-Guards)
  Pause & Essen bestellen (10m)
  4. Special React Hooks (Todo useCallback?) (20m + 40m, Tim?)
     - ToDo 3.1 useMemo
     - ToDo 3.2 useRef
     - ToDo 3.3 Fix Disabled / Force Rerendering
     - ToDo 3.4 Add Reset
     - ToDo 3.5 Tag Invalidation
     - nested state & pitfalls example?
  5. Ausblick (Signals, etc.) (20-30m)
  6. (Optional) error boundaries -> error page
  7. (Optional) Middleware Error Handling
## Notes
- Appoint someone to hint at questions in chat
- Update time tTable & puffer Times

# Training Responsive Webapp React-Mui-rtk
## Notes from talk with Johannes
- routing concept
- Zeitplan aufstellen und welche Zeiten als Puffer genommen werden können

- Tipps
  - Einen beauftragen auf Fragen im Chat hinzuweisen
  - Mittagpause hintendran & vorab bestellen oder mittendrin Pause
  - Code & Bilder im Powerpoint
## ToDo (unsorted)
- add links in readme & code to useful documentation
- split up into branches
- repo veröffentlichen

### presentation
- Zu den ToDos direkt die Code snippets mit den todos, auf die nächste folie dann die lösung
- Beispiele aus Folien sollten nicht Lösungen sein
- Fragen für Teilnehmer einbauen
- explain project structure in code
#### Optional
- errormiddleware

### test
  - test on someone elses pc, also note whether nodejs version must be installed manually (f.e. Matthäus, Sandria)
### feedback
  - show to Johannes

## Preparation before Workshop for participants
- use node 18.18.2
- have look at last training
- Clone git repo
- IDE for Js/Ts (Webstorm, VsCode, etc.)
  - Make sure auto complete works
- Setup frontend & backend (see README.md -> Setup)
