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
    }
}

export default new productsPage