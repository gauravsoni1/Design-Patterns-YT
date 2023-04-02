class CartService {
    private cartItems: string[] = []

    constructor() {
        console.log("Cart service is being initialized !!!");
    }

    addItem(item: string) {
        this.cartItems.push(item);
    }

    removeItem(item: string) {
        const itemIndex = this.cartItems.indexOf(item);
        this.cartItems.splice(itemIndex, 1);
    }

    getCartItems() {
        return this.cartItems;
    }

    clearCart() {
        this.cartItems = [];
    }
}

export default CartService;