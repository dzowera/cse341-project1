import Contact from "../models/contact.model.js";

// GET all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().select("-__v"); // remove __v field
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
};

// GET single contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select("-__v");
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact" });
  }
};

// CREATE a new contact
export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    // Return only safe fields, not _id
    const { name, email, phone } = newContact;
    res.status(201).json({ 
      message: "Contact created successfully",
      contact: { name, email, phone } 
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact" });
  }
};

// DELETE a contact by ID
export const deleteContactById = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Only show the name instead of ID
    res.status(200).json({ message: `Contact "${deletedContact.name}" has been deleted` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact" });
  }
};

// UPDATE a contact by ID
export const updateContactById = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Return only safe fields
    const { name, email, phone } = updatedContact;
    res.status(200).json({ 
      message: "Contact has been updated",
      contact: { name, email, phone } 
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating contact" });
  }
};
