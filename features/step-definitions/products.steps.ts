import {Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../pageObjects/productsPage';
import homePage from '../pageObjects/homePage';

Given('he opens the website to do products test', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he goes to the products page', async() => {
    if (await homePage.consentir.isDisplayed()) {
        await homePage.consentir.click()
    }
    await homePage.products.click()
})

When('he tries search the tops women category', async() => {
    await productsPage.womenCategory.click()
    await productsPage.womenTopsCategory.click()
})

Then('he founds a especific top', async() => {
    await productsPage.womenTop.scrollIntoView()
    await expect(productsPage.womenTop).toHaveText('Lace Top For Women')
})

When('he tries search the jeans men category', async() => {
    await productsPage.menCategory.click()
    await productsPage.menJeansCategory.click()
})

Then('he founds a especific jean', async() => {
    await expect(productsPage.menJean).toHaveText('Grunt Blue Slim Fit Jeans')
})

When('he tries search the dress kids category', async() => {
    await productsPage.kidCategory.click()
    await productsPage.kidDressCategory.click()
})

Then('he founds a especific dress', async() => {
    await expect(productsPage.kidDress).toHaveText('Blue Cotton Indie Mickey Dress')
})