class homePage {
    get home() {
        return $('a[href="/"]')
    }

    get login() {
        return $('a[href="/login"]')
    }

    get logout() {
        return $('a[href="/logout"]')
    }

    get deleteAccount() {
        return $('a[href="/delete_account"]')
    }

    get consentir() {
        return $('.fc-button-label')
    }

    get products() {
        return $('a[href="/products"]')
    }
}

export default new homePage