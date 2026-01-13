import Contact from "../models/contact.model.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact" });
  }
};

export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ message: "Contact created successfully with ID: " + newContact._id });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact" });
  }
}