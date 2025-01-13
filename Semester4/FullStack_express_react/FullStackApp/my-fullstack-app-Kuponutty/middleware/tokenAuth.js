import jwt from "jsonwebtoken";

const tokenAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Extract the Authorization header
  console.log("Authorization Header:", authHeader); // Log the raw Authorization header

  if (!authHeader) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  // Extract the token
  const token = authHeader.split(" ")[1];
  console.log("Extracted Token:", token); // Log the token after extraction

  if (!token) {
    return res.status(401).json({ message: "Access Denied. Token missing in header." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "callie_jwt_token");
    req.user = decoded; // Attach user info to the request object
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    console.error("Invalid or expired token:", err.message);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export default tokenAuth;