class LoginPage {
    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('button[type="submit"]'),
        successMessage: () => cy.get('.flash.success'),
        errorMessage: () => cy.get('.flash.error'),
        pageTitle: () => cy.get('h2')
    }

    visit() {
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }
}

export default LoginPage