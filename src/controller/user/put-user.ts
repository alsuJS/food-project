import { Response, Request } from "express";
import { UserModel } from "../../model/user";

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { phoneNumber } = req.body;

  try {
    console.log("userId: ", userId);

    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        phoneNumber: phoneNumber,
      },
      { new: true }
    );

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error ", error });
  }
};
