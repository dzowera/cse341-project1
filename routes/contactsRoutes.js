import {
  getAllContacts,
  getContactById,
  createContact,
  deleteContactById,
  updateContactById
} from '../controllers/contactsControllers.js';

import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     description: Retrieve a list of all contacts from the database
 *     responses:
 *       200:
 *         description: Contacts retrieved successfully
 */
router.get('/', getAllContacts);

/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     description: Retrieve a single contact using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact found
 *       404:
 *         description: Contact not found
 */
router.get('/:id', getContactById);

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     description: Add a new contact to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 example: "+265991234567"
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post('/', createContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     description: Remove a contact from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete('/:id', deleteContactById);

/**
 * @swagger
 * /api/contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     description: Update an existing contact using its ID
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
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 */
router.put('/:id', updateContactById);

export default router;
