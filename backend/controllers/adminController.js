import { db } from "../config/firebase.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password)
      return res.status(400).json({ success: false, error: "Missing fields" });

    const hashed = await bcrypt.hash(password, 10);

    await db.collection("users").doc(username).set({
      username,
      password: hashed,
      role: role || "Viewer",
      createdAt: new Date()
    });

    return res.json({ success: true, message: "User created successfully" });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
