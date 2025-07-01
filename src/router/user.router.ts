import express from "express";
import { createUser } from "../controller/user/post-user";
import { getUser } from "../controller/user/get-user";
import { getUserById } from "../controller/user/get-userById";
import { updateUser } from "../controller/user/put-user";
import { deleteUser } from "../controller/user/delete-user";

const userRouter = express.Router();
userRouter.post("/", createUser);
userRouter.get("/", getUser);
userRouter.get("/:userId", getUserById);
userRouter.put("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);



export default userRouter;
