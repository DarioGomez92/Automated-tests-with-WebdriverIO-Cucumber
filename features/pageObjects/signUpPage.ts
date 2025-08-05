class loginLocators {
    get inputName() {
        return $('input[type="text"]')
    }

    get inputEmail() {
        return $('input[data-qa="signup-email"]')
    }

    get buttonSignup() {
        return $('button[data-qa="signup-button"]')
    }

    get radioMr() {
        return $('#id_gender1')
    }

    get radioMrs() {
        return $('#id_gender2')
    }

    get inputPassword() {
        return $('input[type="password"]')
    }

    get inputDay() {
        return $('#days')
    }

    get inputMonth() {
        return $('#months')
    }

    get inputYear() {
        return $('#years')
    }

    get checkbox1() {
        return $('#newsletter')
    }

    get checkbox2() {
        return $('#optin')
    }

    get inputFirstName() {
        return $('#first_name')
    }

    get inputLastName() {
        return $('#last_name')
    }

    get inputCompany() {
        return $('#company')
    }

    get inputAddress1() {
        return $('#address1')
    }

    get inputAdderss2() {
        return $('#address2')
    }

    get inputCountry() {
        return $('#country')
    }

    get inputState() {
        return $('#state')
    }

    get inputCity() {
        return $('#city')
    }

    get inputZipcode() {
        return $('#zipcode')
    }

    get inputPhoneNumber() {
        return $('#mobile_number')
    }

    get buttonSubmit() {
        return $('button[type="submit"]')
    }

    get textResult() {
        return $('b')
    }

    get consentir() {
        return $('.fc-button-label')
    }

    get emailRegistrered() {
        return $('p')
    }

    get confirmationSecondPage() {
        return $('h2=Enter Account Information')
    }

    get buttonContinue() {
        return $('.continue-button')
    }

    get confirmationDeleteAccount() {
        return $('h2=Account Deleted!')
    }

    get randomName() {
        let name = ""
        const characters = "abcdefghijklmnopqrstuvwxyz"

        for(let i = 0; i < 10; i++) {
            const random = Math.floor(Math.random() * characters.length)
            name += characters[random]
        }

        return name
    }

    get randomEmail() {
        let email = ""
        const characters = "abcdefghijklmnopqrstuvwxyz"

        for(let i = 0; i < 10; i++) {
            const random = Math.floor(Math.random() * characters.length)
            email += characters[random]
        }
        email += "@ejemplo.com"

        return email
    }

    get randomLongName() {
        let longName = ""
        const characters = "abcdefghijklmnopqrstuvwxyz"

         for(let i = 0; i < 1000; i++) {
            const random = Math.floor(Math.random() * characters.length)
            longName += characters[random]
        }
        return longName
    }

    get randomShortEmail() {
        let shortEmail = "l@"
        const characters = "abcdefghijklmnopqrstuvwxyz"

        for(let i = 0; i < 1; i++) {
            const random = Math.floor(Math.random() * characters.length)
            shortEmail += characters[random]
        }
        return shortEmail
    }
}

export default new loginLocators