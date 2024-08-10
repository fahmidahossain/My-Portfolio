import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import portfolioRoute from '../routes/protfolioRoute.js'; // Correct import path

const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect("mongodb://localhost:27017/Mern-Protfolio")
  .then(() => {
    console.log("MongoDb connection successful.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use('/api/portfolio', portfolioRoute);

console.log("hiiii");
