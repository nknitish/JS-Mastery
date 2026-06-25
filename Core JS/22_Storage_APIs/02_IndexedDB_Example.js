// Minimal IndexedDB example: add and read an item
function openDB(name='exampleDB'){
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(name, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('items')) db.createObjectStore('items', { keyPath: 'id' });
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function addItem(item){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('items','readwrite');
    const store = tx.objectStore('items');
    const req = store.add(item);
    req.onsuccess = () => res(true);
    req.onerror = (e) => rej(e.target.error);
  });
}

async function getItem(id){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('items','readonly');
    const store = tx.objectStore('items');
    const req = store.get(id);
    req.onsuccess = () => res(req.result);
    req.onerror = (e) => rej(e.target.error);
  });
}

// Example usage (browser only):
// addItem({id:1, name:'Alice'}).then(()=>getItem(1)).then(console.log);
console.log('IndexedDB helper examples added (browser-only).');
