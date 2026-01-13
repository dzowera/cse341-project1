import Contact from '../models/contact.model.js';
import {getAllContacts, getContactById, createContact} from '../controllers/contactsControllers.js';
import express from 'express';
const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);


export default router;
