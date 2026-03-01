const Complaints = require("../model/Complaints");

const complaintsHandler = async (req, res) => {
  //logic
  await Complaints.create(req.body);
  res.send({ message: "Complaints Addedd Successfully!", status: true });
  res.end();
};

const allComplaintsHandler = async (req, res) => {
  //logic
  const data = await Complaints.find();
  res.send(data);
  res.end();
};

const getComplaintByIdHandler = async (req, ers) => {
  // logic
  const id = req.params.id;
  const data = Complaints.findOne({ id: id });
  res.send(data);
  res.end();
};

const deleteComplaintByIdHandler = async (req, res) => {
  // logic
  const id = req.params.id;
  await Complaints.deleteOne({ id: id });
  res.send({ message: "Complaints deleted successfully!", status: true });
  res.end();
};

const updateComplaintByIdHandler = async (req, res) => {
  // logic
  const id = req.params.id;
  await Complaints.updateOne(
    { id: id },
    { $set: { complaint: req.body.complaint, date: req.body.status } },
  );
  res.send({ message: "Complaint updated successfully!" });
  res.end();
};

const updateComplaintStatusByIdHandler = async (req, res) => {
  // Logic
  const id = req.params.cid;
  await Complaints.updateOne(
    { id: id },
    { $set: { status: req.params.status } },
  );
  res.send({ message: "Complaint status updated successfully!", status: true });
  res.end();
};

module.exports = {
  complaintsHandler,
  allComplaintsHandler,
  getComplaintByIdHandler,
  deleteComplaintByIdHandler,
  updateComplaintByIdHandler,
  updateComplaintStatusByIdHandler,
};
