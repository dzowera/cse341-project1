import express from "express";
import {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusinessById,
  deleteBusinessById
} from "../controllers/businessControllers.js";

import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/businesses:
 *   post:
 *     summary: Create a new business
 *     description: Add a new business to the database (authentication required)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - phone
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
 *       401:
 *         description: Unauthorized
 */
router.post("/", protect, createBusiness);

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
 *     description: Update an existing business (authentication required)
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Business not found
 */
router.put("/:id", protect, updateBusinessById);

/**
 * @swagger
 * /api/businesses/{id}:
 *   delete:
 *     summary: Delete a business
 *     description: Delete a business (admin only)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (admin only)
 *       404:
 *         description: Business not found
 */
router.delete("/:id", protect, adminOnly, deleteBusinessById);

export default router;
