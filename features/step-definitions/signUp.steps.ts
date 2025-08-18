import { Given, When, Then } from '@wdio/cucumber-framework';
import signUpPage from '../pageObjects/signUpPage';
import homePage from '../pageObjects/homePage';

Given('he opens the website to do sign up test', async() => {
    await browser.url('https://automationexercise.com/')
})

Given('he tries to acept cookies and register with good name and email', async() => {
    await homePage.consentir.click()
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue(signUpPage.randomName)
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomEmail)
    await signUpPage.buttonSignup.click()
})

When('he completes all the details on the form', async() => {
    await signUpPage.radioMr.waitForDisplayed()
    await signUpPage.radioMr.click()
    await signUpPage.inputPassword.setValue('contraseña')
    await signUpPage.inputDay.selectByIndex(8)
    await signUpPage.inputMonth.selectByIndex(8)
    await signUpPage.inputYear.selectByVisibleText(1992)
    await signUpPage.checkbox1.click()
    await signUpPage.checkbox2.click()
    await signUpPage.inputFirstName.click()
    await signUpPage.inputFirstName.setValue('Manolo')
    await signUpPage.inputLastName.click()
    await signUpPage.inputLastName.setValue('Arias')
    await signUpPage.inputCompany.click()
    await signUpPage.inputCompany.setValue('Canada')
    await signUpPage.inputAddress1.click()
    await signUpPage.inputAddress1.setValue('C/ Los ciervos')
    await signUpPage.inputAdderss2.scrollIntoView()
    await signUpPage.inputAdderss2.click()
    await signUpPage.inputAdderss2.setValue('Del bosque')
    await signUpPage.inputCountry.selectByVisibleText('Singapore')
    await signUpPage.inputState.click()
    await signUpPage.inputState.setValue('of america')
    await signUpPage.inputCity.click()
    await signUpPage.inputCity.setValue('Melburne')
    await signUpPage.inputZipcode.click()
    await signUpPage.inputZipcode.setValue('39140')
    await signUpPage.inputPhoneNumber.click()
    await signUpPage.inputPhoneNumber.setValue('685452145')
    await signUpPage.buttonSubmit.click()
})

Then('he sees a success message', async() => {
    await expect(signUpPage.textResult).toHaveText('ACCOUNT CREATED!')
})

Given('he tries to register with a name and email already registered', async() => {
    await homePage.logout.click()
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue('Manolo')
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue('ejemplo@ejemplo.com')
    await signUpPage.buttonSignup.click()
})

Then('he sees a error message', async() => {
    await expect(signUpPage.emailRegistrered).toHaveText('Email Address already exist!')
})

Given('he tries to register with a long name', async() => {
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue(signUpPage.randomLongName)
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomEmail)
    await signUpPage.buttonSignup.click()
})

Then('he can sign up', async() => {
    const text = await signUpPage.confirmationSecondPage.getText()
    await expect(text).toContain('ENTER ACCOUNT INFORMATION')
})

Given('he tries to register with a incorrect email format', async() => {
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue(signUpPage.randomName)
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomShortEmail)
    await signUpPage.buttonSignup.click()
})

Given('he tries to register with only spaces in the name', async() => {
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue("                                          ")
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomEmail)
    await signUpPage.buttonSignup.click()
})

Given('he tries to register with good name and email', async() => {
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue(signUpPage.randomName)
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomEmail)
    await signUpPage.buttonSignup.click()
})

When('he tries to complete the form with only obligatory datas', async() => {
    await signUpPage.inputPassword.setValue('contraseña')
    await signUpPage.inputFirstName.click()
    await signUpPage.inputFirstName.setValue('Manolo')
    await signUpPage.inputLastName.click()
    await signUpPage.inputLastName.setValue('Arias')
    await signUpPage.inputAddress1.click()
    await signUpPage.inputAddress1.setValue('C/ Los ciervos')
    await signUpPage.inputCountry.selectByVisibleText('Australia')
    await signUpPage.inputState.click()
    await signUpPage.inputState.setValue('of america')
    await signUpPage.inputCity.click()
    await signUpPage.inputCity.setValue('Melburne')
    await signUpPage.inputZipcode.click()
    await signUpPage.inputZipcode.setValue('39140')
    await signUpPage.inputPhoneNumber.click()
    await signUpPage.inputPhoneNumber.setValue('685452145')
    await signUpPage.buttonSubmit.click()
})

Given('he logs out and tries to register with good name and email', async() => {
    await homePage.logout.click()
    await homePage.login.click()
    await signUpPage.inputName.click()
    await signUpPage.inputName.setValue(signUpPage.randomName)
    await signUpPage.inputEmail.click()
    await signUpPage.inputEmail.setValue(signUpPage.randomEmail)
    await signUpPage.buttonSignup.click()
})

When('he tries to complete the form with only spaces on the inputs', async() => {
    await signUpPage.inputPassword.setValue('            ')
    await signUpPage.inputFirstName.click()
    await signUpPage.inputFirstName.setValue('                ')
    await signUpPage.inputLastName.click()
    await signUpPage.inputLastName.setValue('              ')
    await signUpPage.inputCompany.click()
    await signUpPage.inputCompany.setValue('             ')
    await signUpPage.inputAddress1.scrollIntoView()
    await signUpPage.inputAddress1.click()
    await signUpPage.inputAddress1.setValue('          ')
    await signUpPage.inputAdderss2.click()
    await signUpPage.inputAdderss2.setValue('            ')
    await signUpPage.inputState.click()
    await signUpPage.inputState.setValue('             ')
    await signUpPage.inputCity.click()
    await signUpPage.inputCity.setValue('               ')
    await signUpPage.inputZipcode.click()
    await signUpPage.inputZipcode.setValue('                ')
    await signUpPage.inputPhoneNumber.click()
    await signUpPage.inputPhoneNumber.setValue('             ')
    await signUpPage.buttonSubmit.scrollIntoView()
    await signUpPage.buttonSubmit.click()
})

When('he tries to complete the form with only obligatory datas and go to the homepage', async() => {
    await signUpPage.inputPassword.setValue('contraseña')
    await signUpPage.inputFirstName.click()
    await signUpPage.inputFirstName.setValue('Manolo')
    await signUpPage.inputLastName.click()
    await signUpPage.inputLastName.setValue('Arias')
    await signUpPage.inputAddress1.click()
    await signUpPage.inputAddress1.setValue('C/ Los ciervos')
    await signUpPage.inputCountry.selectByVisibleText('Australia')
    await signUpPage.inputState.click()
    await signUpPage.inputState.setValue('of america')
    await signUpPage.inputCity.click()
    await signUpPage.inputCity.setValue('Melburne')
    await signUpPage.inputZipcode.click()
    await signUpPage.inputZipcode.setValue('39140')
    await signUpPage.inputPhoneNumber.click()
    await signUpPage.inputPhoneNumber.setValue('685452145')
    await signUpPage.buttonSubmit.click()
    await homePage.home.click()
})

When('he tries to delete the account', async() => {
    await homePage.deleteAccount.click()
})

Then('he sees a success delete message', async() => {
    await expect(signUpPage.confirmationDeleteAccount).toHaveText('ACCOUNT DELETED!')
})

