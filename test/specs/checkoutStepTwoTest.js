const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutStepOnePage = require('../pageobjects/checkoutStepOne.page');
const CheckoutStepTwoPage = require('../pageobjects/checkoutStepTwo.page');

describe('Checkout step two page tests', () => {
    it('Check title text', () => {
        goOverview();
    
        expect(CheckoutStepTwoPage.checkoutMsg.getText()).toBe('CHECKOUT: OVERVIEW');
    });

    it('Check item´s list', () => {
        goOverview();

        expect(CheckoutStepTwoPage.cartItem.length).toBe(6);
    });

    it('Check summary info', () => {
        goOverview();

        expect(CheckoutStepTwoPage.summaryInfo.isExisting()).toBe(true);
        expect(CheckoutStepTwoPage.summaryInfoLabels[0].getText()).toBe('Payment Information:');
        expect(CheckoutStepTwoPage.summaryInfoLabels[1].getText()).toBe('Shipping Information:');
        expect(CheckoutStepTwoPage.summarySubtotalLabel.getText()).toContain('$129.94');
        expect(CheckoutStepTwoPage.summaryTaxLabel.getText()).toContain('$10.40');
        expect(CheckoutStepTwoPage.summaryTotalLabel.getText()).toContain('$140.34');
    });

    describe('Check buttons', () => {
        it('Check cancel button text', () => {
            goOverview();

            let cancelBtnText = CheckoutStepTwoPage.cancelBtn.getText();
            expect(cancelBtnText).toBe('CANCEL');
        });

        it('Check cancel button function', () => {
            goOverview();
            CheckoutStepTwoPage.cancelBtn.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/inventory.html');
        });

        it('Check finish button text', () => {
            goOverview();

            let finishBtnText = CheckoutStepTwoPage.finishBtn.getText();
            expect(finishBtnText).toBe('FINISH');
        });

        it('Check finish button function', () => {
            goOverview();
            CheckoutStepTwoPage.finishBtn.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-complete.html');
        });
    });
});

// Auxiliar function
const goOverview = () => {
    browser.reloadSession();
    LoginPage.open();
    LoginPage.standardUserLogin();
    InventoryPage.addAllItems();
    InventoryPage.shoppingCart.click();
    CartPage.checkout.click();
    CheckoutStepOnePage.addValidFormData();
    CheckoutStepOnePage.continueBtn.click();
}