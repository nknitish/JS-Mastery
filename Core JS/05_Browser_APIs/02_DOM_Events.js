/*
=========================================
DOM SELECTION AND EVENTS
=========================================

This file demonstrates DOM querying, modifying elements, event handling, and delegation.
*/

const container = document.createElement('div');
container.id = 'container';
container.innerHTML = `
  <button class="item">Item 1</button>
  <button class="item">Item 2</button>
`;
document.body.appendChild(container);

container.addEventListener('click', (event) => {
  if (event.target.matches('.item')) {
    event.preventDefault();
    console.log('clicked', event.target.textContent);
  }
});

const newButton = document.createElement('button');
newButton.textContent = 'Item 3';
newButton.className = 'item';
container.appendChild(newButton);

/*
Explanation:
- `querySelector` and `matches` are used to select and filter elements.
- Event delegation attaches one listener to the parent container.
- The handler detects clicks on dynamically added buttons too.
- `preventDefault` prevents default browser behavior if needed.
*/