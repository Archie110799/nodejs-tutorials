// const path = require("path");

import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import exphbs from "express-handlebars";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv' 

import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
// import swaggerDocument from '../swagger.json' assert {type: "json"};
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

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: [path.join(__dirname, "/routes/*.js")],
};

const specs = swaggerJsdoc(options);

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);

app.use(
  '/api',
  swaggerUi.serve, 
  swaggerUi.setup(specs)
);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
