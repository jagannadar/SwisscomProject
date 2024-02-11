import BasePage from "./basePage";

class HomePage extends BasePage {

    constructor() {
        super('/residential.html')
    }

    homePageElements = {
        deviceNavigationBar: () => cy.contains('Devices'),
        accessories: () => cy.contains('Accessories'),
        headphones: () => cy.contains('Headphones')
    }

    verifyPageUrl(): this {
        cy.url().should('contain', this.url);
        return this;
    }
    
    selectDeviceNavigationBar(): this {
        this.homePageElements.deviceNavigationBar()
            .click();
        return this;
    }
    
    selectAccessories(): this {
        this.homePageElements.accessories()
            .click();
        return this;
    }

    selectHeadphones(): this {
        this.homePageElements.headphones()
            .click();
        return this;
    }

}

export default new HomePage();