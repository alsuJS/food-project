import { Response, Request } from "express";
import FoodCategoryModel from "../../model/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const foodCategory = await  FoodCategoryModel.find()
    res.status(200).send({success: true, foodCategory})
  } catch (error) {
    res.status(400).send({message: "api error", error})
  }
};
