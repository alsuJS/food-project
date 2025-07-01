import { Response, Request } from "express";
import { UserModel } from "../../model/user";

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findById(userId);

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
