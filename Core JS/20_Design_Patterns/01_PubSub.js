/*
=========================================
PUB/SUB PATTERN
=========================================

This file implements a small event emitter for publisher-subscriber communication.
*/

function createPubSub() {
  const listeners = new Map();

  return {
    subscribe(event, fn) {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event).add(fn);
      return () => listeners.get(event).delete(fn);
    },
    publish(event, data) {
      const handlers = listeners.get(event);
      if (!handlers) return;
      handlers.forEach((fn) => fn(data));
    },
  };
}

const bus = createPubSub();
const unsubscribe = bus.subscribe("message", (data) => {
  console.log("received", data);
});

bus.publish("message", { text: "Hello" });
unsubscribe();
bus.publish("message", { text: "Ignored" });

/*
Explanation:
- `subscribe` registers a listener for an event.
- `publish` notifies all listeners of the event.
- returned unsubscribe function removes the listener.
*/
