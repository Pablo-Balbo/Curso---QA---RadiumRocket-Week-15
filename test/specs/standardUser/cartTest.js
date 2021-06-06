const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');

describe('Test cart page', () => {
    it('Check title text', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.shoppingCart.click();
    
        expect(CartPage.cartTitle.getText()).toBe('YOUR CART');
    });

    it('Check the nonexistence of cart item div', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.shoppingCart.click();

        let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
        expect(cartItemDivExisting).toBe(false);
    });

    it('Check cart item div', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();

        let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
        expect(cartItemDivExisting).toBe(true);
    });

    it('Check cart span', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();

        let shoppingCartSpanAmount = CartPage.shoppingCartSpan.getText();
        expect(shoppingCartSpanAmount).toBe('6');
    });
    
    it('Check remove item buttons', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();
        CartPage.removeAllItems();

        let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
        expect(cartItemDivExisting).toBe(false);
    });

    it('Check "checkout" button', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();
        CartPage.checkout.click();

        expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('Check "Continue Shopping" button', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.standardUserLogin();
        InventoryPage.addAllItems();
        InventoryPage.shoppingCart.click();
        CartPage.continueShopping.click();

        expect(browser.getUrl()).toBe('https://www.saucedemo.com/inventory.html');
    });
});