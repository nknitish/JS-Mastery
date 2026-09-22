# How the Web Works

This folder explains how a web page actually works from the moment a user enters a URL to the moment the page becomes visible and interactive.

## Big picture

A modern web request passes through several layers:

1. Browser layer
2. Network layer
3. HTTP / HTTPS protocol layer
4. Server layer
5. Application / framework layer
6. Rendering and browser engine layer
7. JavaScript execution layer
8. Paint / composite / GPU layer

Understanding these layers helps you reason about performance, debugging, caching, security, and optimization.

## 1) Browser request flow

When you type a URL in the browser:

1. Browser parses the URL
2. It resolves the domain using DNS
3. It creates a TCP connection (or TLS connection for HTTPS)
4. It sends an HTTP request
5. Server processes the request
6. Server sends back a response (HTML, CSS, JS, assets)
7. Browser parses the response
8. Browser builds the DOM and CSSOM
9. JavaScript runs
10. Layout, paint, and compositing happen

## 2) DNS lookup

DNS stands for Domain Name System.

A human-friendly URL like:

```text
https://example.com
```

is translated into an IP address like:

```text
93.184.216.34
```

The browser asks a DNS server: “Which IP belongs to this domain?”

This step is important because the user sees a domain name, but the network works with IP addresses.

## 3) TCP / TLS handshake

### HTTP

HTTP sends requests and responses without encryption.

### HTTPS

HTTPS adds TLS/SSL encryption between browser and server.

The HTTPS flow usually includes:

1. TCP connection
2. TLS handshake
3. encrypted HTTP request
4. encrypted HTTP response

This protects data such as passwords, tokens, and user input from being read in transit.

## 4) HTTP request

An HTTP request includes:

- method: GET, POST, PUT, DELETE, PATCH
- URL
- headers
- sometimes a request body

Example request:

```http
GET /products HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

### Main HTTP methods

- GET: fetch data
- POST: send data to create something
- PUT: replace or update resource
- PATCH: partial update
- DELETE: remove resource

## 5) HTTP response

A server responds with:

- status code
- headers
- body

Example:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 12345

<html>...</html>
```

### Common status codes

- 200 OK: success
- 201 Created: resource created
- 301/302: redirect
- 400 Bad Request: invalid request
- 401 Unauthorized: login needed
- 403 Forbidden: access denied
- 404 Not Found: resource missing
- 500 Internal Server Error: server failed

## 6) Client-to-server path in detail

The full request path may look like this:

```text
User -> Browser -> OS network stack -> Router -> ISP -> Internet -> Server
```

Then server side:

```text
Load balancer -> Web server -> Application server -> Database -> Response back
```

In a real deployment, requests often pass through:

- CDN
- load balancer
- reverse proxy
- app server
- caching layer
- database

## 7) HTML, CSS, JS loading

Once the browser receives the initial HTML document, it starts parsing it.

### HTML parsing

The browser builds the DOM tree from HTML.

### CSS parsing

The browser reads CSS and builds the CSSOM tree.

### JS loading

If the script is encountered in the HTML:

- blocking scripts pause parsing by default
- async scripts download in parallel and execute as soon as ready
- defer scripts download in parallel and execute after parsing completes in order

## 8) Script loading modes

### Normal script

```html
<script src="app.js"></script>
```

- blocking
- HTML parsing pauses
- script executes immediately when encountered

### Async script

```html
<script src="app.js" async></script>
```

- downloads in parallel
- executes as soon as available
- may run before the rest of the document finishes parsing
- order is not guaranteed

### Defer script

```html
<script src="app.js" defer></script>
```

- downloads in parallel
- waits until HTML parsing is complete
- executes in order
- best for scripts that depend on DOM being ready

## 9) DOM and CSSOM

DOM = Document Object Model

CSSOM = CSS Object Model

The browser combines them to create a render tree.

Render tree contains only the visible nodes and their computed styles.

## 10) Layout, paint, and composite

### Layout (reflow)

The browser determines where each element appears on the screen.

This includes:

- width/height
- position
- margins
- padding
- flow of elements

### Paint

The browser paints pixels for the visible parts of the page.

This is often called rasterization.

### Composite

The browser combines different layers and draws them efficiently to the screen.

This is done by the GPU and compositor for performance.

## 11) Reflow and repaint

### Reflow

A reflow happens when layout changes. Examples:

- width changes
- text size changes
- DOM structure changes
- fonts load late

### Repaint

A repaint happens when visual styles change but layout does not change. Examples:

- color change
- background change
- box-shadow change

### High cost operations

These are expensive because they trigger layout or repaint:

- reading layout while modifying DOM repeatedly
- large DOM mutations
- changing styles in loops
- forcing layout by reading `offsetWidth` after writes

## 12) Browser rendering pipeline

The browser pipeline is roughly:

```text
HTML -> DOM -> CSS -> CSSOM -> Render Tree -> Layout -> Paint -> Composite -> Screen
```

This pipeline is optimized to keep frames smooth and responsive.

## 13) JavaScript execution and event loop

JavaScript is single-threaded in the main thread, but it cooperates with the browser event loop.

The browser handles:

- user events
- network callbacks
- timers
- rendering

In practice, JS runs in chunks. Rendering and script execution alternate.

That is why:

- long JS execution blocks rendering
- `setTimeout` and promises do not run exactly at the scheduled time; they wait for the event loop
- async code helps avoid blocking the main thread

## 14) Why async matters

If JavaScript performs heavy work synchronously, the browser cannot render the page until the work finishes.

Async patterns help:

- timers
- promises
- fetch
- event listeners
- workers

This keeps the UI responsive.

## 15) HTTP vs HTTPS

### HTTP

- plain text
- no encryption
- not secure for sensitive data
- usually port 80

### HTTPS

- encrypted using TLS
- safer for passwords, credit cards, tokens
- usually port 443
- required for secure web apps and modern best practices

### Why HTTPS matters

- protects data in transit
- prevents tampering
- helps with trust and browser security requirements

## 16) Layers of the web stack

The web stack often has these layers:

### Presentation layer

- HTML
- CSS
- browser rendering

### Application layer

- JavaScript
- framework logic
- client-side state

### Network layer

- DNS
- TCP/TLS
- HTTP/HTTPS

### Server layer

- web server
- backend APIs
- database access

### Infra layer

- CDN
- reverse proxy
- cache
- load balancer
- deployment environment

## 17) Real example

When you visit a page:

1. browser resolves the domain
2. opens a connection
3. sends an HTTP GET request
4. server responds with HTML
5. browser parses DOM
6. browser downloads CSS and JS files
7. browser builds CSSOM and DOM
8. JS runs and attaches events
9. layout occurs
10. browser paints pixels
11. page becomes interactive

## 18) Interview-style answer

### How does a request go from client to server?

The browser resolves the DNS, completes a TCP/TLS handshake, sends an HTTP request, the server handles it, and returns an HTTP response. The browser then parses the HTML, CSS, and JavaScript and renders the page.

### What is the difference between HTTP and HTTPS?

HTTP is plain and unencrypted. HTTPS adds TLS encryption for secure communication.

### What happens during page render?

The browser builds the DOM and CSSOM, creates the render tree, computes layout, paints pixels, and composites layers.

### Why are async and defer important?

They prevent blocking the parser and allow scripts to load without delaying the page too much.

## 19) Summary

The web is a layered system:

- URL resolution
- network path
- HTTP / HTTPS communication
- server processing
- browser parsing
- DOM and CSSOM construction
- script execution
- layout, paint, and composite

Understanding this helps with debugging performance, security, rendering issues, and network behavior.
