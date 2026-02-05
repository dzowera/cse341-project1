import Contact from "../models/contact.model.js";


// GET all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().select("-__v");
    res.status(200).json(contacts);
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

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact" });
  }
};

// CREATE a new contact
export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    if (!newContact) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact data. Please check the documentation."
      });
    }

    const { firstName, lastName, email, favoriteColor, birthday } = newContact;

    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      contact: { firstName, lastName}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating contact",
      error: error.message
    });
  }
};

// DELETE a contact by ID
export const deleteContactById = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({
      message: `Contact "${deletedContact.firstName} ${deletedContact.lastName}" has been deleted`
    });
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

    const {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    } = updatedContact;

    res.status(200).json({
      message: "Contact has been updated",
      contact: {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating contact" });
  }
};
