class loginPage {
    get inputEmail() {
        return $('[data-qa="login-email"]')
    }

    get inputPassword() {
        return $('[data-qa="login-password"]')
    }

    get loginButton() {
        return $('[data-qa="login-button"]')
    }
}

export default new loginPage