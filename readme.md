This is the final problem of the Radium Rocket QA Automation course. It consisted of testing a given page (https://www.saucedemo.com/), all its components and an end to end test. The work is organized as follows:
- On the one hand, we find the WebdriverIO configuration file "wdio.config.js", as well as a "package.json" file and a "package-lock.json". Inside the file "wdio.config.js" is the organization of the test suite, organized as follows:
    suites: {
        standardUser: [
            './test/specs/standardUser/loginTest.js',
            './test/specs/standardUser/inventoryTest.js',
            './test/specs/standardUser/headerTest.js',
            './test/specs/standardUser/footerTest.js',
            './test/specs/standardUser/cartTest.js',
            './test/specs/standardUser/checkoutStepOneTest.js',
            './test/specs/standardUser/checkoutStepTwoTest.js',
            './test/specs/standardUser/checkoutCompleteTest.js'
        ],
        e2eTests: [
            './test/specs/e2eTests/e2eTest.standardUser.js',
            './test/specs/e2eTests/e2eTest.problemUser.js',
            './test/specs/e2eTests/e2eTest.lockedUser.js',
            './test/specs/e2eTests/e2eTest.performanceGlitchUser.js'
        ],
    },
- In the file "package.json" is declared "test", which we will use to run the tests in the console through the command "npm run test". In case you want to carry out only one test suite, it can be done by modifying the "package.json" file, in the "test" command by: "npx wdio run ./wdio.conf.js --suite e2eTests", for example , in case you want to run only the End to End tests.
- There is also a folder called "pageObjects", where all the files corresponding to each test are found, and within them, the selectors corresponding to each part of the page to be tested (for example, "login.page.js" , "inventory.page.js", etc.).
- Finally, there is the ".gitignore" file, through which we avoid uploading the "node_modules" folder.

Author: Pablo A. Balbo.