// Sample Web API usage patterns.

// IntersectionObserver example
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Visible:', entry.target);
    }
  });
});

// TODO: call observer.observe(element) in actual browser usage.

// MutationObserver example
const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log('DOM changed:', mutation.type, mutation.addedNodes.length, 'nodes added');
  });
});

// TODO: call mutationObserver.observe(targetNode, { childList: true, subtree: true }) in browser.

// BroadcastChannel example
const channel = new BroadcastChannel('app-channel');
channel.onmessage = (event) => {
  console.log('Broadcast message received:', event.data);
};
channel.postMessage({ type: 'sync', payload: { value: 42 } });

// Web Worker example comment
// const worker = new Worker('worker.js');
// worker.postMessage({ task: 'heavy' });

console.log('Web API samples provide browser patterns for observers, channels, and workers.');
