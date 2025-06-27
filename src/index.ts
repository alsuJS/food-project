import express, { Request, Response } from "express";
import { connectDb, db } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";

const app = express();
app.use(express.json());
app.use("/foodCategory", foodCategoryRouter)

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
