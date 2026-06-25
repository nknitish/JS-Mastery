# JavaScript Security

## What is it?
This folder covers frontend security topics like XSS, CSRF, CORS, cookies, and Content Security Policy.

## Why it matters
Security vulnerabilities are critical in web applications. Senior frontend engineers must understand attack vectors and mitigation strategies.

## Topics covered
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- CORS and same-origin policy
- cookies and SameSite
- Content Security Policy (CSP)

## Interview questions and answers

### What is XSS?
XSS is an attack where untrusted data is inserted into a page and executed as code. Prevent it by sanitizing input and using safe DOM methods.

### What is CSRF?
CSRF tricks a browser into sending requests on behalf of an authenticated user. Mitigate it with SameSite cookies, CSRF tokens, and requiring user interaction.

### What is CORS?
CORS is a browser mechanism that allows controlled cross-origin requests via server-provided headers. It does not provide security by itself, but it prevents unauthorized cross-origin access.

### How do cookies and SameSite work?
Cookies can be flagged with `SameSite=Strict` or `Lax` to limit when they are sent in cross-site requests. This helps reduce CSRF risk.

### What is CSP?
Content Security Policy defines allowed sources for scripts, styles, and other resources. It helps prevent XSS by blocking inline or unauthorized resources.

## Quick revision
- sanitize HTML and escape data before inserting into the DOM.
- use CSRF tokens or SameSite cookies to protect state-changing requests.
- CORS requires server headers like `Access-Control-Allow-Origin`.
- CSP is a strong browser-side defense against injection attacks.
