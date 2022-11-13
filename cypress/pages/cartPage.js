class cartPage  {
    elements = {
        inventoryItemName : () => cy.get('.inventory_item_name'),
        sauceLabsBackpackRemoveBtn : () => cy.get('#remove-sauce-labs-backpack'),
    }

    getInventoryItemName()  {
        return this.elements.inventoryItemName()
    }

    removeSauceLabsBackpack()   {
        this.elements.sauceLabsBackpackRemoveBtn().click()
    }
}

module.exports = new cartPage()