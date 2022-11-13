class inventoryPage  {
    elements =  {
        sauceLabsBackpackAddToCartBtn : () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cartLink : () => cy.get('.shopping_cart_link')
    }

    addToCartSauceLabsBackpack()   {
        this.elements.sauceLabsBackpackAddToCartBtn().click()
    }

    cartPageAccess()    {
        this.elements.cartLink().click()
    }
}

module.exports = new inventoryPage()