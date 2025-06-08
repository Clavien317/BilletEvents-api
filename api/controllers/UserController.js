import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";


const Inscription = async (req, res) => {
    try {
        const { nom, tel, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            nom: nom,
            tel: tel,
            email: email,
            mdp: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "Inscription réussie", user: savedUser });
    } catch (error) {
  console.error("Erreur dans Inscription:", error); // Ajout important
  res.status(500).json({ message: "Erreur lors de l'inscription", error: error.message || error });
}

};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const passwordMatch = await bcrypt.compare(password, user.mdp);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email,role: user.role },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: "Connexion réussie", token, user });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error: error.message });
    }
};

const GetAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error });
    }
};

const GetUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error });
    }
};

const UpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = req.body;

        if (data.mdp) {
            data.mdp = await bcrypt.hash(data.mdp, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ message: "Utilisateur mis à jour", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour", error });
    }
};

export { Inscription, Login, GetAllUsers, GetUserById, UpdateUser };
