const User = require("../models/User");
const { hashPassword, checkPassword } = require("../utils/passwordUtils");
const { generateToken, decodeToken } = require("../utils/tokenUtils");

const getUsers = async (_, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const register = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;
        const newUser = new User({ fullName, email, password, role });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Cet utilisateur n'existe pas" });

        const match = await checkPassword(password, user.password);
        if (!match) return res.status(401).json({ message: "Mot de passe incorrect" });

        const token = generateToken({ id: user._id, fullName: user.fullName, email, role: user.role })
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserInfoFromToken = async (req, res) => {
    try {
        const { id, role } = req.auth;
        res.status(200).json({ id, role });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getUsers, register, login, getUserInfoFromToken };