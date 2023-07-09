import express from "express";
import {
    getMusic,
    showCreate,
    createMusic,
    showUpdate,
    updateMusic,
    deleteMusic,

} from "../controllers/controllerMusic.js";

const router = express.Router();



// form
router.get('/', getMusic)
router.get('/create', showCreate);
router.get('/:id/update', showUpdate);
//initial
router.post('/create', createMusic);
router.patch('/:id', updateMusic);
router.delete('/:id', deleteMusic);

export default router;