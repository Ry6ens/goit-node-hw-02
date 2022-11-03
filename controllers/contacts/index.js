const listContacts = require("./listContacts");
const getContactById = require("./getContactById.js");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContact = require("./removeContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
  updateStatusContact,
};
