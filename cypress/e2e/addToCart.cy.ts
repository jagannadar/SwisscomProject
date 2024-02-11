import homePage from "../pageactions/homePage";
import productPage from "../pageactions/productPage";
import shoppingCartPage from "../pageactions/shoppingCartPage";

describe('shopping cart functionality', () => {
     beforeEach(()=>{
        homePage.visit()
            .acceptCookies();
    })

    after(()=>{
        cy.clearAllCookies;
        cy.clearAllSessionStorage;
    });

    it('selecting a product and adding it to the shopping cart', () => {
        homePage
            .selectDeviceNavigationBar()
            .selectAccessories()
            .selectHeadphones();

        productPage.selectBrandDropdown()
            .selectFirstBrand()
            .selectLastAvailableProduct()
            .getProductTitle()
            .clickNextButton()
            .selectPaymentMethods()
            .clickNextButton()
            .handleShoppingCartPopup()
            .clickShoppingCartIcon();

        shoppingCartPage.verifyPageUrl()
            .verifyProductTitle();
    
    });
    
});