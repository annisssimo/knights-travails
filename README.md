# Knight's Moves

This project implements a function `knightMoves` that calculates the shortest path a knight can take on a standard 8x8 chessboard from a given start position to a target position. The function uses the Breadth-First Search (BFS) algorithm to find the shortest path, and outputs the sequence of moves that the knight will take.

## Table of Contents

- [Knight's Moves](#knights-moves)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Example:](#example)

## Project Overview

The knight is a unique chess piece that moves in an "L" shape: two squares in one direction and one square in a perpendicular direction. This project calculates the shortest path for a knight to move from one square to another on a chessboard, ensuring that it adheres to the movement rules of the knight and stays within the boundaries of the board.

## Features

- Calculates the shortest path for a knight to move from a start position to a target position.
- Outputs the sequence of moves the knight takes to reach the target.
- Uses the BFS algorithm to ensure the shortest path is found.
- Handles edge cases, such as when the start and target positions are the same.

## Getting Started

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/annisssimo/knights-travails.git
    ```

2. Navigate to the project directory:

    
    ```bash
    cd knights-travails
    ```

3. Open `index.html` in your web browser to see the knight's moves in action, or include the `knightMoves.js` script in your own project.

## Usage

To use the `knightMoves` function, simply call it with two arguments: the starting position and the target position, both represented as arrays of `[x, y]` coordinates.

### Example:

```javascript
knightMoves([0, 0], [7, 7]);
```
