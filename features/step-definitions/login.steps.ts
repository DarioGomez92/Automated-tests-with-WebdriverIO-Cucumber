import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageObjects/loginPage';
import homePage from '../pageObjects/homePage';

Given('he opens the website to do login test', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he goes to the login page', async() => {
    await homePage.consentir.click()
    await homePage.login.click()
})

When('he tries to login with correct user', async() => {
    await loginPage.inputEmail.click()
    await loginPage.inputEmail.setValue('noe@gmail.com')
    await loginPage.inputPassword.click()
    await loginPage.inputPassword.setValue('noe')
    await loginPage.loginButton.click()
})

Then('he sees a logout button', async() => {
    await expect(homePage.logout).toBeDisplayed()
})

Given('he tries to loogout and login with incorrect user', async() => {
    await homePage.logout.click()
    await loginPage.inputEmail.click()
    await loginPage.inputEmail.setValue('manuel@gmail.com')
    await loginPage.inputPassword.click()
    await loginPage.inputPassword.setValue('manuel')
    await loginPage.loginButton.click()
})

Then('he sees a incorrect login message', async() => {
    await expect(loginPage.incorrectLoginMessage).toHaveText('Your email or password is incorrect!')
})