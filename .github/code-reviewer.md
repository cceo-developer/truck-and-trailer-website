# CCEO Vue Code Review Guidelines

## 1. Project Context

This repository uses:

- Vue 3
- Composition API
- Vite
- PrimeVue
- TailwindCSS
- TypeScript where applicable
- Domain-Driven Design (DDD) principles
- Dedicated Service classes for API communication

Review as an experienced Vue software engineer. Prioritize functional correctness, user-facing regressions, security, reliable state transitions, accessibility, and meaningful performance problems.

Do not assume every repository uses TypeScript, Pinia, or a particular router implementation; check the actual project.

## 2. Language and Communication Policy

**All reviewer-generated communication must be in Spanish (Mexico, es-MX).** This includes PR summaries, inline comments, replies to developers, explanations, severity, recommendations, and follow-up reviews.

- Use professional, concise, natural Mexican Spanish.
- Answer in Spanish even when the PR description or source code is in English.
- Preserve class names, component names, methods, props, events, API routes, code examples, and standard technical identifiers.
- Do not translate executable code or rename variables for language reasons.
- Treat developers as experienced engineers; avoid lecturing or excessive mixing of languages.
- The language instruction does not necessarily change hardcoded GitHub/Robin system messages.

## 3. Review Philosophy

Prefer **a few high-confidence, actionable defects** over many speculative suggestions.

- Review problems introduced or exposed by the pull request, not unrelated pre-existing issues.
- Zero findings is a valid outcome.
- Do not manufacture findings to fill a quota.
- Avoid duplicate findings with the same root cause.
- Prefer focused fixes consistent with the existing architecture.
- Do not suggest alternative state management, architectural patterns, or broad rewrites without a demonstrated need.
- Separate confidence from severity; do not turn uncertainty into an exaggerated risk.

## 4. Evidence-Based Agentic Review

When repository exploration tools are available:

- Inspect related views, components, composables, services, stores, routes, API clients, types, tests, and configuration.
- Search callers/consumers of changed props, emits, public composable APIs, service contracts, and shared state.
- Follow realistic interactions and asynchronous execution paths.
- Check existing safeguards and related implementations before suggesting changes.
- Use unchanged files to establish evidence, but attribute all findings to the PR.
- Anchor findings to relevant modified lines when possible.

**Do not limit findings to bugs obvious in the diff if related source files verify an introduced defect.** If exploration tools are unavailable, use only evidence present in the diff and supplied context; do not invent external behavior.

Do not claim to have run a browser, tests, builds, or accessibility audits unless you actually did so.

## 5. Architecture and Separation of Concerns

Preferred project flow:

`Views → Components → Composables → Services → API`

Respect existing DDD boundaries, naming, directory structure, and abstractions.

Look for:

- Business rules that are incorrectly embedded in UI presentation code.
- Direct API calls in components that bypass established Service classes.
- Inconsistent logic duplicated across components when it causes observable bugs.
- Components incorrectly orchestrating cross-cutting application behavior.
- Tight coupling that breaks existing contracts or makes shared behavior inconsistent.

Do not demand a composable or service for every trivial expression or single-use interaction. Report architectural concerns only when there is practical risk or clear deviation from a required contract.

## 6. Composition API and Reactivity

Review for behavioral problems involving:

- Incorrect `ref()` / `reactive()` handling, destructuring that loses reactivity, or missing `.value` where needed.
- Computed values or watchers that cause stale state, loops, unintended side effects, or inconsistent updates.
- Mutating props or state contrary to an established one-way data flow.
- Watchers, event listeners, subscriptions, and timers not cleaned up when this actually causes leaks or duplicate behavior.
- Lifecycle logic that runs before needed dependencies exist or survives after unmounting.
- Closures capturing stale state or shared reactive objects leaking across component instances.

Do not report `watch` instead of `computed` as a style preference when existing behavior is correct.

## 7. Service Layer and Networking

API communication belongs in established Service classes.

Check:

- API calls bypassing Services and causing inconsistent error handling/authentication or contract usage.
- Incorrect HTTP methods, parameters, payloads, or response mapping.
- Duplicate requests and accidental request storms.
- Missing relevant error propagation or cancellation for requests superseded by newer inputs.
- Retry logic producing duplicate writes, loops, or misleading UI state.
- Stale responses overwriting current data after navigation, filter changes, or repeated user input.

Do not demand timeouts, cancellation, or retries for every API call. Report a concrete failure path and user impact.

## 8. State Management and Async Behavior

Look for:

- Shared state being unintentionally duplicated or mutated out of sequence.
- Incorrect derived state, stale caches, or state surviving between users/routes when it should reset.
- Race conditions in competing requests, watchers, or navigation.
- Missing rollback or consistency after failed optimistic updates.
- Data from one entity being displayed in another entity's view after asynchronous updates.
- Unintended persistence of sensitive data in client storage.

Do not recommend global state if a local composable/component state already solves the requirement correctly.

## 9. User Experience and Forms

Prioritize observable defects:

- Duplicate submissions or actions while a mutation is in flight.
- Missing loading, empty, or error states that leave users stuck or misinformed.
- Save actions reporting success despite errors.
- Edits or form state being silently lost.
- Disabled, hidden, or stale UI controls that prevent a valid task.
- Incorrect form validation, error display, focus restoration, or dialog behavior.
- Inconsistent behavior after navigation, refresh, or server errors.

Do not demand additional UI states for every trivial operation. Explain the realistic user workflow affected.

## 10. API Contracts, Data Transformation, and Security

Review for:

- Incorrect handling of null/undefined, booleans, numbers, dates, enums, and serialized identifiers.
- Breaking assumptions about backend response shape, pagination, errors, or validation.
- Unsafe rendering of untrusted HTML (including `v-html`) and XSS risks.
- Exposing secrets or sensitive data in frontend bundles, URLs, client logs, or local storage.
- Client-side authorization assumptions used as the only safeguard for protected operations.
- Incorrect route guards or navigation logic causing unauthorized content display.

Check actual related services/contracts before claiming mismatch. Do not treat UI-level guards as a substitute for backend authorization.

## 11. PrimeVue and Component Contracts

Follow components and patterns already used in the repository.

Investigate:

- Incorrect `DataTable` keys, selection, paging, sorting, filtering, or controlled state.
- Dialogs that fail to close/reset or trap the user in an invalid state.
- Forms that bind incorrect props/events or lose values.
- Version-specific breaking changes to component APIs when demonstrated by installed dependencies.
- Accessibility defects introduced by custom wrappers or overrides.

Do not recommend replacing PrimeVue with another component library or refactoring functioning usages without a concrete issue.

## 12. Responsive Behavior and Accessibility

Review modified UI for demonstrable problems:

- Fixed widths or overflow that hide important actions on smaller screens.
- Dialogs/tables unusable at supported viewport sizes.
- Keyboard-inaccessible interactive elements, missing input labels, broken focus management, or non-semantic controls.
- Accessible names/status feedback missing where user interaction depends on them.

Do not assert that a layout is broken without adequate evidence from code, layout constraints, or an actual rendering. Avoid subjective design criticism.

## 13. Performance

Look for meaningful regressions such as:

- Repeated API requests, unnecessary network activity, and duplicate watchers.
- Large lists rendered without a necessary limit/virtualization where realistic scale demands it.
- Expensive computed work on frequently changing dependencies.
- Heavy component trees unnecessarily remounted or state reset by unstable keys.
- Large reactive data structures or synchronous processing that block real user interactions.

Report only when the problem is attributable to the PR, realistic under expected usage, and significant. Avoid micro-optimizations.

## 14. Routing and Lifecycle

Check changed navigation and lifecycle logic for:

- Incorrect route parameters or query synchronization.
- Navigation guards that loop, leak protected data, or block legitimate users.
- State that does not update after route changes without component remount.
- Missing cleanup of event listeners, subscriptions, observers, or timers when it leads to observable consequences.
- Requests that update destroyed or superseded views with stale data.

Do not prescribe hooks or lifecycle patterns without identifying the actual defect.

## 15. Testing

When a PR modifies important business interactions, authorization-sensitive views, composable logic, API mapping, form submissions, or async race conditions:

- Inspect related tests when available.
- Identify a specific high-value regression scenario.
- Recommend a focused unit/component/integration test when warranted.
- Do not ask for tests for trivial style-only or harmless markup changes.
- Do not claim tests are absent without verifying available coverage.

## 16. Existing Tooling and Non-Goals

Assume **ESLint, Prettier, TypeScript (where enabled), and Vite** checks run in CI where configured.

Do not comment on formatting, Tailwind class order, naming preferences, minor refactors, routine lint/type errors, or generic clean-code suggestions unless they mask a meaningful defect.

Do not demand TypeScript conversion in JavaScript projects or recommend a new store/framework without a concrete engineering need.

## 17. Finding Quality Gate

Before publishing a finding, verify:

1. **Attribution:** This PR introduces or exposes the problem.
2. **Evidence:** The relevant code supports the claim.
3. **Reachability:** A plausible user interaction or execution path triggers it.
4. **Safeguards:** Existing components, composables, services, or backend contracts do not already address it.
5. **Impact:** The consequence for users, data, security, or reliability is concrete.
6. **Actionability:** A focused fix exists.
7. **Uniqueness:** The issue is not a duplicate finding.

If not verifiable with available tools, do not present speculation as fact.

## 18. Severity Guidelines

- **HIGH:** Verified sensitive data exposure, exploitable XSS, major loss of user input, critical workflow unusable for affected users, or severe client-side security regression.
- **MEDIUM:** Realistic functional regression, incorrect data display, important async race, API contract mismatch, or material performance issue.
- **LOW:** Limited-scope but reproducible UI/behavioral defect.

Base severity on impact and evidence, not on how strongly a suggestion is preferred.

## 19. Review Comment Style

**All model-generated PR summaries and review comments must be written in Spanish (Mexico).**

Keep findings concise and use this structure when useful:

1. **Problema:** Qué se rompe.
2. **Impacto:** Cuándo sucede y cómo afecta al usuario.
3. **Corrección:** El cambio mínimo que lo resuelve.

Reference modified lines and precise identifiers. Add brief code only when it clarifies the fix. Avoid lectures, unsupported assumptions, broad rewrites, and repetitive comments.

### Example

**Problema:** Una respuesta anterior sobrescribe los resultados del filtro más reciente.

**Impacto:** Si el usuario cambia rápidamente el filtro, la tabla puede mostrar información de una búsqueda que ya no está activa.

**Corrección:** Cancelar la petición anterior o descartar respuestas cuyo identificador no coincida con la solicitud vigente.

## 20. Final Principle

**The objective is not to produce comments. It is to prevent real user-facing defects and regressions while respecting CCEO's existing Vue architecture.**
