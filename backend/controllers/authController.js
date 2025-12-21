import { db } from "../config/firebase.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "egg_secret_key";

export const loginUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password)
      return res.status(400).json({ success: false, error: "Missing credentials" });

    const userRef = db.collection("users").doc(username);
    const userSnap = await userRef.get();

    if (!userSnap.exists)
      return res.status(404).json({ success: false, error: "User not found" });

    const user = userSnap.data();

    // ROLE CHECK
    if (user.role !== role) {
      return res.status(401).json({
        success: false,
        error: `You must select '${user.role}' role to login`,
      });
    }

    // TEMPORARY — PLAIN PASSWORD CHECK
    if (password !== user.password) {
      return res.status(401).json({ success: false, error: "Invalid password" });
    }

    const token = jwt.sign(
      { username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    const { password: _, ...userWithoutPassword } = user;

    return res.json({
      success: true,
      token,
      user: userWithoutPassword,
    });

  } catch (err) {
    console.error("loginUser error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
