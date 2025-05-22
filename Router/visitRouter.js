import {
  addData,
  deleteData,
  getDataById,
  getVisitDataById,
} from "../Controller/visitController.js";
import { verify_JWT_Middleware } from "../Middleware/verifyMiddleware.js";

function visitRouter(visitRoute) {
  visitRoute.get("/data/:id", verify_JWT_Middleware, getVisitDataById);
  visitRoute.get("/visitData/:id", verify_JWT_Middleware, getDataById);
  visitRoute.post("/add", verify_JWT_Middleware, addData);
  visitRoute.delete("/delete/:id", verify_JWT_Middleware, deleteData);
}

export default visitRouter;
