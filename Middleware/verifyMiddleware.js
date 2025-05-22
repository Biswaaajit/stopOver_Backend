import jwt from "jsonwebtoken";

export function verify_JWT_Middleware(req, res, next) {
  try {
    const auth = req.headers["authorization"];
    const token = auth && auth.split(" ").at(1);
    const isVerified = jwt.verify(token, "stopOver");
    if (!isVerified) {
      return res.status(400).json({ message: "Session expired!!!" });
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Issue during JWT verification", error: err });
  }
}
