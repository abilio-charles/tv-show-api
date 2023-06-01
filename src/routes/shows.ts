import express from 'express';
import * as showsController from '../controllers/showsController';

const router = express.Router();

router.post('/shows', showsController.createShow);
router.get('/shows/:title', showsController.getShowsByTitle);

export default router;
