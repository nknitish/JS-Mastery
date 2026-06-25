// Simple security helpers for frontend applications.

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeInsertText(element, text) {
  element.textContent = text;
}

function unsafeInsertHTML(element, html) {
  element.innerHTML = html; // vulnerable to XSS if html is untrusted
}

// Example usage:
const userComment = '<img src=x onerror=alert(1)> Nice post!';
const container = { textContent: '', innerHTML: '' };

safeInsertText(container, userComment);
console.log('Safe text content:', container.textContent);

const escaped = escapeHTML(userComment);
unsafeInsertHTML(container, escaped);
console.log('Escaped HTML content:', container.innerHTML);

// Cookie security example
function createSecureCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Secure; SameSite=Strict; Path=/`;
}

console.log('Example cookie string:', 'name=value; Secure; SameSite=Strict; Path=/');

// Content Security Policy note:
// A header like `Content-Security-Policy: default-src 'self'; script-src 'self'` restricts loaded code to the same origin.
