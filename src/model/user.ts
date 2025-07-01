import { model, Schema } from "mongoose";

enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, required: true },
    isVerified: { type: Boolean },
    role: { type: String, required: true, enum: Object.values(UserRoleEnum) },
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);
