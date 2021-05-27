const Page = require('./page');

class CheckoutStepOnePage extends Page {
    // Checkout message
    get checkoutMsg() {return $('.title')}

    // Buttons
    get cancelBtn() {return $('#cancel')}
    get continueBtn() {return $('#continue')}
    
    // Error message
    get errorMsgContainer() {return $('.error-message-container')}
    get errorMsgBtn() {return $('.error-button')}
    get errorMsgText() {return $('[data-test="error"]')}
    
    // Form inputs
    get firstName() {return $('#first-name')}
    get lastName() {return $('#last-name')}
    get postalCode() {return $('#postal-code')}

    // First name types

    validFirstName() {
        this.firstName.addValue('Guennádiy')
    }

    noFirstName() {
        this.firstName.addValue('')
    }

    blankSpaceFirstName() {
        this.firstName.addValue(' ')
    }

    numbersFirstName() {
        this.firstName.addValue('1597538426')
    }

    // Last name types

    validLastName() {
        this.lastName.addValue('Yevgééniy')
    }

    noLastName() {
        this.lastName.addValue('')
    }

    blankSpaceLastName() {
        this.lastName.addValue(' ')
    }

    numbersLastName() {
        this.lastName.addValue('3578951264')
    }

    // Code types

    validCode() {
        this.postalCode.addValue('159753')
    }

    noCode() {
        this.postalCode.addValue('')
    }

    blankSpaceCode() {
        this.postalCode.addValue(' ')
    }

    lettersCode() {
        this.postalCode.addValue('Nadezhda')
    }

    lettersAndNumbersCode() {
        this.postalCode.addValue('Klavdiya123789456')
    }

    addValidFormData() {
        this.firstName.addValue('Vladímir Sergéevich')
        this.lastName.addValue('Vinográdov')
        this.postalCode.addValue('8795')
    }
}

module.exports = new CheckoutStepOnePage();