import LoginPage from '../pages/loginPage'

describe('Login Functionality Tests', () => {
    const loginPage = new LoginPage()
    
    beforeEach(() => {
        loginPage.visit()
    })

    // Valid login
    it('should login successfully with valid credentials', () => {
        loginPage.login('tomsmith', 'SuperSecretPassword!')
        
        // assert success message
        loginPage.elements.successMessage()
            .should('be.visible')
            .and('contain', 'You logged into a secure area!')
        
        // assert URL redirection
        cy.url().should('include', '/secure')
        
        // assert page content
        loginPage.elements.pageTitle().should('contain', 'Secure Area')
    })

    // Invalid username
    it('should show error for invalid username', () => {
        loginPage.login('invaliduser', 'SuperSecretPassword!')
        
        // assert error message
        loginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
        
        // assert URL remains
        cy.url().should('include', '/login')
    })

    // Invalid password
    it('should show error for invalid password', () => {
        loginPage.login('tomsmith', 'wrongpassword')
        
        // assert error message
        loginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Your password is invalid!')
        
        // assert URL remains the same
        cy.url().should('include', '/login')
    })

    // Missing username and/or password
    it('should show error for missing credentials', () => {
        loginPage.clickLogin()
        
        // assert error message
        loginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
    })

    it('should show error for missing username', () => {
        loginPage.typePassword('SuperSecretPassword!')
        loginPage.clickLogin()
        
        // assert error message
        loginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
    })

    it('should show error for missing password', () => {
        loginPage.typeUsername('tomsmith')
        loginPage.clickLogin()
        
        // assert error message
        loginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Your password is invalid!')
    })
})