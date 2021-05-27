const Page = require('./page');

class CartPage extends Page {
    // Title
    get cartTitle() {return $('.title')}

    // Span
    get shoppingCartSpan() {return $('.shopping_cart_badge')}

    // Items
    get cartItemDiv() {return $('.cart_item')}

    // Buttons
    get continueShopping() {return $('#continue-shopping')}
    get checkout() {return $('#checkout')}
    
    // Remove buttons
    get removeBackpackBtn() {return $('#remove-sauce-labs-backpack')}
    get removeBikeLightBtn() {return $('#remove-sauce-labs-bike-light')}
    get removeBoltTShirtBtn() {return $('#remove-sauce-labs-bolt-t-shirt')}
    get removeFleeceJacketBtn() {return $('#remove-sauce-labs-fleece-jacket')}
    get removeOnesieBtn() {return $('#remove-sauce-labs-onesie')}
    get removeTShirtRedBtn() {return $('[name="remove-test.allthethings()-t-shirt-(red)"]')}

    removeAllItems(){
        this.removeBackpackBtn.click()
        this.removeBikeLightBtn.click()
        this.removeBoltTShirtBtn.click()
        this.removeFleeceJacketBtn.click()
        this.removeOnesieBtn.click()
        this.removeTShirtRedBtn.click()
    }
}

module.exports = new CartPage();