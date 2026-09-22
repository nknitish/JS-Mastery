// npm scripts are commands defined in package.json.
// They standardize common tasks like starting the app, building it, testing it,
// and linting the codebase for a project.

// Example package.json structure:
// {
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview",
//     "test": "vitest",
//     "lint": "eslint .",
//     "format": "prettier --write ."
//   }
// }

// Common commands:
// npm install         -> installs dependencies
// npm run dev         -> starts development server
// npm run build       -> creates production output
// npm run preview     -> previews built app locally
// npm test            -> runs tests
// npm run lint        -> checks lint rules

if (typeof process !== "undefined") {
  const script = process.argv[2];

  if (script === "dev") {
    console.log("Starting development server...");
  }

  if (script === "build") {
    console.log("Creating production bundle...");
  }

  if (script === "test") {
    console.log("Running project tests...");
  }

  if (script === "lint") {
    console.log("Checking code quality...");
  }
}

// Why npm scripts matter:
// - everyone runs the same commands
// - easier onboarding for developers
// - no need to remember long CLI commands
// - scripts can call bundlers, test tools, linters, and deployment steps

// Typical workflow:
// 1. npm install
// 2. npm run dev
// 3. make changes
// 4. npm run build
// 5. npm test

console.log(
  "NPM scripts example file — see README and 03_Npm_Scripts.md for more details.",
);
