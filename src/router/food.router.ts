import express from "express";
import { createFood } from "../controller/food/post-food";
import { getFood } from "../controller/food/get-food";
import { updateFood } from "../controller/food/put-food";
import { deleteFood } from "../controller/food/delete-food";

const foodRouter = express.Router();
foodRouter.post("/", createFood);
foodRouter.get("/", getFood);
foodRouter.get("/:id", getFood);
foodRouter.put("/:foodId", updateFood);
foodRouter.delete("/:foodId", deleteFood);

export default foodRouter;
