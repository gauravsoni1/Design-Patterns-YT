import CartService from "./CartService";

class PaymentService {
    cartService: CartService;

    constructor() {
        this.cartService = CartService.getInstance();
    }

    payCartItems() {
        const cartItems = this.cartService.getCartItems();
        if (cartItems && cartItems.length > 0) {
            console.log(`Payment complete for the items ${cartItems}`);
        } else {
            console.log(`No items present in the cart ${cartItems}`);
        }
    }
}

export default PaymentService;