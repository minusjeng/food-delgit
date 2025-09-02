class CartController {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }

    async addToCart(req, res) {
        try {
            const { userId, foodId, quantity } = req.body;
            const cartItem = await this.cartModel.create({ userId, foodId, quantity });
            res.status(201).json(cartItem);
        } catch (error) {
            res.status(500).json({ message: 'Error adding to cart', error });
        }
    }

    async getCart(req, res) {
        try {
            const { userId } = req.params;
            const cartItems = await this.cartModel.find({ userId });
            res.status(200).json(cartItems);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving cart', error });
        }
    }

    async removeFromCart(req, res) {
        try {
            const { userId, foodId } = req.params;
            await this.cartModel.deleteOne({ userId, foodId });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error removing from cart', error });
        }
    }
}

export default CartController;