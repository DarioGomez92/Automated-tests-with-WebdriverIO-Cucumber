import { Given, /* When, */ Then } from '@wdio/cucumber-framework';
import loginPage from '../pageObjects/loginPage';
import homePage from '../pageObjects/homePage';

Given('he opens the website', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he try to login with correct user', async() => {
    await loginPage.inputEmail.click()
    await loginPage.inputEmail.setValue('noe@gmail.com')
    await loginPage.inputPassword.click()
    await loginPage.inputPassword.setValue('noe')
    await loginPage.loginButton.click()
})

Then('he sees a logout button', async() => {
    await expect(homePage.inputLogout).toBeDisplayed()
})