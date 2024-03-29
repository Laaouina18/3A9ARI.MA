import User from "../../models/User.js";
import { UserSchema } from "../../validation/JoiShema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { generateToken } from "../../utils/generateToken.js";
const register = async (req, res) => {
    try {
        const { error } = UserSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Un utilisateur avec cet e-mail existe déjà" });
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = new User(req.body);
        newUser.password = hashedPassword;
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" });
        }
        const token = generateToken(user);
		const userToken={
			_id:user._id,
			firstName:user.firstName,
			lastName:user.lastName,
			email:user.email,
			role:user.role,
			phone:user.phone,
			avatar:user.avatar,
			token:token
		}
        res.json(userToken);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { Login, register };
