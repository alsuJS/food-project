import { model, Schema } from "mongoose";

export type FoodSchemaType = {
  foodName: string;
  image: string;
  ingredients: string;
  price: Number;
  category: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const foodSchema = new Schema<FoodSchemaType>({
  foodName: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: true,
  },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const FoodModel = model("Food", foodSchema);

export default FoodModel;
