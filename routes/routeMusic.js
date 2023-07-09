import express from "express";
import {
    getMusic,
    showCreate,
    createMusic,
    showId,
    updateMusic,
    deleteMusic,

} from "../controllers/controllerMusic.js";

const router = express.Router();



// form
router.get('/', getMusic)
router.get('/create', showCreate);
router.get('/:id/update', showId);
//initial
router.post('/create', createMusic);
router.patch('/:id/update', updateMusic);
router.delete('/:id/delete', deleteMusic);

export default router;