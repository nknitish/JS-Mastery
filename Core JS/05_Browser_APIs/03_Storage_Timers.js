/*
=========================================
STORAGE AND TIMERS
=========================================

This file demonstrates localStorage, sessionStorage, setTimeout, setInterval, and requestAnimationFrame.
*/

const clock = document.createElement('div');
clock.id = 'clock';
document.body.appendChild(clock);

function updateClock() {
  const now = new Date().toLocaleTimeString();
  clock.textContent = now;
}

const interval = setInterval(updateClock, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log('clock stopped');
}, 5000);

localStorage.setItem('theme', 'dark');
console.log('theme', localStorage.getItem('theme'));

sessionStorage.setItem('sessionId', 'abc123');
console.log('sessionId', sessionStorage.getItem('sessionId'));

/*
Explanation:
- `localStorage` persists across browser sessions.
- `sessionStorage` persists only for the current tab.
- `setInterval` repeats a callback until cleared.
- `setTimeout` runs once after a delay.
*/