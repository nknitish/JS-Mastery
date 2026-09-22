// Custom DOM event sample for decoupled communication.

function emitCustomEvent(target, eventName, detail) {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    cancelable: true,
  });

  target.dispatchEvent(event);
}

const target = document.createElement("div");

target.addEventListener("user:update", (event) => {
  console.log("Custom event received:", event.detail);
});

emitCustomEvent(target, "user:update", { id: 1, status: "active" });

// Event bubbling with custom events
const parent = document.createElement("div");
const child = document.createElement("button");

parent.appendChild(child);
document.body.appendChild(parent);

parent.addEventListener("user:update", (event) => {
  console.log("parent caught custom event:", event.detail);
});

child.addEventListener("click", () => {
  emitCustomEvent(child, "user:update", { id: 99, status: "clicked" });
});

// Uncomment to trigger manually:
// child.click();

// Notes:
// - Custom events help communicate changes between components.
// - Use bubbles: true when you want the event to travel upward.
// - Use cancelable: true when the event should be preventable.
// - Use event.detail to pass custom payload data.
