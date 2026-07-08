# CCEO Vue Review Rules

Stack

- Vue 3
- Composition API
- Vite
- PrimeVue
- TailwindCSS

Review only behavior.

Ignore

- CSS formatting
- Tailwind class order
- Prettier
- ESLint
- Style preferences

Focus on

## Bugs

- Incorrect reactivity
- ref/reactive misuse
- watch misuse
- computed misuse
- lifecycle bugs

## Performance

- unnecessary rerenders
- unnecessary watchers
- heavy computed values
- duplicated API calls

## UX

- loading states
- error handling
- disabled actions
- race conditions

## API

Verify

- error handling
- timeout handling
- retries
- cancellation

Only report issues with clear engineering value.