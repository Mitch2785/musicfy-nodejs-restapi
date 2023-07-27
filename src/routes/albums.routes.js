import {Router} from 'express';
import { getAlbums, getAlbum, createAlbums, updateAlbums, deleteAlbums } from "../controllers/albums.controllers.js";

const router = Router();

router.get('/albums', getAlbums);
router.get('/albums/:id', getAlbum);
router.post('/albums', createAlbums);
router.patch('/albums/:id', updateAlbums);
router.delete('/albums/:id', deleteAlbums);

export default router;

