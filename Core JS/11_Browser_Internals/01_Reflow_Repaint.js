/*
=========================================
REFLOW VS REPAINT
=========================================

This file demonstrates operations that trigger layout and paint.

=========================================
*/

const box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.background = 'lightblue';
box.textContent = 'box';
document.body.appendChild(box);

// Trigger a reflow by reading layout information.
console.log('width', box.offsetWidth);

// Trigger a repaint by changing color only.
box.style.background = 'lightgreen';

/*
Explanation:
- `offsetWidth` forces the browser to calculate layout before continuing.
- reading layout values after changing styles can cause a forced synchronous reflow.
- changing `background` triggers repaint but not reflow.
*/