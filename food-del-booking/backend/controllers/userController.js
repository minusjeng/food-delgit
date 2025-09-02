class UserController {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async createUser(req, res) {
        try {
            const user = new this.UserModel(req.body);
            await user.save();
            res.status(201).json({ message: "User created successfully", user });
        } catch (error) {
            res.status(400).json({ message: "Error creating user", error });
        }
    }

    async getUser(req, res) {
        try {
            const user = await this.UserModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: "Error retrieving user", error });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await this.UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "User updated successfully", user });
        } catch (error) {
            res.status(400).json({ message: "Error updating user", error });
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await this.UserModel.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: "Error deleting user", error });
        }
    }
}

export default UserController;