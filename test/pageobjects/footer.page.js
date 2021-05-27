const Page = require('./page');

class FooterPage extends Page {
    get twitterBtn() {return $('a*=Twitter')}
    get facebookBtn() {return $('a*=Facebook')}
    get linkedinBtn() {return $('a*=LinkedIn')}
    get privacyPolicy() {return $('.footer_copy')}
    get footerRobot() {return $('.footer_robot')}
}

module.exports = new FooterPage();