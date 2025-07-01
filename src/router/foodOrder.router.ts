import { createFoodOrder } from "../controller/foodOrder/create-foodOrder.controller";
import express from "express";
import { getfoodOrder } from "../controller/foodOrder/get-foodOrder.controller";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createFoodOrder);

foodOrderRouter.get("/:orderId", getfoodOrder);

export default foodOrderRouter;
