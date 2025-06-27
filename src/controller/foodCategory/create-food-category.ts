import { Response, Request } from "express";
import FoodCategoryModel from "../../model/foodCategory";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const foodCategory = await new FoodCategoryModel({
      categoryName: categoryName,
    }).save();
    res.status(200).send({ success: true, foodCategory });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "api error", error });
  }
};
