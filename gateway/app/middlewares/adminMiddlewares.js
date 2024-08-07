const axios = require("axios");

const adminMiddleware = async (req, res, next) => {
    try {
        const response = await axios.get("http://auth:8081/getRole", {
            headers: {
                Authorization: "Bearer " + req.headers?.authorization?.split(" ")[1]
            }
        });
        
        const role = response.data?.role;
        if (role == "admin") {
            return next();
        }
        return res.status(403).json({ message: "Vous n'êtes pas autorisé." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message || "Error from middleware" })
    }
}

module.exports = adminMiddleware;