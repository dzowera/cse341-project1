import express from "express";
import {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusinessById,
  deleteBusinessById
} from "../controllers/businessControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/businesses:
 *   post:
 *     summary: Create a new business
 *     description: Add a new business to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: Inno Tech Solutions
 *               address:
 *                 type: string
 *                 example: Lilongwe, Malawi
 *               phone:
 *                 type: string
 *                 example: "+265991234567"
 *     responses:
 *       201:
 *         description: Business created successfully
 */
router.post("/", createBusiness);

/**
 * @swagger
 * /api/businesses:
 *   get:
 *     summary: Get all businesses
 *     description: Retrieve a list of all businesses
 *     responses:
 *       200:
 *         description: Businesses retrieved successfully
 */
router.get("/", getAllBusinesses);

/**
 * @swagger
 * /api/businesses/{id}:
 *   get:
 *     summary: Get a business by ID
 *     description: Retrieve a single business using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business found
 *       404:
 *         description: Business not found
 */
router.get("/:id", getBusinessById);

/**
 * @swagger
 * /api/businesses/{id}:
 *   put:
 *     summary: Update a business
 *     description: Update an existing business using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Business updated successfully
 *       404:
 *         description: Business not found
 */
router.put("/:id", updateBusinessById);

/**
 * @swagger
 * /api/businesses/{id}:
 *   delete:
 *     summary: Delete a business
 *     description: Remove a business from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business deleted successfully
 *       404:
 *         description: Business not found
 */
router.delete("/:id", deleteBusinessById);

export default router;
