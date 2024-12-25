# Express.js Stack Overflow Error During Template Rendering

This repository demonstrates a common error in Express.js applications: stack overflow during template rendering.  The error arises from improper error handling within the rendering function, leading to infinite recursion or excessive resource consumption. 

## Bug Description

The provided `bug.js` file showcases an Express.js application that crashes due to a stack overflow. This happens because the `res.render` function is called without appropriate error handling, resulting in a recursive call leading to stack overflow. 

## Solution

The `bugSolution.js` file offers a corrected implementation.  The key change is the inclusion of error handling within the rendering process. This prevents the stack overflow and provides a more robust application. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js` to observe the stack overflow error.
5. Run `node bugSolution.js` to see the corrected implementation.

This example highlights the importance of comprehensive error handling in Express.js applications to prevent crashes and ensure application stability.