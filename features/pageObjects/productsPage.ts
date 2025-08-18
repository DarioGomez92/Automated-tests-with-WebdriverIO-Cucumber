class productsPage {
    get womenCategory() {
        return $('a[href="#Women"]')
    }

    get womenTopsCategory() {
        return $('a[href="/category_products/2"]')
    }

    get womenTop() {
        return $('p=Lace Top For Women')
    }

    get menCategory() {
        return $('a[href="#Men"]')
    }

    get menJeansCategory() {
        return $('a[href="/category_products/6"]')
    }

    get menJean() {
        return $('p=Grunt Blue Slim Fit Jeans')
    }

    get kidCategory() {
        return $('a[href="#Kids"]')
    }

    get kidDressCategory() {
        return $('a[href="/category_products/4"]')
    }

    get kidDress() {
        return $('p=Blue Cotton Indie Mickey Dress')
    }

    get product1() {
        return $('a[data-product-id="16"]')
    }

    get product2() {
        return $('a[data-product-id="14"]')
    }

    get product3() {
        return $('a[data-product-id="22"]')
    }

    get product4() {
        return $('a[data-product-id="33"]')
    }

    get product5() {
        return $('a[data-product-id="43"]')
      
    get madameBrands() {
        return $('a[href="/brand_products/Madame"]')
    }

    get madameDress() {
        return $('p=Rose Pink Embroidered Maxi Dress')
    }

    get babyhugBrands() {
        return $('a[href="/brand_products/Babyhug"]')
    }

    get babyhugTop() {
        return $('p=Sleeves Printed Top - White')
    }

    get bibaBrands() {
        return $('a[href="/brand_products/Biba')
    }

    get bibaDress() {
        return $('p=Rust Red Linen Saree')
    }

    get viewWomenTop() {
        return $('a[href="/product_details/8"]')
    }

    get detailsWomenProduct() {
        return $('span=Rs. 700')
    }

    get viewMenJean() {
        return $('a[href="/product_details/35')
    }

    get viewButtonCart() {
        return $('.btn.btn-default.cart')
    }

    get inputNameMessage() {
        return $('#review-form #name')
    }

    get inputEmailMessage() {
        return $('#review-form #email')
    }

    get inputTextareaMessage() {
        return $('#review')
    }

    get spanSuccessMessage() {
        return $('span=Thank you for your review.')
    }

    get viewDetailsProduct() {
        return $('a[href="/product_details/42"]')
    }

    get buttonSubmitMessage() {
        return $('#button-review')
    }
}

export default new productsPage