import Contact from '../models/contact.model.js';
import {getAllContacts, getContactById} from '../controllers/contactsControllers.js';
import express from 'express';
const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);


export default router;
