const { decodeToken } = require("../utils/tokenUtils");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        const user = decodeToken(token);
        req.auth = {
            id: user.id,
            role: user.role
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: "Non autorisé" });
    }
}

module.exports = authMiddleware;