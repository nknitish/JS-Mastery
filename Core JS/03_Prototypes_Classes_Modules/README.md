# Prototypes, Classes & Modules

What is it?

- Overview of prototype chain, constructor functions, `class` syntax, and JS modules (ESM/CJS).

Why it matters

- Prototypes and classes drive inheritance and object shape; modules enable code organization and scope control.

Examples included

- `01_exports/module-a.mjs` — demonstrates named and default ESM exports
- `01_exports/module-b.mjs` — imports and uses the exports
- `02_module_scope/module-scope.mjs` — demonstrates module scope vs global scope

Interview Q&A (short)

- Q: What is the difference between prototype-based inheritance and class syntax?
  A: `class` is syntactic sugar over prototype-based inheritance; `class` defines a constructor and sets up the prototype chain under the hood.

- Q: Named vs default export?
  A: Named exports export one or more named bindings; default export exposes a single default value. Import syntax differs: `import {x} from './a'` vs `import def from './a'`.

Files

- See `01_exports/module-a.mjs` and `01_exports/module-b.mjs` for quick runnable ES module examples.
