import express from "express";
import router from "./routes/route.js";
import dbConnection from "./db/db.js";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT ||  8540
const BASE_URL = process.env.BASE_URL
const app = express()

app.use(cors())
app.use('/', router)

dbConnection()

// backend connection
app.listen(PORT, ()=>{console.log(`${BASE_URL}`)})