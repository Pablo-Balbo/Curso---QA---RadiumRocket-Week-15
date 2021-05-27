const Page = require('./page');

class CheckoutCompletePage extends Page {
    get checkoutMsg() {return $('.title')}

    // Poster
    get thanksMsg() {return $('.complete-header')}
    get completeText() {return $('.complete-text')}
    get poster() {return $('.pony_express')}

    // Button
    get backHomeBtn() {return $('#back-to-products')}
}

module.exports = new CheckoutCompletePage();