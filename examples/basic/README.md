# Basic example

A small Vite + React 18 + Tailwind v4 app demonstrating `react-wizard-engine`.

## Run

```sh
pnpm install
pnpm dev
```

Open http://localhost:5173.

## What it shows

A multi-route demo suite (powered by `react-router-dom`) mirroring the
`app/(portal)/wizard-demo/` pages from the upstream `perks.loca.us` codebase.

The index route at `/` lists five demos:

- **`setup`** — basic 3-category wizard with `composeWizardProviders` + `withConfig`.
- **`setup-full`** — every option pre-set on steps and categories (completed, skipped, hidden).
- **`setup-initializer`** — a custom `WizardInitializer` subclass hydrates state via `WizardTreeStateBuilder`.
- **`linear`** — plain linear flow with full Skip / Reset / Next controls; exits navigate back to `/`.
- **`diamond`** — branch fork (`D1` / `D2`) with a merge, driven by URL search params.

Shared scaffolding lives in `src/demo-shared/`:

- `build-demo-state.ts` — declarative `IWizardStepState[]` builder.
- `wizard-demo-frame.tsx` — common page chrome (state preview + `WizardHeader` + body).
- `wizard-state-preview.tsx` — collapsible JSON view of the live `IWizardTreeState`.
- `wizard-step-settings.tsx` — per-step Skip / Reset / Next controls.

## CSS setup

The wizard's visual components use a small set of Tailwind tokens that the package does NOT ship with. They are defined in `src/styles.css` via Tailwind v4's `@theme` block. If you're integrating into an existing Tailwind project, copy the relevant `--color-*` and `--ease-out-strong` lines from that file.
