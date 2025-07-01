import { Response, Request } from "express";
import { UserModel } from "../../model/user";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find();

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
