import { Router } from "express";
import { index } from "./controller.js";

const testRouter = Router();

testRouter.route("/").get(index);
testRouter.route("/login").post(login);
testRouter.route("/singup").post(singup);
testRouter.route("/show").get(show);
testRouter.route("/reset").post(reset);
testRouter.route("/update").put(id);
testRouter.route("/dele").delete(id);


export default testRouter;
