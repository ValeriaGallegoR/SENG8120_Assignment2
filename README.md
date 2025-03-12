# SENG8120 Modern Automated Testing 
## Assignment 2

### Purpose

This repository has the purpose of creating Test coverage for:

- Calculate the canvas size

- Calculate the amount of paint needed for a surface

### Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

### Test Coverage

- paintRequiredCalculator tests:
  
  - Should returns correct:
    
    - Values are correct
      
    - Area is zero
    
    - Coverage per liter is zero
   
  - Should throw an error message:
    
    - Coverage per liter is zero
      
    - Area is negative
    
    - Coverage per liter is negative
 
- calculateCanvasSize tests:

  - Should returns correct:
    
    - Values are correct
      
    - Length is zero
    
    - Width is zero
   
  - Should throw an error message:
    
    - Length is negative
      
    - Width is negative