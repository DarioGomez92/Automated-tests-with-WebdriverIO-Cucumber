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

    get cart() {
        return $('a[href="/view_cart"]')
    }

    get inputSubscription() {
        return $('#susbscribe_email')
    }

    get buttonSubscription() {
        return $('#subscribe')
    }

    get successMessageSubscription() {
        return $('.alert-success.alert')
    }

    get homeImg() {
        return $('[src="/static/images/home/logo.png"]')
    }

    get buttonScrollUp() {
        return $('#scrollUp')
    }
}

export default new homePage