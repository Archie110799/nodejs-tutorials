import express from "express";

import { index, show } from "../app/controllers/AboutController.js";

const router = express.Router();

router.put("/:slug", show);
router.delete("/:slug", show);
router.post("/:slug", show);
router.get("/:slug", show);
router.use("/", index);

/**
 * @swagger
 * /about/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 */
router.get("/:id", function (req, res) {
  //...
});

/**
 * @swagger
 * /about:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 */
router.post("/", show);

/**
 * @swagger
 * /about/v1/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         ...
 */
router.get("/:id", function (req, res) {
  //...
});

/**
 * @swagger
 * /about/v1:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *     responses:
 *       201:
 *         ...
 */
router.post("/", function (req, res) {
  // ...
});

/**
 * @swagger
 * /about/{id}:
 *  delete:
 *    description: Use to delete a record
 *    responses:
 *      '200':
 *        description: A successful response
 */ router.route("/:id").delete((req, res) => {
  res.sendStatus(204);
  //   About.destroy({ where: req.params })
  //     .then((result) => res.sendStatus(204))
  //     .catch((error) => {
  //       res.status(204).json({ msg: error.message });
  //     });
});

/**
 * @swagger
 * /about/v2:
 *   post:
 *     summary: Create a JSONPlaceholder about.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewAbout'
 *     responses:
 *       201:
 *         ...
 */
router.post("/", function (req, res) {
  // ...
});

export default router;
