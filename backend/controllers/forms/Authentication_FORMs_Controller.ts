import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { Authentication_Form_Model } from "../../models/auth/Authentication_Model";

export const authenticate_User = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password." });
    }

    const user = await Authentication_Form_Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // const token = jwt.sign(
    //   { id: user._id, email: user.email },
    //   process.env.JWT_SECRET!,
    //   {
    //     expiresIn: "1h",
    //   }
    // );

    res.cookie("token", user._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};
