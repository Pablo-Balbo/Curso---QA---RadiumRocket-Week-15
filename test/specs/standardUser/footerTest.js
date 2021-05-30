const footerPage = require('../../pageobjects/footer.page');
const FooterPage = require('../../pageobjects/footer.page');
const LoginPage = require('../../pageobjects/login.page');

describe('Footer tests', () => {
    describe('Check social media links', () => {
        it('Check Twitter link', () => {
            LoginPage.open();
            LoginPage.standardUserLogin();
    
            let twitterLink = FooterPage.twitterBtn.getAttribute('href');
            expect(twitterLink).toBe('https://twitter.com/saucelabs');
        });
    
        it('Check Facebook link', () => {
            LoginPage.open();
            LoginPage.standardUserLogin();
    
            let facebookLink = FooterPage.facebookBtn.getAttribute('href');
            expect(facebookLink).toBe('https://www.facebook.com/saucelabs');
        });
    
        it('Check LinkedIn link', () => {
            LoginPage.open();
            LoginPage.standardUserLogin();
    
            let linkedinLink = FooterPage.linkedinBtn.getAttribute('href');
            expect(linkedinLink).toBe('https://www.linkedin.com/company/sauce-labs/');
        });
    });

    it('Check footer image', () => {
        LoginPage.open();
        LoginPage.standardUserLogin()

        expect(FooterPage.footerRobot.isExisting()).toBe(true);
    });

    it('Check footer policy privacy', () => {
        LoginPage.open();
        LoginPage.standardUserLogin()

        expect(FooterPage.privacyPolicy.getText()).toContain('Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
});