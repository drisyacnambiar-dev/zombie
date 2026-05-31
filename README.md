# Zombie Simulation

## Overview

This application simulates the spread of a zombie infection across an N x N grid.

A zombie moves according to a predefined movement sequence. Whenever a zombie lands on a square occupied by a creature, that creature becomes a new zombie. Newly infected zombies perform the same movement sequence after the current zombie completes its movements. This process continues until all zombies have completed their movements.

The simulation logs:

* Zombie movements
* Infection events
* Final zombie positions
* Final creature positions

---

## Technology

* JavaScript (ES6)
* React (used as a simple interface to execute the simulation)
* No external libraries required for the simulation logic

---

## Project Structure

src/

* App.js
* Simulation/

  * grid.js
  * logger.js
  * parser.js
  * simulation.js

---

## How to Run

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open the application in the browser and click:

```text
Run Simulation
```

Simulation output can be viewed in the browser console.

---

## Input Format

The simulation expects:

1. Grid Size
2. Initial Zombie Position
3. Creature Positions
4. Movement Sequence

Example:

```text
4
(3,1)
(0,1)(1,2)(1,1)
RDRU
```

---

## Movement Rules

Valid movement directions:

* U = Up
* D = Down
* L = Left
* R = Right

Grid wrapping is supported.

Example:

```text
Moving left from (0,4) on a 10x10 grid
becomes
(9,4)
```

---

## Design Decisions

### 1. Separation of Responsibilities

The application is divided into several classes:

#### Grid

Responsible for:

* Grid boundaries
* Coordinate wrapping
* Movement calculations

#### Simulation

Responsible for:

* Zombie movement
* Infection processing
* Zombie queue management

#### Parser

Responsible for:

* Input parsing
* Validation
* Conversion of text input into structured data

#### Logger

Responsible for:

* Movement logs
* Infection logs
* Final simulation output

This separation makes the code easier to maintain, test, and extend.

---

### 2. Creature Lookup Optimization

Creatures are stored in a JavaScript Map using:

```text
x,y
```

as the key.

Example:

```text
1,2
```

This provides near constant-time lookup when checking whether a zombie has landed on a creature.

---

### 3. Zombie Processing Order

Newly infected zombies are added to the zombies array.

Example:

```javascript
this.zombies.push(...)
```

The simulation uses:

```javascript
for (let id = 0; id < this.zombies.length; id++)
```

which naturally processes newly infected zombies in the required infection order.

This avoids recursion and keeps the solution simple and scalable.

---

## Assumptions

* Grid size is always greater than zero.
* Creature coordinates are unique.
* Creatures never move.
* Zombies always use the same movement sequence.
* Input directions only contain U, D, L, and R.
* Coordinates supplied are within the grid boundaries.

---

## Testing

The following scenarios were tested:

### Movement

* Up
* Down
* Left
* Right

### Grid Wrapping

* Left edge to right edge
* Right edge to left edge
* Top edge to bottom edge
* Bottom edge to top edge

### Infection

* Single infection
* Multiple infections
* Infection order

### Validation

* Invalid coordinates
* Invalid directions
* Invalid grid size

---

## Highlight of the Solution

The strongest aspect of the solution is the zombie processing approach.

Instead of using recursion or maintaining multiple queues, newly infected zombies are simply appended to the zombies array. Because the simulation iterates until all zombies have been processed, newly infected zombies automatically move in the correct infection order.

This results in a simple, efficient, and easy-to-maintain implementation.

---

## AI Usage Disclosure

AI tools were used to:

* Review code quality
* Discuss design approaches
* Review edge cases
* Improve documentation

All code was reviewed, understood, and validated before inclusion in the final solution.

---

## Prompt History Summary

Examples of prompts used:

* Explain the zombie simulation requirements.
* Review the grid wrapping logic.
* Review the infection processing logic.
* Suggest improvements to code structure.
* Improve README documentation clarity.
* Review edge cases and assumptions.

AI assistance was used as a review and documentation aid rather than as a direct replacement for understanding or validating the implementation.
