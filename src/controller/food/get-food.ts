import { Response, Request } from "express";
import FoodModel from "../../model/food";

export const getFood = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.find();

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
