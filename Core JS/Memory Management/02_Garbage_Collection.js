/*
=========================================
GARBAGE COLLECTION
=========================================

JavaScript engines automatically reclaim heap memory that is no longer reachable from the root set.
Most engines use a mark-and-sweep algorithm.

This file explains reachability and why unreachable objects are collected.

=========================================
*/

function garbageCollectionExample() {
  const root = { name: 'root' };
  const child = { parent: root };
  root.child = child;

  // `root` is reachable from the stack, so both objects are reachable.
  console.log(root.child.name); // root

  // remove the stack reference to root
  return root;
}

const persistent = garbageCollectionExample();

/*
Explanation:
- `root` stays reachable because `persistent` holds it.
- The object graph rooted at `root` is also reachable.
- If `persistent` were set to null, the graph becomes unreachable and is eligible for GC.
*/

function createLeak() {
  const data = { huge: new Array(100000).fill('leak') };

  return function () {
    console.log(data.huge.length);
  };
}

const leaky = createLeak();
// `data` remains reachable through the closure even after createLeak returns.

setTimeout(() => {
  // later, if we no longer need `leaky`, set it null to allow cleanup.
  // leaky = null; // avoid leak when closure lifetime is over
}, 1000);
