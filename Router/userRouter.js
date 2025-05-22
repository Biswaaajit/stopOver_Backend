import {
  loginController,
  signUpController,
} from "../Controller/userController.js";
import {
  loginMiddleware,
  signUpMiddleware,
} from "../Middleware/userMiddleware.js";

function userRouter(userRoute) {
  userRoute.post("/signup", signUpMiddleware, signUpController);
  userRoute.post("/login", loginMiddleware, loginController);
}

export default userRouter;
