import BasePage from "./basePage";

class ShoppingCartPage extends BasePage{

    constructor() {
        super('/residential/cart.html')
    }

    shoppingCartElements = {
        productTitle: () => cy.get('[data-cy="product-name"]')
    }

    verifyPageUrl(): this {
        cy.url().should('contain', this.url);
        return this;
    }

    verifyProductTitle(): this {
        this.shoppingCartElements.productTitle().should('be.visible').then(function($productname){
            const productname = $productname.text();
            expect(productname).to.be.equal(this.title);
    })
        return this;
    }

}

export default new ShoppingCartPage();