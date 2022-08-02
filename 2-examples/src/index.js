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
import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import aboutRoutes from "./routes/about.js";

import cookieParser from 'cookie-parser'

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

// Swagger
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


// Router
app.use('/user', userRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);

app.use(
  '/api',
  swaggerUi.serve, 
  swaggerUi.setup(specs)
);


//Cookie
app.use(cookieParser());
// app.use(cookieParser(process.env.COOKIE_SECRET));
// Chúng ta thêm một secret key vào nhằm để cho cookie nó mã hoá. 
// Sau đó chúng ta không thể sử dụng req.cookies để lấy như cách trên 
// mà chúng ta sẽ lấy những cookie mã hoá bằng req.signedCookies. 
// Nó không khác gì nhưng Cookie sẽ vẫn hiển thị, 
// nhưng nó có chữ ký, vì vậy nó có thể phát hiện xem khách hàng có sửa đổi cookie hay không. 

app.get('/setCookie', (req, res)=> {
    res.cookie('sites', 'manhph.com');
    // res.cookie('sitesSecurity', 'manhph.com', {signed: true})
    res.json({ok: 1})
})

app.get('/getCookie', (req, res)=> {
    console.log('[ANONY] getCookie::::', req.cookies); 
    console.log('[ANONY] getCookie::::signedCookies::::',req?.signedCookies?.sitesSecurity)
    res.json({cookies: req.cookies, signedCookies: req?.signedCookies})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
