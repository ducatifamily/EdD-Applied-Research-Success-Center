# EdD Applied Research Success Center — Claxton-Based Sequence

This package is the first program-wide build of the student support site.

## Course status in this build
- ED780 — ACTIVE
- ED810 — COMING SOON / PENDING
- ED822 — ACTIVE
- ED825 — COMING SOON / PENDING
- ED830 — COMING SOON / PENDING
- ED840 — COMING SOON / PENDING

## Important design rule
This site is a supplemental self-check and resource hub. It does **not** write student papers and does not replace Brightspace assignment directions, rubrics, EdD program resources, formal committee decisions, or IRB determinations.

## GitHub upload
1. Create a new GitHub repository (recommended name: `EdD-Applied-Research-Success-Center`).
2. Upload the entire contents of this folder, preserving the `resources` subfolders.
3. Confirm that `index.html`, `styles.css`, `app.js`, `render.yaml`, and `purdue-global-logo.png` are at the repository root.
4. Commit the files.

## Render
1. In Render, create a new Blueprint from the GitHub repository.
2. Render will read `render.yaml`.
3. The service name in the blueprint is `edd-applied-research-success-center`.
4. Deploy. Future GitHub commits should trigger redeployment.

## Public-resource decision
The package intentionally excludes internal course-build exports and the ED780 RPC implementation guide from the public resource library. Student-facing/supportive materials are included under `resources/ED780` and `resources/ED822`. The ED780 assignment-rubric collection is included and is used to drive the Unit 2, Unit 3, Unit 7, and Unit 9 readiness checks.

## Browser storage
Checkbox progress is stored with browser localStorage. Clearing site data, using private/incognito mode, or moving to a different browser/device can erase progress.
