import express from "express";
import {
    getMusic,
    showCreate,
    createMusic,
    showId,
    updateMusic,
    deleteMusic,
    uploadMusic,

} from "../controllers/controllerMusic.js";

const router = express.Router();



// form
router.get('/', getMusic)
router.get('/create', showCreate);
router.get('/:id/update', showId);
// upload
// app.post('/profile', upload.none(), function (req, res, next) {
//     // req.body contains the text fields
// })

//initial
router.post('/create', createMusic);
router.post('/update/:id', updateMusic);
router.get('/:id/delete', deleteMusic);

// upload file
router.post('/upload', uploadMusic)
export default router;