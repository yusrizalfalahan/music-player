import express from "express";
import {
    getMusic, 
    getMusicById,
    createMusic,
    updateMusic,
    deleteMusic
} from "../controllers/controllerMusic.js";

const router = express.Router();

//initial
router.get('/', function(req, res, next) {
    res.render('index', {title: "Music Player"})
})
router.get('/artist/:id', getMusicById);
router.post('/artist', createMusic);
router.patch('/artist/:id', updateMusic);
router.delete('/artist/:id', deleteMusic);

export default router;