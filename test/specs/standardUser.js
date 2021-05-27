// Standard user tests

describe('Login page tests', () => {
    describe('Check standard user with a valid password', () => {
        it('Enter saucedemo.com', () => {
            LoginPage.open();
        });

        it('Enter a valid username and a valid password', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
        });

        it('Verify the url', () => {
            LoginPage.login();

            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Check standard user without password', () => {
        it('Enter saucedemo.com', () => {
            LoginPage.open();
        });

        it('Enter a valid username and no password', () => {
            LoginPage.validUsername();
            LoginPage.noPassword();
        });

        it('Verify the error message', () => {
            LoginPage.login();

            let errorMessage = LoginPage.errorMsgContainer.getText();
            expect(errorMessage).toBe('Epic sadface: Password is required')
        });
    });

    describe('Check standard user with a blank space for password', () => {
        it('Enter saucedemo.com', () => {
            LoginPage.open();
        });

        it('Enter a valid username and a blank space for password', () => {
            LoginPage.validUsername();
            LoginPage.blankSpacePassword();
        });

        it('Verify the error message', () => {
            LoginPage.login();

            let errorMessage = LoginPage.errorMsgContainer.getText();
            expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
        });
    });

    describe('Check standard user with numbers for password', () => {
        it('Enter saucedemo.com', () => {
            LoginPage.open();
        });

        it('Enter a valid username and numbers for password', () => {
            LoginPage.validUsername();
            LoginPage.numbersPassword();
        });

        it('Verify the error message', () => {
            LoginPage.login();

            let errorMessage = LoginPage.errorMsgContainer.getText();
            expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
        });
    });

    describe('Check standard user with an invalid password', () => {
        it('Enter saucedemo.com', () => {
            LoginPage.open();
        });

        it('Enter a valid username and wrong password', () => {
            LoginPage.validUsername();
            LoginPage.invalidPassword();
        });

        it('Verify the error message', () => {
            LoginPage.login();

            let errorMessage = LoginPage.errorMsgContainer.getText();
            expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
        });
    });
});

describe('Inventory page tests', () => {
    describe('Check images', () => {
        describe('Check Backpack img', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Backpack', () => {
                let imgBackpackSrc = InventoryPage.imgBackpack.getAttribute('src');
    
                expect(imgBackpackSrc).toBe(expectedBackpackOriginalSrc);
            });
        });
    
        describe('Check Bike Light img', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Bike Light', () => {
                let imgBikeLghtSrc = InventoryPage.imgBikeLight.getAttribute('src');
    
                expect(imgBikeLghtSrc).toBe(expectedBikeLightOriginalSrc);
            });
        });
    
        describe('Check Bolt T-Shirt img', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Bolt T-Shirt', () => {
                let imgBoltTShirtSrc = InventoryPage.imgBoltTShirt.getAttribute('src');
    
                expect(imgBoltTShirtSrc).toBe(expectedBoldTShirtOriginalSrc);
            });
        });
    
        describe('Check Fleece Jacket', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Fleece Jacket', () => {
                let imgFleeceJacketSrc = InventoryPage.imgFleeceJacket.getAttribute('src');
    
                expect(imgFleeceJacketSrc).toBe(expectedFleeceJacketOriginalSrc);
            });
        });
    
        describe('Check Onesie', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Onesie', () => {
                let imgOnesieSrc = InventoryPage.imgOnesie.getAttribute('src');
    
                expect(imgOnesieSrc).toBe(expectedOnesieOriginalSrc);
            });
        });
    
        describe('Check RedTShirt', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });
            
            it('Check img of Red T-Shirt', () => {
                let imgRedTShirtSrc = InventoryPage.imgRedTShirt.getAttribute('src');
    
                expect(imgRedTShirtSrc).toBe(expectedRedTShirtOriginalSrc);
            });
        });
    });

    describe('Check links of titles and images', () => {
        describe('Check Backpack´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Backpack´s title and image and check url', () => {
                InventoryPage.titleBackpack.click();
                let titleBackpackUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgBackpack.click();
                let imgBackpackUrl = browser.getUrl();

                expect(titleBackpackUrl || imgBackpackUrl).toBe(expectedBackpackDetailsUrl);
            });
        });

        describe('Check Bike Light´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter BikeLight´s title and image check url', () => {
                InventoryPage.titleBikeLight.click();
                let titleBikeLightUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgBikeLight.click();
                let imgBikeLightUrl = browser.getUrl();

                expect(titleBikeLightUrl || imgBikeLightUrl).toBe(expectedBikeLightDetailsUrl);
            });
        });

        describe('Check Bolt T-Shirt´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Bolt T-Shirt´s title and image and check url', () => {
                InventoryPage.titleBoltTShirt.click();
                let titleBoltTShirtUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgBoltTShirt.click();
                let imgBoltTShirtUrl = browser.getUrl();

                expect(titleBoltTShirtUrl || imgBoltTShirtUrl).toBe(expectedBoltTShirtDetailsUrl);
            });
        });

        describe('Check Fleece Jacket´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Fleece Jacket´s title and image check url', () => {
                InventoryPage.titleFleeceJacket.click();
                let titleFleeceJacketUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgFleeceJacket.click();
                let imgOnesieUrl = browser.getUrl();

                expect(titleFleeceJacketUrl || imgOnesieUrl).toBe(expectedFleeceJacketDetailsUrl);
            });
        });

        describe('Check Onesie´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Onesie´s title and image and check url', () => {
                InventoryPage.titleOnesie.click();
                let titleOnesieUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgOnesie.click();
                let imgOnesieUrl = browser.getUrl();

                expect(titleOnesieUrl || imgOnesieUrl).toBe(expectedOnesieDetailsUrl);
            });
        });

        describe('Check RedTShirt´s links', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter RedTShirt´s title and image and check url', () => {
                InventoryPage.titleRedTShirt.click();
                let titleRedTShirtUrl = browser.getUrl();

                InventoryPage.backToProductsBtn.click();

                InventoryPage.imgRedTShirt.click();
                let imgRedTShirtUrl = browser.getUrl();

                expect(titleRedTShirtUrl || imgRedTShirtUrl).toBe(expectedRedTShirtDetailsUrl);
            });
        });
    });

    describe('Check menu', () => {
        describe('Check "Menu" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Menu and check aria-hidden status', () => {
                InventoryPage.menuBtn.click();
                let divMenuHiddenFalse = inventoryPage.divMenu.getAttribute('aria-hidden');

                expect(divMenuHiddenFalse).toBe('false');
            });
        });

        describe('Check "Close Menu" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Menu, get out and check aria-hidden status', () => {
                InventoryPage.menuBtn.click();
                InventoryPage.closeBtn.click();
                let divMenuHiddenTrue = inventoryPage.divMenu.getAttribute('aria-hidden');

                expect(divMenuHiddenTrue).toBe('true');
            });
        });

        describe('Check "All items" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter a product and get out by Menu - All items', () => {
                InventoryPage.titleBackpack.click();
                InventoryPage.menuBtn.click();
                InventoryPage.allItems.click();


                expect((browser).getUrl()).toBe('https://www.saucedemo.com/inventory.html');
            });
        });

        describe('Check "About" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Menu - About', () => {
                InventoryPage.menuBtn.click();
                let aboutUrl = InventoryPage.about.getAttribute('href');

                expect(aboutUrl).toBe('https://saucelabs.com/');
            });
        });

        describe('Check "Logout" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Enter Menu - Logout', () => {
                InventoryPage.menuBtn.click();
                InventoryPage.logout.click();

                expect((browser).getUrl()).toBe('https://www.saucedemo.com/');
            });
        });

        describe('Check "Reset app state" button', () => {
            it('Open login page', () => {
                LoginPage.open();
            });
    
            it('Login', () => {
                LoginPage.validUsername();
                LoginPage.validPassword();
                LoginPage.login();
            });

            it('Add items to cart', () => {
                InventoryPage.addToCartBtnBackpack.click();
                InventoryPage.addToCartBtnBikeLight.click();
                InventoryPage.addToCartBtnBoltTShirt.click();
                InventoryPage.addToCartBtnFleeceJacket.click();
                InventoryPage.addToCartBtnOnesie.click();
                InventoryPage.addToCartBtnTShirtRed.click();
            });

            it('Enter Menu - Reset app status', () => {
                InventoryPage.menuBtn.click();
                InventoryPage.resetAppState.click();

                expect(inventoryPage.shoppingCartSpan.isExisting()).toBe(false);
            });
        });
    });
});

describe('Cart page tests', () => {
    describe('Check the nonexistence of the div', () => {
        it('Open login page', () => {
            LoginPage.open();
        });
    
        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });
    
        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });
    
        it('Check cart item´s div', () => {
            let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
            expect(cartItemDivExisting).toBe(false);
        });
    });

    describe('Check the existence of the div', () => {
        it('Open login page', () => {
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });
        
        it('Check cart item´s div', () => {
            let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
            expect(cartItemDivExisting).toBe(true);
        });

        it('Check that there are 6 items in the cart', () => {
            let shoppingCartSpanAmount = CartPage.shoppingCartSpan.getText();
            expect(shoppingCartSpanAmount).toBe('6');
        });
    });
    
    describe('Check remove item buttons', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Remove items', () => {
            CartPage.removeBackpackBtn.click();
            CartPage.removeBikeLightBtn.click();
            CartPage.removeBoltTShirtBtn.click();
            CartPage.removeFleeceJacketBtn.click();
            CartPage.removeOnesieBtn.click();
            CartPage.removeTShirtRedBtn.click();
        });

        it('Check cart item´s div', () => {
            let cartItemDivExisting = CartPage.cartItemDiv.isExisting();
            expect(cartItemDivExisting).toBe(false);
        });
    });

    describe('Check "checkout" button', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();

            expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-one.html');
        });
    });
});

describe('Test checkout page', () => {
    describe('Check checkout form with valid data', () => {
        it('Open login page', () => {
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.validLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check page´s Url', () => {
            expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-two.html');
        });
    });

    describe('Check checkout form without first name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.noFirstName();
            Checkout.validLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check error message', () => {
            let errorMsgText = Checkout.errorMsg.getText();
            expect(errorMsgText).toBe('Error: First Name is required');
        });
    });

    describe('Check checkout form with blank space for first name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.blankSpaceFirstName();
            Checkout.validLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form with numbers for first name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.numbersFirstName();
            Checkout.validLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form without last name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.noLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check error message', () => {
            let errorMsgText = Checkout.errorMsg.getText();
            expect(errorMsgText).toBe('Error: Last Name is required');
        });
    });

    describe('Check checkout form with blank space for last name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.blankSpaceLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form with numbers for last name', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.numbersLastName();
            Checkout.validCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form without code', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.validLastName();
            Checkout.noCode();
            Checkout.continueBtn.click();
        });

        it('Check error message', () => {
            let errorMsgText = Checkout.errorMsg.getText();
            expect(errorMsgText).toBe('Error: Postal Code is required');
        });
    });

    describe('Check checkout form with blank space for code', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.validLastName();
            Checkout.blankSpaceCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form with letters for code', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.validLastName();
            Checkout.lettersCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });

    describe('Check checkout form with letters and numbers for code', () => {
        it('Open login page', () => {
            browser.reloadSession();
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Add items to cart', () => {
            InventoryPage.addToCartBtnBackpack.click();
            InventoryPage.addToCartBtnBikeLight.click();
            InventoryPage.addToCartBtnBoltTShirt.click();
            InventoryPage.addToCartBtnFleeceJacket.click();
            InventoryPage.addToCartBtnOnesie.click();
            InventoryPage.addToCartBtnTShirtRed.click();
        });

        it('Open cart page', () => {
            InventoryPage.shoppingCart.click();
        });

        it('Checkout', () => {
            CartPage.checkout.click();
        });

        it('Complete form and continue', () => {
            Checkout.validFirstName();
            Checkout.validLastName();
            Checkout.lettersAndNumbersCode();
            Checkout.continueBtn.click();
        });

        it('Check if error message is existing', () => {
            let errorMsgExisting = Checkout.errorMsg.isExisting();
            expect(errorMsgExisting).toBe(false);
        });
    });
});

describe('Footer tests', () => {
    describe('Check Twitter link', () => {
        it('Open login page', () => {
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Check twitter link', () => {
            let twitterLink = FooterPage.twitterBtn.getAttribute('href');
            expect(twitterLink).toBe('https://twitter.com/saucelabs');
        });
    });

    describe('Check Facebook link', () => {
        it('Open login page', () => {
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Check twitter link', () => {
            let facebookLink = FooterPage.facebookBtn.getAttribute('href');
            expect(facebookLink).toBe('https://www.facebook.com/saucelabs');
        });
    });

    describe('Check LinkedIn link', () => {
        it('Open login page', () => {
            LoginPage.open();
        });

        it('Login', () => {
            LoginPage.validUsername();
            LoginPage.validPassword();
            LoginPage.login();
        });

        it('Check twitter link', () => {
            let linkedinLink = FooterPage.linkedinBtn.getAttribute('href');
            expect(linkedinLink).toBe('https://www.linkedin.com/company/sauce-labs/');
        });
    });
});