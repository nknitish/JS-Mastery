/*
=========================================
CUSTOM ERROR HANDLING
=========================================

Demonstrates custom error classes, try/catch, and async error handling.
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email format");
  }
  return true;
}

try {
  validateEmail("invalid-email");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("validation failed:", err.message);
  } else {
    throw err;
  }
} finally {
  console.log("validation attempt complete");
}

/*
Explanation:
- `ValidationError` extends the built-in Error type.
- `try/catch/finally` handles synchronous errors and cleanup.
- async errors are managed with `try/catch` around `await`.
*/
