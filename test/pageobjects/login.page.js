const Page = require('./page');

class LoginPage extends Page {
    get username() {return $('#user-name')}
    get password() {return $('#password')}
    get loginBtn() {return $('#login-button')}
    get errorMsgContainer() {return $('.error-message-container')}
    get errorMsgBtn() {return $('.error-button')}

    // Username types

    validUsername() {
        this.username.addValue('standard_user')
    }

    noUsername() {
        this.username.addValue('')
    }

    blankSpaceUser() {
        this.username.addValue(' ')
    }

    numbersUser() {
        this.username.addValue('123698745')
    }

    problemUsername() {
        this.username.addValue('problem_user')
    }

    lockedUsername() {
        this.username.addValue('locked_out_user')
    }

    performanceGlitchUser() {
        this.username.addValue('performance_glitch_user')
    }

    // Password types

    validPassword() {
        this.password.addValue('secret_sauce')
    }

    noPassword() {
        this.password.addValue('')
    }

    blankSpacePassword() {
        this.password.addValue(' ')
    }

    numbersPassword() {
        this.password.addValue('1597534862')
    }

    invalidPassword() {
        this.password.addValue('j5EsxQ59??F56')
    }
    
    // Login types

    standardUserLogin() {
        this.validUsername();
        this.validPassword();
        this.loginBtn.click();
    }

    problemUserLogin() {
        this.username.addValue('problem_user');
        this.password.addValue('secret_sauce');
        this.loginBtn.click();
    }

    lockedUserLogin() {
        this.username.addValue('locked_out_user');
        this.password.addValue('secret_sauce');
        this.loginBtn.click();
    }

    performanceUserLogin() {
        this.username.addValue('performance_glitch_user');
        this.password.addValue('secret_sauce');
        this.loginBtn.click();
    }

    open () {
        super.open('');
    }
}

module.exports = new LoginPage();