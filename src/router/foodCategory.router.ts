import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";
import { getFoodCategory } from "../controller/foodCategory/get-food-category";

const foodCategoryRouter = express.Router();
foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.get("/", getFoodCategory);

export default foodCategoryRouter;
