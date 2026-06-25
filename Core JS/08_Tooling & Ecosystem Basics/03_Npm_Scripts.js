// Example `package.json`-style npm scripts explained in JS comments
// This file shows common development scripts and what they do.

// Install dependencies: `npm install`
// Start dev server (e.g., using Vite): `npm run dev`
// Build for production: `npm run build`
// Run a simple node script:
if (typeof process !== 'undefined') {
  const script = process.argv[2];
  if (script === 'build') console.log('Building project (example)');
  if (script === 'dev') console.log('Starting dev server (example)');
}

// Example mapping of scripts (for README reference):
// {
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "start": "node dist/index.js",
//     "lint": "eslint src --fix",
//     "test": "vitest"
//   }
// }

console.log('NPM scripts example file — see README for bundler details.');
