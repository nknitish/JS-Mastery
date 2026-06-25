// module-scope.mjs — demonstrates differences between module scope and global scope

console.log('top-level this === undefined?', this === undefined);

var declaredVar = 'I am var';
console.log('declaredVar on globalThis?', globalThis.declaredVar === undefined);

// assign to globalThis explicitly
globalThis.explicitGlobal = 'exists';
console.log('explicitGlobal on globalThis:', globalThis.explicitGlobal);

// show that module file does not pollute global automatically with block/var declarations
console.log('globalThis.declaredVar (should be undefined in ESM):', globalThis.declaredVar);
console.log('local declaredVar value:', declaredVar);

// note: to run as a module use node with .mjs extension or package.json {"type":"module"}
