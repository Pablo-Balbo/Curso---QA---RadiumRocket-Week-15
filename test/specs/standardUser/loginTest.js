const LoginPage = require('../../pageobjects/login.page.js');

describe('Testing Login page', () => {
    describe('Standard user tests', () => {
        it('Login Success', () => {
            LoginPage.open();
            LoginPage.standardUserLogin();

            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });

        describe('Check error messages', () => {
            it('Check standard user without password', () => {
                LoginPage.open();
                LoginPage.validUsername();
                LoginPage.noPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Password is required')
            });

            it('Check standard user with a blank space for password', () => {
                LoginPage.open();
                LoginPage.validUsername();
                LoginPage.blankSpacePassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Check standard user with numbers for password', () => {
                LoginPage.open();
                LoginPage.validUsername();
                LoginPage.numbersPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Check standard user with an invalid password', () => {
                LoginPage.open();
                LoginPage.validUsername();
                LoginPage.invalidPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });
        });
    });

    // describe('Locked user tests', () => {
    //     describe('Check error messages', () => {
    //         it('Check locked user with a valid password', () => {
    //             LoginPage.open();
    //             LoginPage.lockedUsername();
    //             LoginPage.validPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Sorry, this user has been locked out.')
    //         });

    //         it('Check locked user without password', () => {
    //             LoginPage.open();
    //             LoginPage.lockedUsername();
    //             LoginPage.noPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Password is required')
    //         });

    //         it('Check locked user with a blank space for password', () => {
    //             LoginPage.open();
    //             LoginPage.lockedUsername();
    //             LoginPage.blankSpacePassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check locked user with numbers for password', () => {
    //             LoginPage.open();
    //             LoginPage.lockedUsername();
    //             LoginPage.numbersPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check locked user with an invalid password', () => {
    //             LoginPage.open();
    //             LoginPage.lockedUsername();
    //             LoginPage.invalidPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });
    //     });
    // });

    // describe('Problem user tests', () => {
    //     it('Login Success', () => {
    //         LoginPage.open();
    //         LoginPage.problemUsername();
    //         LoginPage.validPassword();
    //         LoginPage.loginBtn.click();

    //         expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    //     });

    //     describe('Check error messages', () => {
    //         it('Check login problem user without password', () => {
    //             LoginPage.open();
    //             LoginPage.problemUsername();
    //             LoginPage.noPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Password is required')
    //         });

    //         it('Check login problem user with a blank space for password', () => {
    //             LoginPage.open();
    //             LoginPage.problemUsername();
    //             LoginPage.blankSpacePassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check login problem user with numbers for passwords', () => {
    //             LoginPage.open();
    //             LoginPage.problemUsername();
    //             LoginPage.numbersPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check login problem user with an invalid password', () => {
    //             LoginPage.open();
    //             LoginPage.problemUsername();
    //             LoginPage.invalidPassword();
    //             LoginPage.loginBtn.click();
    
    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });
    //     });
    // });

    // describe('Performance glitch user tests', () => {
    //     it('Login success', () => {
    //         LoginPage.open();
    //         LoginPage.performanceGlitchUser();
    //         LoginPage.validPassword();
    //         LoginPage.loginBtn.click();

    //         expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    //     });

    //     describe('Check error messages', () => {
    //         it('Check login performance glitch user without password', () => {
    //             LoginPage.open();
    //             LoginPage.performanceGlitchUser();
    //             LoginPage.noPassword();
    //             LoginPage.loginBtn.click();

    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Password is required')
    //         });

    //         it('Check login performance glitch user with a blank space for password', () => {
    //             LoginPage.open();
    //             LoginPage.performanceGlitchUser();
    //             LoginPage.blankSpacePassword();
    //             LoginPage.loginBtn.click();

    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check login performance glitch user with numbers for password', () => {
    //             LoginPage.open();
    //             LoginPage.performanceGlitchUser();
    //             LoginPage.numbersPassword();
    //             LoginPage.loginBtn.click();

    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });

    //         it('Check login performance glitch user with an invalid password', () => {
    //             LoginPage.open();
    //             LoginPage.performanceGlitchUser();
    //             LoginPage.invalidPassword();
    //             LoginPage.loginBtn.click();

    //             let errorMessage = LoginPage.errorMsgContainer.getText();
    //             expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
    //         });
    //     });
    // });

    describe('Check login without username', () => {
        describe('Check error messages', () => {
            it('Enter no username with valid password', () => {
                LoginPage.open();
                LoginPage.noUsername();
                LoginPage.validPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username is required')
            });

            it('Enter no username without password', () => {
                LoginPage.open();
                LoginPage.noUsername();
                LoginPage.noPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username is required')
            });

            it('Enter no username with a blank space for password', () => {
                LoginPage.open();
                LoginPage.noUsername();
                LoginPage.blankSpacePassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username is required')
            });

            it('Enter no username with numbers for password', () => {
                LoginPage.open();
                LoginPage.noUsername();
                LoginPage.numbersPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username is required')
            });

            it('Enter no username with an invalid password', () => {
                LoginPage.open();
                LoginPage.noUsername();
                LoginPage.invalidPassword();
                LoginPage.loginBtn.click();

                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username is required')
            });
        });
    });

    describe('Check login with a blank space for username', () => {
        describe('Check error messages', () => {
            it('Enter a blank space for username with a valid password', () => {
                LoginPage.open();
                LoginPage.blankSpaceUser();
                LoginPage.validPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter a blank space for username without password', () => {
                LoginPage.open();
                LoginPage.blankSpaceUser();
                LoginPage.noPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Password is required')
            });

            it('Enter a blank space for username and password', () => {
                LoginPage.open();
                LoginPage.blankSpaceUser();
                LoginPage.blankSpacePassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter a blank space for username with numbers for password', () => {
                LoginPage.open();
                LoginPage.blankSpaceUser();
                LoginPage.numbersPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter a blank space for username with an invalid password', () => {
                LoginPage.open();
                LoginPage.blankSpaceUser();
                LoginPage.invalidPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });
        });
    });

    describe('Check login with numbers for username', () => {
        describe('Check error messages', () => {
            it('Enter numbers for username with a valid password', () => {
                LoginPage.open();
                LoginPage.numbersUser();
                LoginPage.validPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter numbers for username without password', () => {
                LoginPage.open();
                LoginPage.numbersUser();
                LoginPage.noPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Password is required')
            });

            it('Enter numbers for username with a blank space for password', () => {
                LoginPage.open();
                LoginPage.numbersUser();
                LoginPage.blankSpacePassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter numbers for username and password', () => {
                LoginPage.open();
                LoginPage.numbersUser();
                LoginPage.numbersPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter numbers for username with an invalid password', () => {
                LoginPage.open();
                LoginPage.numbersUser();
                LoginPage.invalidPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });
        });
    });

    describe('Check login with unregistred user', () => {
        describe('Check error messages', () => {
            it('Enter unregistred username with a valid password', () => {
                LoginPage.open();
                LoginPage.username.addValue('Hedwig Hannéálore');
                LoginPage.validPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter unregistred username without password', () => {
                LoginPage.open();
                LoginPage.username.addValue('Hildegarde Garnika');
                LoginPage.noPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Password is required')
            });

            it('Enter unregistred username with a blank space for password', () => {
                LoginPage.open();
                LoginPage.username.addValue('Samáráe Vhrindha');
                LoginPage.blankSpacePassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter unregistred username with numbers for password', () => {
                LoginPage.open();
                LoginPage.username.addValue('Katharina Odétta');
                LoginPage.numbersPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });

            it('Enter unregistred username with an invalid password', () => {
                LoginPage.open();
                LoginPage.username.addValue('Dr. Who');
                LoginPage.invalidPassword();
                LoginPage.loginBtn.click();
    
                let errorMessage = LoginPage.errorMsgContainer.getText();
                expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service')
            });
        });
    });

    it('Check error message close button', () => {
        LoginPage.open();
        LoginPage.loginBtn.click();
        LoginPage.errorMsgBtn.click();
        
        expect(LoginPage.errorMsgContainer.getText()).toBe('');
    });
});