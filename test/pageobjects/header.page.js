const Page = require('./page');

class HeaderPage extends Page {
    get appLogo() {return $('.app_logo')}
    get title() {return $('.title')}
    get headerImg() {return $('.peek')}
}

module.exports = new HeaderPage();