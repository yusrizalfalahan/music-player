import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


import routeMusic from "./routes/routeMusic.js";


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get(bodyParser.json())



app.use(express.static('/uploads'));
app.use('/uploads', express.static('uploads'));

app.set("view engine", "ejs")
app.set("views", "views")




app.use(cors());
app.use(express.json());
app.use('/', routeMusic);

app.listen(5000, () => console.log('Server up and running...'));