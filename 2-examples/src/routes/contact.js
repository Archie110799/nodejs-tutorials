import express from 'express';

import { index } from '../app/controllers/ContactController.js';

const router = express.Router();

router.get('/', index);

export default router;