# NPM Scripts

NPM scripts are commands defined in the `package.json` file. They are used to automate usual project tasks such as starting the app, building production output, running tests, or linting code.

## Why npm scripts matter

They help developers follow a consistent workflow across a project.

Examples:

- `npm run dev` to start the app locally
- `npm run build` to create a production bundle
- `npm test` to execute tests
- `npm run lint` to run lint checks

## Example package.json

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint ."
  }
}
```

## Common script commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production output

```bash
npm run preview
```

### Run tests

```bash
npm test
```

### Run linting

```bash
npm run lint
```

## Why this is important

NPM scripts centralize common commands so developers do not need to remember long CLI commands. They also make automation easy and standard across teams.

## Typical workflow

```bash
npm install
npm run dev
# edit files
npm run build
npm test
```

## Interview answer

NPM scripts are user-defined commands in `package.json` that automate tasks like development, testing, building, and linting. They standardize the project workflow and simplify developer experience.

## Summary

NPM scripts are a basic but essential part of tooling. They help connect your project to bundlers, test tools, linting tools, and deployment commands in a single, maintainable setup.
