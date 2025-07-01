import { Response, Request } from "express";
import FoodCategoryModel from "../../model/foodCategory";
import FoodModel from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, image, price, category, ingredients } = req.body;
  try {
    const food = await new FoodModel({
      category: category,
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
