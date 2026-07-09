# CCEO Vue Review Guidelines

## Project Context

This project uses:

- Vue 3
- Composition API
- Vite
- PrimeVue
- TailwindCSS

The frontend follows **Domain-Driven Design (DDD)** principles similar to the backend.

Business logic should remain outside UI components whenever possible.

API communication is centralized through dedicated Service classes.

Assume the project follows modern Vue 3 best practices unless the diff clearly shows otherwise.

---

# Architecture

The preferred architecture is:

Views
→ Components
→ Composables
→ Services
→ API

Respect the existing architecture.

Do not recommend moving API calls directly into components when Services already exist.

Do not recommend introducing new architectural patterns unless there is a real engineering problem.

Review for:

- Business logic inside UI components
- API calls inside components instead of Services
- Tight coupling between presentation and business logic
- Duplicated logic that should live inside a composable
- Components that become responsible for orchestration instead of presentation

---

# Review Philosophy

Focus on identifying real engineering risks.

Prefer a few high-confidence findings over many speculative comments.

Do not report issues that are not directly visible in the provided diff.

If two findings describe the same root cause, report only the most relevant one.

When uncertain, lower confidence instead of increasing severity.

Assume the reviewer is an experienced Vue developer.

---

# Tooling Already Covers

Assume these tools already run in CI:

- ESLint
- Prettier
- TypeScript
- Vite

Do NOT comment on:

- Formatting
- CSS formatting
- Tailwind class ordering
- Import ordering
- Naming preferences
- Minor refactoring suggestions

Only report these when they introduce a real engineering problem.

---

# Vue Composition API

Review for:

- Incorrect use of ref() vs reactive()
- Incorrect computed() usage
- Watchers that should be computed
- Unnecessary watchers
- watchEffect misuse
- Mutating props
- Missing cleanup for watchers
- Missing cleanup for event listeners
- Incorrect lifecycle hook usage
- Reactive state leaking outside composables

Avoid suggesting Composition API patterns that do not provide a clear benefit.

---

# Services

API communication should be performed through Service classes.

Review for:

- API calls inside components
- Duplicate API requests
- Missing abstraction through Services
- Business logic mixed with networking
- Inconsistent API consumption

Respect existing abstractions.

---

# State Management

Review for:

- Duplicated state
- Derived state stored unnecessarily
- State mutation outside the expected flow
- Shared state that should live in composables or stores
- Unnecessary global state

---

# User Experience

Review for:

- Missing loading states
- Missing empty states
- Missing error states
- Disabled actions while requests are running
- Race conditions
- Duplicate submissions
- Missing user feedback
- Blocking UI unnecessarily

---

# Responsive Design

Review for:

- Layouts that may break on mobile devices
- Fixed widths where responsive layouts are expected
- Overflow issues
- Tables that may become unusable on small screens
- Dialogs larger than the viewport
- Components that ignore responsive PrimeVue utilities
- Missing responsive Tailwind breakpoints
- Hardcoded dimensions that reduce responsiveness

Only report responsive issues that are clearly visible in the diff.

---

# PrimeVue

Prefer PrimeVue components and patterns already used by the project.

Review for:

- Incorrect DataTable usage
- Missing loading indicators
- Missing paginator usage when appropriate
- Dialog usability
- Form usability
- Accessibility issues visible in the component

Do not recommend replacing PrimeVue components without a strong technical reason.

---

# Performance

Review for:

- Unnecessary component rerenders
- Heavy computed properties
- Duplicate watchers
- Duplicate API calls
- Expensive rendering
- Large reactive objects
- Missing lazy loading where appropriate
- Excessive DOM rendering

Only report performance issues that are directly visible in the diff.

---

# Networking

Review for:

- Missing error handling
- Missing timeout handling
- Missing request cancellation
- Duplicate requests
- Missing retry strategy where appropriate
- Inconsistent error propagation

---

# Accessibility

Review for:

- Missing labels
- Missing keyboard accessibility
- Missing focus management in dialogs
- Interactive elements that cannot be reached by keyboard

Only report issues visible in the modified code.

---

# Testing

When business logic changes significantly, verify whether automated tests should be added or updated.

Do not request tests for simple UI changes.

---

# Review Style

When reporting an issue:

1. Explain the problem.
2. Explain the user impact.
3. Recommend the smallest reasonable fix.
4. Include a short code example only when it improves clarity.

Keep comments concise.

Avoid subjective opinions.

Avoid suggesting complete rewrites.

Always respect the existing DDD architecture, Composition API structure and Service layer.
