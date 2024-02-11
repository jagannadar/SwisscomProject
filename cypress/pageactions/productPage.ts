import BasePage from "./basePage";

class ProductPage extends BasePage {

    constructor() {
        super('/residential/products/headphones.html')
    }

    productPageElements = {
        brandDropdown: () => cy.get('[placeholder="Brand"]'),
        brandsList: () => cy.get('sdx-select-list.open'),
        availableProducts: () => cy.get('[data-cy="nls-ui-device-tile"]').find('[class="available-icon"]'),
        loadMore: () => cy.dataCy('button-load-more-devices'),
        productTitle: () => cy.get('h1.text-h2'),
        nextButton: () => cy.dataCy('progressive-step-next-button'),
        priceType: () => cy.dataCy('price-type-radio-input-monthly'),
        contractDuration: () => cy.dataCy('contract-duration-radio-input-24'),
        shoppingCartPopup: () => cy.dataCy('go-to-cart-button'),
        shoppingCartIcon: () => cy.get('[data-track-label="basket"]')
    }

    selectBrandDropdown(): this {
        this.productPageElements.brandDropdown().should('be.visible').click();
        return this;
    }

    selectFirstBrand(): this {
        cy.get('sdx-select-list.open').children().first().click();
        this.productPageElements.loadMore().scrollIntoView().should('be.visible');
        return this;
    }

    selectLastAvailableProduct(): this {
       this.productPageElements.availableProducts().last().click();
        return this;
    }

    getProductTitle(): this {
        this.productPageElements.productTitle().invoke('text').as('title')
        return this;
    }

    clickNextButton(): this {
        this.productPageElements.nextButton().click();
        return this;
    }

    selectPaymentMethods(): this {
        this.productPageElements.priceType().click();
        this.productPageElements.contractDuration().click();
        return this;
    }

    handleShoppingCartPopup(): this {
        this.productPageElements.shoppingCartPopup().click();
        return this;
    }

    clickShoppingCartIcon(): this {
        this.productPageElements.shoppingCartIcon().should('be.visible');
        return this;
    }

}

export default new ProductPage();