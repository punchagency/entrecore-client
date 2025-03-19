# Entrecore Client

This document outlines the coding standards and collaboration guidelines for the Entrecore client project.

## Table of Contents

- [Entrecore Client](#entrecore-client)
  - [Table of Contents](#table-of-contents)
  - [Component Library](#component-library)
  - [File Naming Conventions](#file-naming-conventions)
  - [Icons](#icons)
  - [TypeScript Usage](#typescript-usage)
  - [Data Fetching](#data-fetching)
  - [Git Workflow](#git-workflow)
  - [Code Comments](#code-comments)
  - [Package Management](#package-management)
  - [Styling Guidelines](#styling-guidelines)
  - [Collaboration Best Practices](#collaboration-best-practices)
  - [Getting Started](#getting-started)
  - [Note](#note)

## Component Library

- Use [shadcn/ui](https://ui.shadcn.com/) components wherever possible
- Benefits:
  - Customizable
  - Composable
  - Accessible by default
  - Consistent design system
- Avoid creating custom components unless absolutely necessary

## File Naming Conventions

- Component file names must be lowercase (e.g., `button.tsx`, `navbar.tsx`)
- Component names within files should be PascalCase (e.g., `export function Button()`)
- Follow consistent naming patterns:
  ```
  components/
  ├── button.tsx         ✅
  ├── navbar.tsx         ✅
  ├── Button.tsx         ❌
  └── NavBar.tsx         ❌
  ```

## Icons

- Use [Lucide Icons](https://lucide.dev/) exclusively
- Benefits:
  - Consistent sizing
  - Comprehensive icon set
  - Regular updates
  - Small bundle size
- Avoid mixing multiple icon libraries

## TypeScript Usage

- Use TypeScript strictly - no "AnyScript"
- Define types for all props, state, and function parameters
- Avoid using `any` type
- Create separate type definitions when reused across components
- Example:

  ```typescript
  // Good
  interface UserProps {
    id: string;
    name: string;
    email: string;
  }

  // Bad
  const user: any = {
    /* ... */
  };
  ```

## Data Fetching

- Use [TanStack Query](https://tanstack.com/query/latest) (React Query) for data fetching
- Use [Axios](https://axios-http.com/) as the HTTP client
- Benefits:
  - Automatic caching
  - Built-in error handling
  - Loading states
  - Data synchronization

## Git Workflow

- Follow conventional commit messages
  - Use AI tools for generating commit messages if needed
  - Format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore
- Never push directly to main branch
- Create feature branches for all changes
- Push changes frequently
- Notify team members about your current tasks
- You are responsible for fixing merge conflicts in your branches

## Code Comments

- Write self-documenting code
- Avoid unnecessary comments that explain what the code does
- Only use comments for:
  - Documentation (JSDoc)
  - Complex business logic explanation
  - TODO markers
  - Legal requirements

## Package Management

- Do not add unnecessary packages
- Consult team before adding new packages
- Document package purpose in PR description
- Keep dependencies updated
- Remove unused packages

## Styling Guidelines

- Avoid custom CSS where possible
- Preferred styling approaches:
  1. shadcn/ui built-in styles
  2. Tailwind CSS utilities
  3. Inline styles (when necessary)
  4. Styled-components (if required)
- Maintain consistent spacing and layout patterns

## Collaboration Best Practices

- Push your changes regularly
- Communicate your work scope
- Review others' PRs promptly
- Keep PRs focused and small
- Write meaningful PR descriptions
- Update documentation when needed

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a new branch: `git checkout -b feature/your-feature`
4. Make your changes following the guidelines above
5. Push your changes: `git push origin feature/your-feature`
6. Create a Pull Request

## Note

Husky will be set up to automate:

- Commit message formatting
- Pre-commit linting
- Type checking
- Branch protection
