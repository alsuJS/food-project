import { Response, Request } from "express";
import FoodModel from "../../model/food";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { ingredients } = req.body;

  try {
    console.log("foodId: ", foodId);

    const food = await FoodModel.findByIdAndUpdate(
      foodId,
      {
        foodName: "tsuivan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfW6-8b5Ook7QVKk7y46ZwSy4tZ2ZQe-PdGDooSa92iOh-Gteye_CdzBSOQZrJ1dEwdmfId7H1usSZSP0-4-tHNFoUrpZWQ-3zSevrw",
        price: "12$",
        ingredients: ingredients,
        category: "685e1890ecc678052c05c6dc",
      },
      { new: true }
    );
    console.log({
      food,
    });

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
