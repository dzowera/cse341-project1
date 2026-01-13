import {getAllContacts, getContactById, createContact, deleteContactById, updateContactById } from '../controllers/contactsControllers.js';
import express from 'express';
const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.delete('/:id', deleteContactById);
router.put('/:id', updateContactById);


export default router;
