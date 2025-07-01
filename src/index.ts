import express, { Request, Response } from "express";
import { connectDb, db } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import foodOrderRouter from "./router/foodOrder.router";
import userRouter from "./router/user.router";

const app = express();
app.use(express.json());
app.use("/foodCategory", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/order",foodOrderRouter)
app.use("/user", userRouter)

// app.get("/", (req: Request, res: Response) => {
//   const response = db.collection("food-project").find();

//   res.send("ssss");
// });

// app.post("/", async(req: Request, res: Response) => {
//     const {food} = req.body;
//   const response =await db.collection("food-project").insertOne({food});

//   res.json(response);
// });

app.listen(4200, async () => {
  await connectDb();
  console.log(`Example http://localhost:4200/`);
});
