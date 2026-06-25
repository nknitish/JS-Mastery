// Custom DOM event sample for decoupled communication.

function emitCustomEvent(target, eventName, detail) {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    cancelable: true,
  });
  target.dispatchEvent(event);
}

const target = document.createElement('div');
target.addEventListener('user:update', (event) => {
  console.log('Custom event received:', event.detail);
});

emitCustomEvent(target, 'user:update', { id: 1, status: 'active' });

// Notes:
// - Use custom events to publish state changes inside the DOM tree.
// - `bubbles` can propagate the event through ancestor nodes.
// - `cancelable` allows event listeners to call event.preventDefault().
