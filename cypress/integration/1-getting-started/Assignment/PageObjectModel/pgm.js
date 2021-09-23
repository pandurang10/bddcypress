class Login{
    url(){
        cy.visit("https://shop.demoqa.com/")
    }
    dismissnote(){
        cy.get('.woocommerce-store-notice__dismiss-link').click()
    }
    myaccount(){
        cy.get('.pull-right > :nth-child(2) > a').click()
        cy.scrollTo(0, 500) // Scroll the window 500px down
    }
    loggInBtn(){
        cy.get(':nth-child(3) > .woocommerce-button').click()
    }
    search(){
        cy.get('.noo-search').click()
    }
    product(){
        cy.scrollTo(0, 200)
        cy.get('.post-1497 > .noo-product-inner > h3 > a').click()
    }
    addcart(){
        cy.get('.single_add_to_cart_button').click()
    }
    shopcart(){
        cy.get('.cart-name-and-total').click()
    }
    validateOrder(){
        cy.get('strong > .woocommerce-Price-amount > bdi').should("have.text","₹15.00")
    }
    proceed(){
        cy.scrollTo(0, 500)
        cy.get('.wc-proceed-to-checkout > .checkout-button').click()
    }
    placeorder(){
        cy.scrollTo(0, 900)
        cy.get('#place_order').click()
    }
    proceed(){
        
    }
}
export default Login
