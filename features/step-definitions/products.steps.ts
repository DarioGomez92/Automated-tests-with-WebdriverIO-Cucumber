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

Then('he finds a especific top', async() => {
    await productsPage.womenTop.scrollIntoView()
    await expect(productsPage.womenTop).toHaveText('Lace Top For Women')
})

When('he tries search the jeans men category', async() => {
    await productsPage.menCategory.click()
    await productsPage.menJeansCategory.click()
})

Then('he finds a especific jean', async() => {
    await expect(productsPage.menJean).toHaveText('Grunt Blue Slim Fit Jeans')
})

When('he tries search the dress kids category', async() => {
    await productsPage.kidCategory.click()
    await productsPage.kidDressCategory.click()
})

Then('he finds a especific dress', async() => {
    await expect(productsPage.kidDress).toHaveText('Blue Cotton Indie Mickey Dress')
})

When('he tries search the madame products', async() => {
    await productsPage.madameBrands.click()
})

Then('he finds a especific madame product', async() => {
    await productsPage.madameDress.scrollIntoView()
    await expect(productsPage.madameDress).toHaveText('Rose Pink Embroidered Maxi Dress')
})

When('he tries search the babyhug products', async() => {
    await productsPage.babyhugBrands.click()
})

Then('he finds a especific babyhug product', async() => {
    await productsPage.babyhugTop.scrollIntoView()
    await expect(productsPage.babyhugTop).toHaveText('Sleeves Printed Top - White')
})

When('he tries search the biba products', async() => {
    await productsPage.bibaBrands.click()
})

Then('he finds a especific biba product', async() => {
    await productsPage.bibaDress.scrollIntoView()
    await expect(productsPage.bibaDress).toHaveText('Rust Red Linen Saree')
})

When('he tries to search for a product from the womens category', async() => {
    await productsPage.womenCategory.click()
    await productsPage.womenTop.click()
    await productsPage.viewWomenTop.click()
})

Then('he sees at the product view', async() => {
    await expect(productsPage.detailsWomenProduct).toHaveText('Rs. 700')
})

When('he tries to find a product in the mens category', async() => {
    await productsPage.menCategory.click()
    await productsPage.menJeansCategory.click()
    await productsPage.viewMenJean.click()
})

Then('he views the product and finds the add to cart button', async() => {
    await expect(productsPage.viewButtonCart).toBeExisting()
})

When('he tries to search for a product from the womens category and sends a success message', async() => {
    await productsPage.womenCategory.click()
    await productsPage.womenTopsCategory.click()
    await productsPage.womenTop.click()
    await productsPage.viewDetailsProduct.click()
    await productsPage.inputNameMessage.scrollIntoView()
    await productsPage.inputNameMessage.click()
    await productsPage.inputNameMessage.setValue('Prueba')
    await productsPage.inputEmailMessage.click()
    await productsPage.inputEmailMessage.setValue('Prueba@prueba.com')
    await productsPage.inputTextareaMessage.click()
    await productsPage.inputTextareaMessage.setValue('Este mensaje es una prueba')
    await productsPage.buttonSubmitMessage.click()
})

Then('he sees a success alert', async() => {
    await productsPage.spanSuccessMessage.waitForDisplayed()
    await expect(productsPage.spanSuccessMessage).toHaveText('Thank you for your review.')
})

When('he he tries to search for a product from the womens category and sends a empty message', async() => {
    await productsPage.womenCategory.click()
    await productsPage.womenTopsCategory.click()
    await productsPage.womenTop.click()
    await productsPage.viewDetailsProduct.click()
    await productsPage.inputNameMessage.scrollIntoView()
    await productsPage.inputNameMessage.click()
    await productsPage.inputNameMessage.setValue('                                    ')
    await productsPage.inputEmailMessage.click()
    await productsPage.inputEmailMessage.setValue('Prueba@prueba.com')
    await productsPage.inputTextareaMessage.click()
    await productsPage.inputTextareaMessage.setValue('                                 ')
    await productsPage.buttonSubmitMessage.click()
})