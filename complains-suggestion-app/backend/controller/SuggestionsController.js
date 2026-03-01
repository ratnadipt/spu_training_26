const Suggestion = require("../model/Suggestios");

const suggestionsHandler = async (req, res) => {
  //logic
  await Suggestion.create(req.body);
  res.send({ message: "Suggestions added successfully!", status: true });
  res.end();
};

const allSuggestionsHandler = async (req, res) => {
  //logic
  const data = Suggestion.find();
  res.send(data);
  res.end();
};

const getSuggestionByIdHandler = async (req, ers) => {
  // logic
  const id = req.params.id;
  const data = await Suggestion.findOne({ id: id });
  res.send(data);
  res.end();
};

const deleteSuggestionByIdHandler = async (req, res) => {
  // logic
  const id = req.params.id;
  await Suggestion.deleteOne({ id: id });
  res.send({ message: "Suggestion deleted successfully!", status: true });
  res.end();
};

const updateSuggestionByIdHandler = async (req, res) => {
  // logic
  const id = req.params.id;
  await Suggestion.UpdateOne(
    { id: id },
    { $set: { suggestion: req.body.suggestion, date: req.body.date } },
  );
  res.send({ message: "Suggestion updated successfully!", status: true });
  res.end();
};

const updateSuggestionStatusByIdHandler = async (req, res) => {
  // Logic
  const id = req.params.sid;
  const status = req.params.status;
  await Suggestion.UpdateOne({ id: id }, { $set: { status: status } });
  res.send({
    message: "Suggestion  status updated successfully!",
    status: true,
  });
  res.end();
};

module.exports = {
  suggestionsHandler,
  allSuggestionsHandler,
  getSuggestionByIdHandler,
  deleteSuggestionByIdHandler,
  updateSuggestionByIdHandler,
  updateSuggestionStatusByIdHandler,
};
