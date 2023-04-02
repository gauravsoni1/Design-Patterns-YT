class CartService {
    private static CartServiceInstance: CartService;
    private cartItems: string[] = [];

    private constructor() {
        console.log("Cart service is being initialized !!!");
    }

    public static getInstance() {
        if (!this.CartServiceInstance) {
            this.CartServiceInstance = new CartService();
        }
        return this.CartServiceInstance;
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