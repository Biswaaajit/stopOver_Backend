import userModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";

export async function signUpController(req, res) {
  try {
    const { userEmail, hashPassword } = req.userInfo;
    const { userName, userImage } = req.body;
    const newUser = await userModel.create({
      userEmail,
      userName,
      userPassword: hashPassword,
      userImage,
    });
    return res.status(201).json({ message: "New user created", newUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}

// login controller

export async function loginController(req, res) {
  try {
    const { user } = req.userInfo;
    const { userEmail } = user;
    const token = jwt.sign({ userEmail }, "stopOver");
    return res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}
