const express = require("express");

const { login, register, getUserInfoFromToken } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

// router.get("/users", getUsers);
router.post("/register", register);
router.post("/login", login);
router.get("/getRole", authMiddleware, getUserInfoFromToken);

module.exports = router;
