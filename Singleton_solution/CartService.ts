class CartService {
    private cartItems: string[] = [];
    private static cartServiceInstance: CartService;

    private constructor() {
        console.log("Cart service is being initialized !!!");
    }

    public static getInstance(){
        if (!this.cartServiceInstance){
            this.cartServiceInstance = new CartService();
        }
        return this.cartServiceInstance;
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