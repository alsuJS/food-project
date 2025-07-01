import { Response, Request } from "express";
import { UserModel } from "../../model/user";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, role } = req.body;
  try {
    const user = await new UserModel({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      role: role,
    }).save();
    res.status(200).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "api error", error });
  }
};
