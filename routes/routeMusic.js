import express from "express";
import {
    getMusic,
    showCreate,
    createMusic,
    showId,
    updateMusic,
    deleteMusic,


} from "../controllers/controllerMusic.js";
import multer from "multer";
const fileFilter = (req, file, cb) => {
    console.log(file.mimetype)
    if (file.mimetype === "audio/mpeg") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "\\uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-ryzal-${file.originalname}`);
    },
});

const upload = multer({
    //dest: process.cwd() + "\\uploads",
    storage,
    fileFilter
});
const router = express.Router();

console.log(process.cwd() + "\\uploads")

// form
router.get('/', getMusic)
router.get('/create', showCreate);
router.get('/:id/update', showId);
// upload
// app.post('/profile', upload.none(), function (req, res, next) {
//     // req.body contains the text fields
// })

//initial
router.post('/create', upload.array("File"), createMusic);
router.post('/update/:id', updateMusic);
router.get('/:id/delete', deleteMusic);

// upload file


export default router;