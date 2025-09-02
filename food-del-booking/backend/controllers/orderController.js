class OrderController {
    constructor(OrderModel) {
        this.OrderModel = OrderModel;
    }

    async createOrder(req, res) {
        try {
            const orderData = req.body;
            const newOrder = new this.OrderModel(orderData);
            await newOrder.save();
            res.status(201).json({ message: 'Order created successfully', order: newOrder });
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error: error.message });
        }
    }

    async getOrder(req, res) {
        try {
            const orderId = req.params.id;
            const order = await this.OrderModel.findById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error: error.message });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await this.OrderModel.find();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error: error.message });
        }
    }

    async updateOrder(req, res) {
        try {
            const orderId = req.params.id;
            const updatedData = req.body;
            const updatedOrder = await this.OrderModel.findByIdAndUpdate(orderId, updatedData, { new: true });
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
        } catch (error) {
            res.status(500).json({ message: 'Error updating order', error: error.message });
        }
    }

    async deleteOrder(req, res) {
        try {
            const orderId = req.params.id;
            const deletedOrder = await this.OrderModel.findByIdAndDelete(orderId);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error: error.message });
        }
    }
}

export default OrderController;