import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt";

export async function signUpMiddleware(req, res, next) {
  try {
    const { userPassword, userEmail } = req.body;
    const checkEmail = await userModel.findOne({ userEmail });
    console.log(checkEmail);
    if (checkEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashPassword = await bcrypt.hash(userPassword, 15);
    req.userInfo = { userEmail, hashPassword };
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue in middleware", error: err });
  }
}

// login middleware

export async function loginMiddleware(req, res, next) {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await userModel.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "Email is not registered" });
    }

    // check password
    const checkPassword = await bcrypt.compare(userPassword, user.userPassword);
    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }
    req.userInfo = { user };
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue in middleware", error: err });
  }
}
