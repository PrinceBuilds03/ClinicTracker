# Clinic Ledger

An installable, privacy-conscious PWA for tracking dentistry clinical cases, requirements, evidence, signatures, and manual Moodle submissions. It is local-first: metadata and attached files stay in the browser's IndexedDB and it makes no network calls.

## Run it

On this computer, simply double-click **Open Clinic Ledger.bat** and leave the small black window open. Then open the displayed `http://localhost:4173` address in Chrome or Edge. A PWA service worker will not run from a `file:///` URL.

Alternatively, serve this folder over `http://localhost` with Python:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173` in Chrome or Edge. Use the browser's **Install app** option to install it on Windows or Android.

## Core workflow

1. Configure clinics and their requirement templates in **Courses**.
2. Add a case from **Today** or **Cases**; its course template creates the checklist automatically.
3. Mark requirements complete, attach evidence (including Android camera photos), track signatures, and record Moodle submission.
4. Make regular **Backup Everything** downloads from Settings. Restore merges the backup rather than silently wiping current records.

## Important data note

Local installs on separate devices do not automatically sync. Move data between a PC and phone with Backup/Restore until a future sync adapter is added. Case export is a portable JSON package containing that case and its attached files.
