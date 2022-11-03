const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers/RequestError");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    console.log("Not Found")
    throw RequestError(404, "Not Found");
  }
  res.json(result);
};

module.exports = getContactById;
