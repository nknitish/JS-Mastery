# Request Lifecycle: Client to Server

This note explains the request path in a browser-based web application.

## Step 1: User enters a URL

The browser receives a URL such as:

```text
https://example.com/products
```

It parses the protocol, host, port, and path.

## Step 2: DNS resolution

The browser resolves the domain name to an IP address.

Example:

```text
example.com -> 93.184.216.34
```

This is done via DNS servers.

## Step 3: Connection setup

For HTTPS, the browser performs a TLS handshake before sending the request.

For HTTP, it creates a TCP connection directly.

## Step 4: HTTP request is sent

The browser sends a request like:

```http
GET /products HTTP/1.1
Host: example.com
Accept: text/html
```

The request includes headers and can include cookies and tokens.

## Step 5: Server processes the request

The server receives the request and performs logic such as:

- route matching
- reading route params
- validating inputs
- database lookup
- business logic execution
- response generation

## Step 6: Server returns a response

The server sends back an HTTP response including:

- status code
- headers
- body

Example:

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

## Step 7: Browser parses HTML

The browser reads the HTML and creates a DOM tree.

## Step 8: Browser downloads CSS and JS

While parsing, the browser may encounter:

- `<link rel="stylesheet">`
- `<script src="...">`

It fetches those files too.

## Step 9: Browser renders the page

After the DOM and CSSOM are ready, the browser creates a render tree and then calculates layout and paints pixels.

## Architecture view

```text
Client Browser
  -> DNS
  -> TCP/TLS
  -> HTTP request
  -> Server
  -> Response
  -> Parse HTML
  -> Build DOM + CSSOM
  -> JS execution
  -> Layout / Paint / Composite
```

## Summary

The key idea is: the browser does not magically “know” the server. It must resolve the host, connect over the network, send HTTP, receive a response, and then render the data.
