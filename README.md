# react-wizard-engine — issues & feedback

This is the public issue tracker for [`react-wizard-engine`](https://www.npmjs.com/package/react-wizard-engine), a headless multi-step wizard engine for React.

The library itself is published on npm. **The source code is private**, but bug reports, feature requests, and questions are welcome here.

## Quick links

| | |
|---|---|
| 📦 npm | https://www.npmjs.com/package/react-wizard-engine |
| 🎯 Live demo | https://react-wizard-engine.vercel.app/ |
| 🧪 Run example in browser | [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/knazark/react-wizard-engine-issues/tree/main/examples/basic) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-040404?logo=codesandbox)](https://codesandbox.io/p/github/knazark/react-wizard-engine-issues/main?file=%2Fexamples%2Fbasic%2Fsrc%2Fapp.tsx) |
| 💖 Sponsor | https://github.com/sponsors/knazark · https://send.monobank.ua/jar/2jfphHthfY |

## Example

A runnable example lives under [`examples/basic/`](./examples/basic) — Vite + React 18 + Tailwind v4. It consumes the published `react-wizard-engine` npm package and showcases five routes (basic setup, full state, custom initializer, plain linear, branch fork / diamond). Open it in [StackBlitz](https://stackblitz.com/github/knazark/react-wizard-engine-issues/tree/main/examples/basic) or [CodeSandbox](https://codesandbox.io/p/github/knazark/react-wizard-engine-issues/main?file=%2Fexamples%2Fbasic%2Fsrc%2Fapp.tsx) to play with it, no install required.

## Install

```sh
pnpm add react-wizard-engine lucide-react @radix-ui/react-slot
# only if you also use the styled /shadcn adapter:
pnpm add @radix-ui/react-dialog
```

## Open an issue

- **🐛 Found a bug?** [File a bug report](https://github.com/knazark/react-wizard-engine-issues/issues/new?template=bug-report.yml)
- **💡 Have a feature idea?** [File a feature request](https://github.com/knazark/react-wizard-engine-issues/issues/new?template=feature-request.yml)
- **❓ Have a question?** [Ask a question](https://github.com/knazark/react-wizard-engine-issues/issues/new?template=question.yml)

Before filing, search [existing issues](https://github.com/knazark/react-wizard-engine-issues/issues) — your question might already be answered.

## What this repo is NOT

- **Not the engine source.** The implementation is closed-source. You'll find the built artifact (minified, no source maps) under `dist/` after `pnpm add react-wizard-engine`. The `examples/` folder *is* open — it's just a consumer of the published npm package.
- **Not a fork or vendored copy.** This repo is purely for community feedback and runnable examples.
- **Not actively monitored 24/7.** Best-effort response time: a few days. [Sponsoring](https://github.com/sponsors/knazark) bumps your issues toward the top of the queue.

## License

The library `react-wizard-engine` is MIT-licensed. This issues repo has no source code, so no separate license — the templates and README are public-domain-ish (do whatever).

## Support

If `react-wizard-engine` saves you time, consider [sponsoring](https://github.com/sponsors/knazark) or [tipping via monobank](https://send.monobank.ua/jar/2jfphHthfY). Even a small one-time tip goes a long way.
