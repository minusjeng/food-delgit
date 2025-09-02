class FoodController {
    constructor(FoodModel) {
        this.FoodModel = FoodModel;
    }

    async getAllFoods(req, res) {
        try {
            const foods = await this.FoodModel.find();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving foods', error });
        }
    }

    async getFoodById(req, res) {
        const { id } = req.params;
        try {
            const food = await this.FoodModel.findById(id);
            if (!food) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving food', error });
        }
    }

    async createFood(req, res) {
        const newFood = new this.FoodModel(req.body);
        try {
            const savedFood = await newFood.save();
            res.status(201).json(savedFood);
        } catch (error) {
            res.status(400).json({ message: 'Error creating food', error });
        }
    }

    async updateFood(req, res) {
        const { id } = req.params;
        try {
            const updatedFood = await this.FoodModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedFood) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(200).json(updatedFood);
        } catch (error) {
            res.status(400).json({ message: 'Error updating food', error });
        }
    }

    async deleteFood(req, res) {
        const { id } = req.params;
        try {
            const deletedFood = await this.FoodModel.findByIdAndDelete(id);
            if (!deletedFood) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(200).json({ message: 'Food deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting food', error });
        }
    }
}

export default FoodController;