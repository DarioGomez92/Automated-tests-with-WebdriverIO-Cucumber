import { Given, When, Then } from '@wdio/cucumber-framework'
import cartPage from '../pageObjects/cartPage'
import productsPage from '../pageObjects/productsPage'
import homePage from '../pageObjects/homePage'
import loginPage from '../pageObjects/loginPage'

Given('he opens the website to do cart test', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he goes to the products page to add product to the cart', async() => {
    if (await homePage.consentir.isDisplayed()) {
        await homePage.consentir.click()
    }
    await homePage.products.click()
})

When('he adds a product to the cart', async() => {
    await productsPage.product3.scrollIntoView()
    await productsPage.product3.click()
})

Then('he sees a pop-up window with a success message', async() => {
    await expect(cartPage.successAdd).toHaveText('Added!')
})

When('he adds four product to the cart clicking on the button continue shopping', async() => {
    await productsPage.product1.scrollIntoView()
    await productsPage.product1.click()
    await cartPage.buttonContinueShopping.click()
    await productsPage.product2.scrollIntoView()
    await productsPage.product2.click()
    await cartPage.buttonContinueShopping.click()
    await productsPage.product3.scrollIntoView()
    await productsPage.product3.click()
    await cartPage.buttonContinueShopping.click()
    await productsPage.product4.scrollIntoView()
    await productsPage.product4.click()
    await cartPage.buttonViewCart.click()
})

Then('he sees four product in the cart', async() => {
    const productCart = await cartPage.cartProductInfo.getText()
    await expect(productCart).toContain('4')
})

When('he adds a product to the cart and tries to proceed to checkout', async() => {
    await productsPage.product4.scrollIntoView()
    await productsPage.product4.click()
    await cartPage.buttonViewCart.waitForDisplayed()
    await cartPage.buttonViewCart.click()
    await cartPage.buttonCheckout.waitForDisplayed()
    await cartPage.buttonCheckout.click()
})

Then('he sees a message to logging in first', async() => {
    await expect(cartPage.infoRegisterOrLogin).toHaveText('Register / Login account to proceed on checkout.')
})

Given('he logging in and goes to the products page to add product to the cart', async() => {
    if (await homePage.consentir.isDisplayed()) {
        await homePage.consentir.click()
    }
    await homePage.login.click()
    await loginPage.inputEmail.click()
    await loginPage.inputEmail.setValue('noe@gmail.com')
    await loginPage.inputPassword.click()
    await loginPage.inputPassword.setValue('noe')
    await loginPage.loginButton.click()
    await homePage.products.click()
})

Then('he sees a page with address details', async() => {
    await expect(cartPage.addresssDetails).toHaveText('Address Details')
})

When('he adds a product to the cart and tries to place an order', async() => {
    await productsPage.product4.scrollIntoView()
    await productsPage.product4.click()
    await cartPage.buttonViewCart.waitForDisplayed()
    await cartPage.buttonViewCart.click()
    await cartPage.buttonCheckout.waitForDisplayed()
    await cartPage.buttonCheckout.click()
    await cartPage.buttonPlaceOrder.scrollIntoView()
    await cartPage.buttonPlaceOrder.click()
    await cartPage.inputNameOnCard.click()
    await cartPage.inputNameOnCard.setValue('a')
    await cartPage.inputCardNumber.click()
    await cartPage.inputCardNumber.setValue('a')
    await cartPage.inputCvc.click()
    await cartPage.inputCvc.setValue('a')
    await cartPage.inputExpirationMonth.click()
    await cartPage.inputExpirationMonth.setValue('a')
    await cartPage.inputExpirationYear.click()
    await cartPage.inputExpirationYear.setValue('a')
    await cartPage.buttonPayAndConfirm.click()
})

Then('he sees a page with a confirmation message', async() => {
    await expect(cartPage.confirmationMessage).toHaveText('Congratulations! Your order has been confirmed!')
})