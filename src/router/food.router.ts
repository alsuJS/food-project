import express from "express";
import { createFood } from "../controller/food/post-food";
import { getFood } from "../controller/food/get-food";
import { updateFood } from "../controller/food/put-food";
import { deleteFood } from "../controller/food/delete-food";
import { getFoodsWithCategories } from "../controller/food/getFoodsWithCategories";

const foodRouter = express.Router();
foodRouter.post("/", createFood);
foodRouter.get("/foods", getFood);
foodRouter.get("/:id", getFood);

foodRouter.get("/", getFoodsWithCategories);

foodRouter.put("/:foodId", updateFood);
foodRouter.delete("/:foodId", deleteFood);

export default foodRouter;
