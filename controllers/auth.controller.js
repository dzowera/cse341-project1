import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

// User registration
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword
    });
    await newUser.save();

    // provide feedback to the client
    res.status(201).json({ message: "User registered successfully" },
      {
        user: {
          id: newUser._id,
          email: newUser.email,
          role: newUser.role,
          createdAt: newUser.createdAt
        }
      }
    );

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};