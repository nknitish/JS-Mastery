class EventEmitter {
  constructor() {
    this.events = {}; // Stores event names as keys and arrays of listeners as values
  }

  // Register an event listener
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return this; // Allows chaining
  }

  // Register a one-time event listener
  once(eventName, listener) {
    const onceWrapper = (...args) => {
      this.off(eventName, onceWrapper); // Remove itself after the first call
      listener(...args); // Call the original listener
    };
    this.on(eventName, onceWrapper);
    return this;
  }

  // Emit an event, calling all registered listeners with arguments
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      // Call listeners synchronously in the order they were registered
      this.events[eventName].forEach((listener) => listener(...args));
    }
    return true; // Node.js returns true if event had listeners, false otherwise
  }

  // Remove a specific event listener
  off(eventName, listenerToRemove) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (listener) => listener !== listenerToRemove,
      );
    }
    return this; // Allows chaining
  }

  // Remove all listeners for a specific event
  removeAllListeners(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
    return this;
  }
}

const emitter = new EventEmitter();

function logData(data) {
  console.log(`Received: ${data}`);
}

function logOnce() {
  console.log("This will only be logged once.");
}

// Register listeners
emitter.on("data", logData);
emitter.once("data", logOnce);

// Emit events
emitter.emit("data", "Hello, world!");
// Output:
// This will only be logged once.
// Received: Hello, world!

emitter.emit("data", "Another message");
// Output:
// Received: Another message
// 'logOnce' listener is automatically removed after the first emit

// Remove a specific listener
emitter.off("data", logData);
emitter.emit("data", "Third message"); // No output
