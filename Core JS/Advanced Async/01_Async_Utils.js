// Advanced async helpers: timeout, retry, concurrency limiter

function timeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Timeout')), ms);
    promise.then((v) => {
      clearTimeout(t);
      resolve(v);
    }, (e) => {
      clearTimeout(t);
      reject(e);
    });
  });
}

async function retry(fn, attempts = 3, delayMs = 200) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < attempts - 1) await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

function pLimit(concurrency) {
  const queue = [];
  let active = 0;
  const next = () => {
    if (queue.length === 0 || active >= concurrency) return;
    active++;
    const { fn, resolve, reject } = queue.shift();
    Promise.resolve()
      .then(fn)
      .then(resolve, reject)
      .finally(() => { active--; next(); });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject });
    next();
  });
}

// Example usage
(async () => {
  try {
    const r = await timeout(new Promise(res => setTimeout(() => res('ok'), 50)), 100);
    console.log('timeout result', r);
  } catch (e) {
    console.log('timeout error', e.message);
  }

  const unreliable = async () => {
    if (Math.random() < 0.7) throw new Error('fail');
    return 'success';
  };

  try {
    const value = await retry(unreliable, 5, 100);
    console.log('retry result', value);
  } catch (e) {
    console.log('retry failed', e.message);
  }

  const limit = pLimit(2);
  const tasks = Array.from({length:5}, (_,i)=>() => new Promise(res => setTimeout(()=>res(i), 100+i*10)));
  const results = await Promise.all(tasks.map(t=>limit(t)));
  console.log('pLimit results', results);
})();
