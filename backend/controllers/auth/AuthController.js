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
        
        // Vérifier si l'utilisateur existe déjà
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Un utilisateur avec cet e-mail existe déjà" });
        }
        
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10); 
        
        // Créer un nouvel utilisateur avec toutes les données de req.body
        const newUser = new User(req.body);
        newUser.password = hashedPassword; // Remplacer le mot de passe non haché par le mot de passe haché
        
        // Sauvegarder le nouvel utilisateur dans la base de données
        await newUser.save();
        
        // Répondre avec les données de l'utilisateur créé
        res.status(201).json(newUser);
    } catch (error) {
        // Gérer les erreurs
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
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { Login, register };
