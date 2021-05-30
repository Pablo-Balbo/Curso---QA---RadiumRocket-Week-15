const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutStepOnePage = require('../../pageobjects/checkoutStepOne.page');
const CheckoutStepTwoPage = require('../../pageobjects/checkoutStepTwo.page');
const CheckoutCompletePage = require('../../pageobjects/checkoutComplete.page');

describe('Checkout complete page tests', () => {
    it('Check title text', () => {
        goCheckoutComplete();
    
        expect(CheckoutCompletePage.checkoutMsg.getText()).toBe('CHECKOUT: COMPLETE!');
    });

   it('Check thanks message, text and poster', () => {
        goCheckoutComplete();

        expect(CheckoutCompletePage.thanksMsg.getText()).toBe('THANK YOU FOR YOUR ORDER');
        expect(CheckoutCompletePage.completeText.getText()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        expect(CheckoutCompletePage.poster.isExisting()).toBe(true);
    });

    it('Check Back Home button', () => {
        goCheckoutComplete();

        expect(CheckoutCompletePage.backHomeBtn.getText()).toBe('BACK HOME');
        expect(CheckoutCompletePage.backHomeBtn.isClickable()).toBe(true);
    });
});

// Auxiliar function
const goCheckoutComplete = () => {
    browser.reloadSession();
    LoginPage.open();
    LoginPage.standardUserLogin();
    InventoryPage.shoppingCart.click();
    CartPage.checkout.click();
    CheckoutStepOnePage.addValidFormData();
    CheckoutStepOnePage.continueBtn.click();
    CheckoutStepTwoPage.finishBtn.click();
}