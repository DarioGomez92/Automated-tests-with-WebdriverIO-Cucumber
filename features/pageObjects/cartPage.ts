class cartPage {
    get successAdd() {
        return $('h4=Added!')
    }

    get cartProductInfo() {
        return $('#cart_info_table')
    }

    get buttonContinueShopping() {
        return $('.btn.btn-success.close-modal.btn-block')
    }

    get buttonViewCart() {
        return $('u=View Cart')
    }

    get buttonCheckout() {
        return $('.btn.btn-default.check_out')
    }

    get infoRegisterOrLogin() {
        return $('p=Register / Login account to proceed on checkout.')
    }

    get addresssDetails() {
        return $('h2=Address Details')
    }

    get buttonPlaceOrder() {
        return $('a[href="/payment"]')
    }

    get inputNameOnCard() {
        return $('[data-qa="name-on-card"]')
    }

    get inputCardNumber() {
        return $('[data-qa="card-number"]')
    }

    get inputCvc() {
        return $('[data-qa="cvc"]')
    }

    get inputExpirationMonth() {
        return $('[data-qa="expiry-month"]')
    }

    get inputExpirationYear() {
        return $('[data-qa="expiry-year"]')
    }

    get buttonPayAndConfirm() {
        return $('[data-qa="pay-button"]')
    }

    get confirmationMessage() {
        return $('p=Congratulations! Your order has been confirmed!')
    }

    get buttonDownloadInvoice() {
        return $('a[href="/download_invoice/500"]')
    }
}

export default new cartPage

//npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@prueba"