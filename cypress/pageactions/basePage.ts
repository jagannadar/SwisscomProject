abstract class BasePage{

    constructor(readonly url: string) {}

    visit(): this {
        cy.visit(this.url);
        return this;
    }
    basePageElements = {
        cookiespopup: () => cy.get('.ot-sdk-container'),
        acceptCookie: () => cy.get('#onetrust-accept-btn-handler')
    }
    
    acceptCookies(): this {
        this.basePageElements.cookiespopup().should('be.visible').within(() => {
            this.basePageElements.acceptCookie().click();
        });
        return this;
    }
}

export default BasePage;