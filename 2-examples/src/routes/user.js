import express from 'express';

import { index, create } from '../app/controllers/UserController.js';
import { body, validationResult } from "express-validator";

import auth from '../app/middleware/auth.js'
const router = express.Router();

router.get('/', auth, index);
router.post(
    '/',
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    create
);

export default router;