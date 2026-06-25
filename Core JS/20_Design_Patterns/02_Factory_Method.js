// Factory pattern example for object creation.

function createLogger(level) {
  return {
    log(message) {
      console.log(`[${level}]`, message);
    }
  };
}

const infoLogger = createLogger('INFO');
infoLogger.log('This is a factory-created logger.');

// Notes:
// - Factory functions encapsulate object creation logic.
// - They are useful when configuration or initialization differs by instance.
