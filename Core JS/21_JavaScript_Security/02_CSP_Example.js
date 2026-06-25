// Content Security Policy (CSP) example strings and safe DOM insertion

// Example CSP header value (to be sent from server):
const cspHeader = "default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self';";
console.log('CSP header example:', cspHeader);

// Safe insertion: prefer textContent over innerHTML for untrusted content
function safeInsert(container, userInput) {
  container.textContent = userInput; // prevents XSS
}

// If you must use HTML, sanitize or use a trusted template mechanism.

// Example server-side header (Express.js):
// res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self';");

console.log('CSP and safe insertion examples added.');
