const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutStepOnePage = require('../../pageobjects/checkoutStepOne.page');
const CheckoutStepTwoPage = require('../../pageobjects/checkoutStepTwo.page');
const CheckoutCompletePage = require('../../pageobjects/checkoutComplete.page');

describe('End to end test - Standard User', () => {
    it('Make a purchase end to end', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();
        CartPage.checkout.click();
        CheckoutStepOnePage.addValidFormData();
        CheckoutStepOnePage.continueBtn.click();
        CheckoutStepTwoPage.finishBtn.click();
        CheckoutCompletePage.backHomeBtn.click();

        expect(browser.getUrl()).toBe('https://www.saucedemo.com/inventory.html');
    });
});