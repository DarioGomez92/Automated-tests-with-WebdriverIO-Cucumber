class homePage {
    get inputHome() {
        return $('a[href="/"]')
    }

    get inputLogin() {
        return $('a[href="/login"]')
    }

    get inputLogout() {
        return $('a[href="/logout"]')
    }

    get inputDeleteAccount() {
        return $('a[href="/delete_account"]')
    }
}

export default new homePage