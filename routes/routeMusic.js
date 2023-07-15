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
    if (file.mimetype === "audio/mpeg" || file.mimetype.startsWith("image")) {
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
console.log(process.cwd() + "\\images")

// form
router.get('/', getMusic)
router.get('/create', showCreate);
router.get('/:id/update', showId);


//initial
//router.post('/create', upload.array("File"), createMusic);
router.post('/create', upload.fields([{
    name: 'File',
    maxCount: 1
}, {
    name: 'FileImage',
    maxCount: 1
}]), createMusic);
router.post('/update/:id', updateMusic);
router.get('/:id/delete', deleteMusic);

// upload file


export default router;