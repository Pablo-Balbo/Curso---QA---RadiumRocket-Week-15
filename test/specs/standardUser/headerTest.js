const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page')
const HeaderPage = require('../../pageobjects/header.page');

describe('Header tests', () => {
    it('Check logo', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(HeaderPage.appLogo.isExisting()).toBe(true);
    });

    it('Check title', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(HeaderPage.title.isExisting()).toBe(true);
    });

    it('Check image', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(HeaderPage.headerImg.isExisting()).toBe(true);
    });

    it('Check menu button', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(InventoryPage.menuBtn.isExisting()).toBe(true);
    });

    it('Check cart button', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(InventoryPage.shoppingCart.isExisting()).toBe(true);
    });

    it('Check filter button', () => {
        LoginPage.open();
        LoginPage.standardUserLogin();

        expect(InventoryPage.filter.isExisting()).toBe(true);
    });
});