# HTTP and HTTPS

This note explains the protocols that power the web.

## HTTP

HTTP means HyperText Transfer Protocol.

It is the plain protocol used for communication between browser and server.

### Pros

- simple
- widely supported
- easy to debug

### Cons

- no encryption
- data can be intercepted or modified
- not suitable for sensitive information

## HTTPS

HTTPS means HyperText Transfer Protocol Secure.

It uses TLS/SSL encryption so the browser and server communicate securely.

### Why encrypted traffic matters

HTTPS protects:

- passwords
- tokens
- payment data
- private user info
- cookies and session data

## Connection flow

### HTTP

```text
Browser -> Server
Request -> Response
```

### HTTPS

```text
Browser -> TLS handshake -> Server
Request (encrypted) -> Response (encrypted)
```

## Common HTTP methods

- GET
- POST
- PUT
- PATCH
- DELETE

## Common status codes

- 200: OK
- 201: Created
- 301: Moved Permanently
- 302: Found
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Why HTTPS is standard now

Modern browsers and services expect HTTPS for:

- secure login flows
- APIs
- cookies
- payment and user data

## Summary

HTTP is the base protocol of the web, but HTTPS is the secure version used in real production apps.
