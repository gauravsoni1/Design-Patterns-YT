import CartService from "./CartService";
import PaymentService from "./PaymentService";

class ShoppingApp {
    cartService: CartService;
    paymentService: PaymentService;

    constructor() {
        this.cartService = CartService.getInstance();
        this.paymentService = new PaymentService();
    }

    addProductToCart(item: string) {
        this.cartService.addItem(item);
    }

    checkoutItems() {
        const itemsInCart = this.cartService.getCartItems();
        console.log(`Items added to the cart are ${itemsInCart}`);
        this.paymentService.payCartItems();
    }
}

const app = new ShoppingApp();

app.addProductToCart("Iphone");
app.addProductToCart("Mac");

app.checkoutItems();

// The the Add to Cart button is clicked we call the method addProductToCart on all the pages
