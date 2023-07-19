import express from "express"; //frameworrk to create the api
import cors from "cors"; // library setup the rules between frontend and backend
import mongoose from "mongoose"; // for communication with database mongodb
import { userRouter } from "./routes/Users.js";

const app = express();

app.use(express.json()); // it will convert the data in json that we will sent from the fromtend
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://jitender:choudhary@cluster0.8dmzcg0.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server started"));

//model
// it is a description that how the collection will look like
