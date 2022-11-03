// const contacts = require("../../models/contacts.js");
const {Contact} = require("../../models/contact")

const listContacts = async (req, res) => {
  const result = await Contact.find({}, "name email");
  res.json(result);
};

module.exports = listContacts;
