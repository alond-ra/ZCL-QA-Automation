# QA Automation

## Tools & Libraries Used
- **Framework**: Cypress 12.0+
- **Programming Language**: JavaScript
- **Additional Libraries**: None (Cypress built-in features used)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm
- Browser Cypress compatible (such as Chrome or Firefox)

### Installation
1. Clone this project
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npx install
    ```

### Running Tests:

### Run all Tests (headless): 
```bash
npx cypress run
```

### Running only Part 1: Automation Script tests: 
```bash
npx cypress run --spec "**/login.*"
```
![Screenshot Part 1](screenshots\part1.png)

### Running only Part 3: API Testing Task tests: 
```bash
npx cypress run --spec "**/API-testing.*"
```
![Screenshot Part 3](screenshots\part3.png)

### Open Cypress Test Runner:
```bash
npx cypress open
```
![Screenshot Part 1](screenshots\testexec.gif)

- **Part 1 Tests:** `cypress/e2e/login.cy.js`
- **Part 2 Screenshots:** `cypress/screenshots/Part 2 Spot the Differences/Differences.pdf`
- **Part 3 Tests:** `cypress/e2e/API-testing.cy.js`

    
