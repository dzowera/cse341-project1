import Business from "../model/business.model.js";

export const createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).send(business);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).send(businesses);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).send("Business not found");
    }
    res.status(200).send(business);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateBusinessById = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!business) {
      return res.status(404).send("Business not found");
    }

    res.status(200).send(business);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteBusinessById = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) {
      return res.status(404).send("Business not found");
    }
    res.status(200).send(business);
  } catch (error) {
    res.status(500).send(error);
  }
};
