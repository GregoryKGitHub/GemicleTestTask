import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import loginPage from "../pages/loginPage"
import inventoryPage from "../pages/inventoryPage"
import cartPage from "../pages/cartPage"

Given('I successfully browse to the application', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('I input username {string}', userName => {
    loginPage.setUserName(userName)
})

When('I input password {string}', password => {
    loginPage.setPassword(password)
})

When('I try to login', () => {
    loginPage.clickLoginButton()
})

Then('I receive error message that starts from {string}', filterText => {
    loginPage.getErrorMessage().should('contain', filterText)
})

Then('I redirect to inventory page', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

Given('I successfully logged in the application', () => {
    let userName = "standard_user"
    let password = "secret_sauce"
    cy.visit('https://www.saucedemo.com/')
    loginPage.setUserName(userName)
    loginPage.setPassword(password)
    loginPage.clickLoginButton()
})

When('I add to cart Sauce Labs Backpack', () => {
    inventoryPage.addToCartSauceLabsBackpack()
})

When('I redirect to cart page', () => {
    inventoryPage.cartPageAccess()
})

Then('I see Sauce Labs Backpack at this page', () => {
    cartPage.getInventoryItemName().should('contain.text', 'Sauce Labs Backpack')
})

Given('I added Sauce Labs Backpack to the cart', () => {
    inventoryPage.addToCartSauceLabsBackpack()
})

Given('I redirected to cart page', () => {
    inventoryPage.cartPageAccess()
})

When('I remove Sauce Labs Backpack', () => {
    cartPage.removeSauceLabsBackpack()
})

Then('the cart is empty', () => {
    cartPage.getInventoryItemName().should('not.exist')
})