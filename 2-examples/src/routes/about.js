import express from 'express';

import { index, show } from '../app/controllers/AboutController.js';

const router = express.Router();

router.put('/:slug', show);
router.delete('/:slug', show);
router.post('/:slug', show);
router.get('/:slug', show);
router.use('/', index);

export default router;
