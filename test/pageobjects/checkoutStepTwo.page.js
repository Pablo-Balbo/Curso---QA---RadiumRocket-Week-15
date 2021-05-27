const Page = require('./page');

class CheckoutStepTwoPage extends Page {
    get checkoutMsg() {return $('.title')}
    get quantityLabel() {return $('.cart_quantity_label')}
    get descriptionLabel() {return $('.cart_desc_label')}
    get cartList() {return $('.cart_list')}
    get cartItem() {return $$('.cart_item')}
    get summaryInfo() {return $('.summary_info')}
    get summaryInfoLabels() {return $$('.summary_info_label')}
    get summarySubtotalLabel() {return $('.summary_subtotal_label')}
    get summaryTaxLabel() {return $('.summary_tax_label')}
    get summaryTotalLabel() {return $('.summary_total_label')}

    // Buttons
    get cancelBtn() {return $('#cancel')}
    get finishBtn() {return $('#finish')}
}

module.exports = new CheckoutStepTwoPage();