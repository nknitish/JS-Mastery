// Browser storage examples for common patterns.

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

function saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function loadFromSessionStorage(key) {
  const raw = sessionStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

// IndexedDB helper example
function openIndexedDB(dbName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('items')) {
        db.createObjectStore('items', { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

console.log('Storage examples created. Use these helpers in browser contexts.');
