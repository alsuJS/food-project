import { Response, Request } from "express";
import FoodModel from "../../model/food";

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const food = await FoodModel.findByIdAndDelete(foodId);

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
