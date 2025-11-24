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

### Running only Part 3: API Testing Task tests: 
```bash
npx cypress run --spec "**/API-testing.*"
```

### Open Cypress Test Runner:
```bash
npx cypress open
```


    
