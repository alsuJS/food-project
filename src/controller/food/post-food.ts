import { Response, Request } from "express";
import FoodCategoryModel from "../../model/foodCategory";
import FoodModel from "../../model/food";
import mongoose, { mongo } from "mongoose";

type CreateFoodBody = {
  foodName: string;
  image: string;
  price: number;
  category: string;
  ingredients: string;
};

export const createFood = async (req: Request, res: Response) => {
  const { foodName, image, price, category, ingredients }: CreateFoodBody =
    req.body;

  const categorId = new mongoose.Types.ObjectId(category);
  try {
    const food = await new FoodModel({
      category: categorId,
      foodName: foodName,
      ingredients: ingredients,
      image: image,
      price: price,
    }).save();
    res.status(200).send({ success: true, food });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "api error", error });
  }
};
