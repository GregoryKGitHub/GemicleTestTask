class loginPage  {
    elements =  {
        loginField : () => cy.get('#user-name'),
        passwordField : () => cy.get('#password'),
        errorMsg : () => cy.get('h3[data-test="error"]'),
        loginBtn : () => cy.get('#login-button')
    }

    setUserName(userName)   {
        this.elements.loginField().type(userName)
    }

    setPassword(password)   {
        this.elements.passwordField().type(password)
    }

    getErrorMessage()   {
        return this.elements.errorMsg()
    }

    clickLoginButton()  {
        this.elements.loginBtn().click()
    }
}

module.exports = new loginPage()