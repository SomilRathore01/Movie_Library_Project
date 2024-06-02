import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import playlistRouter from "./routes/playlist-routes.js";


dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/playlist", playlistRouter);

// app.use("/",  (req, res, next) => {
//     res.send("Hello");
// });

mongoose.connect(
    `mongodb+srv://somilrathore01:${process.env.MONGODB_PASSWORD}@cluster0.xudctul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(() => 
    app.listen(3000, () => {
        console.log(`Connected to local host port ${3000}`);
    })
).catch(e => console.log(e));


//SClGD5yY5YIzbzN7