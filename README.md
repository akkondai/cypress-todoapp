# Cypress Test Automation

This repository contains automated tests using [Cypress](https://www.cypress.io/) for the [ToDoApp](https://todomvc.com/examples/react/dist/). Follow the steps below to set up and run the tests.

## Prerequisites

Before running the tests, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v20.x or higher)
- [npm](https://www.npmjs.com/get-npm) (v10.x or higher)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/akkondai/cypress-todoapp.git
   cd cypress-todoapp
   ```

2. **Install dependencies using npm**:

   ```bash
   npm install
   ```

## Running Tests

### Running Tests in Cypress UI Mode

To run the tests interactively in the Cypress Test Runner:

```bash
npm run cy:open
```

This command opens the Cypress Test Runner, where you can select the configured E2E Testing and run test files on different browsers (electron, chrome, etc).

### Running Tests in Headless Mode

To run all tests in headless mode (without opening the Cypress Test Runner):

```bash
npm run cy:run
```

By default, this command runs the tests in the Electron browser. You can run the tests on chrome browser if needed:

- **Headless Chrome**:

  ```bash
  npm run cy:run:chrome
  ```

### Running Specific Tests

To run a specific test file, use the following command:

```bash
npm run cy:run --spec cypress/e2e/todoapp.cy.ts
```


## Test Structure

- **cypress/e2e/**: Contains the test files (Currently I implemented all the three tests in a single file, but ideally we would split these tests into different files based on the functionality that is being tested).
- **cypress/fixtures/**: Contains test data in JSON format (Not applicable for current tests).
- **cypress/support/**: Contains custom commands and configuration overrides (Not applicable for current tests).