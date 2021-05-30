const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutStepOnePage = require('../../pageobjects/checkoutStepOne.page');

describe('Test checkout step one page', () => {
    it('Check title text', () => {
        goCheckoutForm();

        expect(CheckoutStepOnePage.checkoutMsg.getText()).toBe('CHECKOUT: YOUR INFORMATION');
    });
    
    describe('Checkout form', () => {
        it('Check checkout form with valid data', () => {
            goCheckoutForm();
            CheckoutStepOnePage.addValidFormData();
            CheckoutStepOnePage.continueBtn.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-two.html');
        });

        it('Check checkout form without first name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.noFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgText = CheckoutStepOnePage.errorMsgText.getText();
            expect(errorMsgText).toBe('Error: First Name is required');
        });

        it('Check checkout form with blank space for first name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.blankSpaceFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form with numbers for first name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.numbersFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form without last name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.noLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgText = CheckoutStepOnePage.errorMsgText.getText();
            expect(errorMsgText).toBe('Error: Last Name is required');
        });

        it('Check checkout form with blank space for last name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.blankSpaceLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form with numbers for last name', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.numbersLastName();
            CheckoutStepOnePage.validCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form without postal code', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.noCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgText = CheckoutStepOnePage.errorMsgText.getText();
            expect(errorMsgText).toBe('Error: Postal Code is required');
        });

        it('Check checkout form with blank space for postal code', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.blankSpaceCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form with letters for postal code', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.lettersCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });

        it('Check checkout form with letters and numbers for postal code', () => {
            goCheckoutForm();
            CheckoutStepOnePage.validFirstName();
            CheckoutStepOnePage.validLastName();
            CheckoutStepOnePage.lettersAndNumbersCode();
            CheckoutStepOnePage.continueBtn.click();

            let errorMsgExisting = CheckoutStepOnePage.errorMsgContainer.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Checkout buttons', () => {
        it('Check continue button text', () => {
            goCheckoutForm();

            let continueBtnValue = CheckoutStepOnePage.continueBtn.getValue();
            expect(continueBtnValue).toBe('Continue');
        });

        it('Check continue button function without data on form', () => {
            goCheckoutForm();
            CheckoutStepOnePage.continueBtn.click();

            expect(CheckoutStepOnePage.errorMsgContainer.isExisting()).toBe(true);
        });

        it('Check continue button function with data on form', () => {
            goCheckoutForm();
            CheckoutStepOnePage.addValidFormData();
            CheckoutStepOnePage.continueBtn.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-two.html');
        });

        it('Check cancel button text', () => {
            goCheckoutForm();

            let cancelBtnText = CheckoutStepOnePage.cancelBtn.getText();
            expect(cancelBtnText).toBe('CANCEL');
        });

        it('Check cancel button function', () => {
            goCheckoutForm();
            CheckoutStepOnePage.cancelBtn.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/cart.html');
        });
    });
});

// Auxiliar Function
const goCheckoutForm = () => {
    browser.reloadSession();
    LoginPage.open();
    LoginPage.standardUserLogin();
    InventoryPage.shoppingCart.click();
    CartPage.checkout.click();
}