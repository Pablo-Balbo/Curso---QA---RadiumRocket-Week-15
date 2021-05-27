const Page = require('./page');

class InventoryPage extends Page {
    // Menu
    get menuBtn() {return $('#react-burger-menu-btn')}
    get closeBtn() {return $('#react-burger-cross-btn')}
    get allItems() {return $('#inventory_sidebar_link')}
    get about() {return $('#about_sidebar_link')}
    get logout() {return $('#logout_sidebar_link')}
    get resetAppState() {return $('#reset_sidebar_link')}
    get divMenu() {return $('.bm-menu-wrap')}

    // Cart
    get shoppingCart() {return $('.shopping_cart_link')}
    get shoppingCartSpan() {return $('.shopping_cart_badge')}

    // Menu filters
    get filter() {return $('.product_sort_container')}
    get aToZ() {return $('[value="az"]')}
    get zToA() {return $('[value="za"]')}
    get lowToHigh() {return $('[value="lohi"]')}
    get highToLow() {return $('[value="hilo"]')}

    // Inventory images
    get imgBackpack() {return $('[alt="Sauce Labs Backpack"]')}
    get imgBikeLight() {return $('[alt="Sauce Labs Bike Light"]')}
    get imgBoltTShirt() {return $('[alt="Sauce Labs Bolt T-Shirt"]')}
    get imgFleeceJacket() {return $('[alt="Sauce Labs Fleece Jacket"]')}
    get imgOnesie() {return $('[alt="Sauce Labs Onesie"]')}
    get imgRedTShirt() {return $('[alt="Test.allTheThings() T-Shirt (Red)"]')}

    // Inventory titles
    get titleBackpack() {return $('#item_4_title_link')}
    get titleBikeLight() {return $('#item_0_title_link')}
    get titleBoltTShirt() {return $('#item_1_title_link')}
    get titleFleeceJacket() {return $('#item_5_title_link')}
    get titleOnesie() {return $('#item_2_title_link')}
    get titleRedTShirt() {return $('#item_3_title_link')}

    get productsName() {return $$('.inventory_item_name')}

    getProductsName() {
        let namesArray = [];
        for (let i = 0; i < 6; i++) {
            let element = this.productsName[i].getText();
            namesArray.push(element);
        }
        return namesArray;
    }

    get productsPrice() {return $$('.inventory_item_price')}

    getProductsPrice() {
        let pricesArray = [];
        for (let i = 0; i < 6; i++) {
            let element = this.productsPrice[i].getText();
            pricesArray.push(element);
        }
        return pricesArray;
    }

    // Add to cart buttons
    get addToCartBtnBackpack() {return $('#add-to-cart-sauce-labs-backpack')}
    get addToCartBtnBikeLight() {return $('#add-to-cart-sauce-labs-bike-light')}
    get addToCartBtnBoltTShirt() {return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get addToCartBtnFleeceJacket() {return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get addToCartBtnOnesie() {return $('#add-to-cart-sauce-labs-onesie')}
    get addToCartBtnTShirtRed() {return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')}

    addAllItems() {
        this.addToCartBtnBackpack.click()
        this.addToCartBtnBikeLight.click()
        this.addToCartBtnBoltTShirt.click()
        this.addToCartBtnFleeceJacket.click()
        this.addToCartBtnOnesie.click()
        this.addToCartBtnTShirtRed.click()
    }

    // Back to products button
    get backToProductsBtn() {return $('#back-to-products')}

}

module.exports = new InventoryPage();