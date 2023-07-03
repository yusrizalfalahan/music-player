import express from "express";
import cors from "cors";
import routeMusic from "./routes/routeMusic.js";
import bodyParser from "body-parser";

const app = express();
app.get(bodyParser.json())
app.set("view engine", "ejs")

app.use(cors());
app.use(express.json());
app.use('/', (routeMusic));

app.listen(5000, ()=> console.log('Server up and running...'));