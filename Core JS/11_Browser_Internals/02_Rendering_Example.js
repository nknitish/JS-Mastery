// Browser rendering and layout example notes.

function measureElement(element) {
  // reading layout causes reflow if the page layout is dirty.
  return element.getBoundingClientRect();
}

function updateElement(element, width) {
  element.style.width = `${width}px`;
}

// Example sequence:
// 1. DOM writes via updateElement cause style changes.
// 2. A later call to measureElement forces layout.
// 3. The browser may perform reflow before returning measurement.

const exampleElement = {
  style: {},
  getBoundingClientRect() {
    return { width: 100, height: 50 };
  }
};

updateElement(exampleElement, 200);
console.log('Rendered size', measureElement(exampleElement));
console.log('Avoid repeated layout reads inside loops to prevent thrashing.');
