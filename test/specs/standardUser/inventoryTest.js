const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');

// Original images to compare
const expectedBackpackOriginalSrc = 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg';
const expectedBikeLightOriginalSrc = 'https://www.saucedemo.com/static/media/bike-light-1200x1500.a0c9caae.jpg';
const expectedBoldTShirtOriginalSrc = 'https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c0dae290.jpg';
const expectedFleeceJacketOriginalSrc = 'https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.439fc934.jpg';
const expectedOnesieOriginalSrc = 'https://www.saucedemo.com/static/media/red-onesie-1200x1500.1b15e1fa.jpg';
const expectedRedTShirtOriginalSrc = 'https://www.saucedemo.com/static/media/red-tatt-1200x1500.e32b4ef9.jpg';

// Expected images links
const expectedBackpackDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=4';
const expectedBikeLightDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=0';
const expectedBoltTShirtDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=1';
const expectedFleeceJacketDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=5';
const expectedOnesieDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=2';
const expectedRedTShirtDetailsUrl = 'https://www.saucedemo.com/inventory-item.html?id=3';

describe('Inventory page tests', () => {
    describe('Check images', () => {
        it('Check Backpack img', () => {
            openAndLogin();
            
            let imgBackpackSrc = InventoryPage.imgBackpack.getAttribute('src');
            expect(imgBackpackSrc).toBe(expectedBackpackOriginalSrc);
        });
    
        it('Check Bike Light img', () => {
            openAndLogin();

            let imgBikeLghtSrc = InventoryPage.imgBikeLight.getAttribute('src');
            expect(imgBikeLghtSrc).toBe(expectedBikeLightOriginalSrc);
        });
    
        it('Check Bolt T-Shirt img', () => {
            openAndLogin();

            let imgBoltTShirtSrc = InventoryPage.imgBoltTShirt.getAttribute('src');
            expect(imgBoltTShirtSrc).toBe(expectedBoldTShirtOriginalSrc);
        });
    
        it('Check Fleece Jacket img', () => {
            openAndLogin();

            let imgFleeceJacketSrc = InventoryPage.imgFleeceJacket.getAttribute('src');
            expect(imgFleeceJacketSrc).toBe(expectedFleeceJacketOriginalSrc);
        });
    
        it('Check Onesie img', () => {
            openAndLogin();

            let imgOnesieSrc = InventoryPage.imgOnesie.getAttribute('src');
            expect(imgOnesieSrc).toBe(expectedOnesieOriginalSrc);
        });
    
        it('Check RedTShirt img', () => {
            openAndLogin();

            let imgRedTShirtSrc = InventoryPage.imgRedTShirt.getAttribute('src');
            expect(imgRedTShirtSrc).toBe(expectedRedTShirtOriginalSrc);
        });
    });

    describe('Check links of titles and images', () => {
        it('Check Backpack´s links', () => {
            openAndLogin();

            InventoryPage.titleBackpack.click();
            let titleBackpackUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgBackpack.click();
            let imgBackpackUrl = browser.getUrl();

            expect(titleBackpackUrl || imgBackpackUrl).toBe(expectedBackpackDetailsUrl);
        });

        it('Check Bike Light´s links', () => {
            openAndLogin();

            InventoryPage.titleBikeLight.click();
            let titleBikeLightUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgBikeLight.click();
            let imgBikeLightUrl = browser.getUrl();

            expect(titleBikeLightUrl || imgBikeLightUrl).toBe(expectedBikeLightDetailsUrl);
        });

        it('Check Bolt T-Shirt´s links', () => {
            openAndLogin();

            InventoryPage.titleBoltTShirt.click();
            let titleBoltTShirtUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgBoltTShirt.click();
            let imgBoltTShirtUrl = browser.getUrl();

            expect(titleBoltTShirtUrl || imgBoltTShirtUrl).toBe(expectedBoltTShirtDetailsUrl);
        });

        it('Check Fleece Jacket´s links', () => {
            openAndLogin();

            InventoryPage.titleFleeceJacket.click();
            let titleFleeceJacketUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgFleeceJacket.click();
            let imgOnesieUrl = browser.getUrl();

            expect(titleFleeceJacketUrl || imgOnesieUrl).toBe(expectedFleeceJacketDetailsUrl);
        });

        it('Check Onesie´s links', () => {
            openAndLogin();

            InventoryPage.titleOnesie.click();
            let titleOnesieUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgOnesie.click();
            let imgOnesieUrl = browser.getUrl();

            expect(titleOnesieUrl || imgOnesieUrl).toBe(expectedOnesieDetailsUrl);
        });

        it('Check RedTShirt´s links', () => {
            openAndLogin();

            InventoryPage.titleRedTShirt.click();
            let titleRedTShirtUrl = browser.getUrl();

            InventoryPage.backToProductsBtn.click();

            InventoryPage.imgRedTShirt.click();
            let imgRedTShirtUrl = browser.getUrl();

            expect(titleRedTShirtUrl || imgRedTShirtUrl).toBe(expectedRedTShirtDetailsUrl);
        });
    });

    describe('Check menu', () => {
        it('Check "Menu" button', () => {
            openAndLogin();

            InventoryPage.menuBtn.click();
            let divMenuHiddenFalse = InventoryPage.divMenu.getAttribute('aria-hidden');

            expect(divMenuHiddenFalse).toBe('false');
        });

        it('Check "Close Menu" button', () => {
            openAndLogin();

            InventoryPage.menuBtn.click();
            InventoryPage.closeBtn.click();
            let divMenuHiddenTrue = InventoryPage.divMenu.getAttribute('aria-hidden');

            expect(divMenuHiddenTrue).toBe('true');
        });

        it('Check "All items" button', () => {
            openAndLogin();

            InventoryPage.titleBackpack.click();
            InventoryPage.menuBtn.click();
            InventoryPage.allItems.click();

            expect((browser).getUrl()).toBe('https://www.saucedemo.com/inventory.html');
        });

        it('Check "About" button', () => {
            openAndLogin();

            InventoryPage.menuBtn.click();
            let aboutUrl = InventoryPage.about.getAttribute('href');

            expect(aboutUrl).toBe('https://saucelabs.com/');
        });

        it('Check "Logout" button', () => {
            openAndLogin();

            InventoryPage.menuBtn.click();
            InventoryPage.logout.click();

            expect((browser).getUrl()).toBe('https://www.saucedemo.com/');
        });

        it('Check "Reset app state" button', () => {
            openAndLogin();

            InventoryPage.addAllItems();
            InventoryPage.menuBtn.click();
            InventoryPage.resetAppState.click();

            expect(InventoryPage.shoppingCartSpan.isExisting()).toBe(false);
        });
    });

    describe('Check filter menu', () => {
        it('Check "Name A to Z" item', () => {
            openAndLogin();
    
            InventoryPage.filter.click();
            InventoryPage.aToZ.click();
    
            expect(InventoryPage.getProductsName()).toEqual(InventoryPage.getProductsName().sort());
        });
    
        it('Check "Name Z to A" item', () => {
            openAndLogin();
    
            InventoryPage.filter.click();
            InventoryPage.zToA.click();
    
            expect(InventoryPage.getProductsName()).toEqual(InventoryPage.getProductsName().sort().reverse());
        });
    
        it('Check "Price (low to high)" item', () => {
            openAndLogin();
    
            InventoryPage.filter.click();
            InventoryPage.lowToHigh.click();
    
            expect(InventoryPage.getProductsPrice()).toEqual(InventoryPage.getProductsPrice().sort(function(a, b) {
                return a - b;
              })
            );
        });
    
        it('Check "Price (high to low)" item', () => {
            openAndLogin();
    
            InventoryPage.filter.click();
            InventoryPage.highToLow.click();
    
            expect(InventoryPage.getProductsPrice()).toEqual(InventoryPage.getProductsPrice().sort(function(a, b) {
                return b - a;
              })
            );
        });
    });
});

// Auxiliar Function
const openAndLogin = () => {
    LoginPage.open();
    LoginPage.standardUserLogin();
}