// const path = require("path");

import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import exphbs from "express-handlebars";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv' 

import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import aboutRoutes from "./routes/about.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()

const port = process.env.PORT || 9222;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname));
app.use(express.static(path.join(__dirname, "public")))

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Action -> Dispatcher -> Function handler
app.get("/", (req, res) => {
  res.render("home");
});

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
