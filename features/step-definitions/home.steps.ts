import {Given, When, Then} from '@wdio/cucumber-framework'
import homePage from '../pageObjects/homePage'

Given('he opens the website to do home page test', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he tries to subscription with an email', async() => {
    if(await homePage.consentir.isDisplayed()) {
        await homePage.consentir.click()
    }
    await homePage.inputSubscription.scrollIntoView()
    await homePage.inputSubscription.click()
    await homePage.inputSubscription.setValue('noe@prueba.com')
    await homePage.buttonSubscription.click()
})

Then('he sees a subscription success message', async() => {
    await expect(homePage.successMessageSubscription).toHaveText('You have been successfully subscribed!')
})

Given('he goes to the bottom of the page and scrolls up to the top using the up arrow', async() => {
    if(await homePage.consentir.isDisplayed()) {
        await homePage.consentir.click()
    }
    await homePage.inputSubscription.scrollIntoView()
    await homePage.buttonScrollUp.click()
})

Then('he sees a logo of the website', async() => {
    await expect(homePage.homeImg).toBeClickable()
})