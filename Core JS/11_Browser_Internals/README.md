# Browser Internals

## What is it?
Browser Internals covers how the DOM, BOM, rendering pipeline, layout, repaint, and composite operations work.

## Why it matters
Front-end performance and UI correctness depend on understanding how browsers compute and paint page updates.

## Topics covered
- DOM and BOM
- rendering pipeline
- critical rendering path
- reflow vs repaint
- layout thrashing

## Interview questions and answers

### What is the difference between reflow and repaint?
Reflow recalculates element sizes and positions. Repaint redraws pixels without changing layout. Reflow is more expensive because it can affect the entire layout tree.

### Why does changing `width` trigger layout?
Changing layout-related properties like `width`, `height`, or `padding` forces the browser to recalculate geometry, which triggers reflow.

### Why are transforms usually faster than modifying `top` or `left`?
Transforms can often be handled by the compositor without triggering layout, while `top`/`left` modify layout state and may cause reflow.

### What is the critical rendering path?
The critical rendering path is the sequence of steps the browser takes to convert HTML/CSS/JS into pixels, including parsing, style resolution, layout, paint, and compositing.

### How does layout thrashing happen?
Layout thrashing happens when JavaScript repeatedly reads layout information after writing DOM styles, causing multiple forced reflows in a loop.

## Quick notes
- reflow recalculates geometry and layout.
- repaint redraws pixels without recalculating layout.
- composite merges layers into the final image.
- avoid forcing synchronous layout inside loops.
