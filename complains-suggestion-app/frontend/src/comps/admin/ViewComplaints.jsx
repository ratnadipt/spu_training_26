import axios from "axios";
import { useEffect, useState } from "react";

function ViewComplaints() {
  let [complaints, setComplaints] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/admin/complaints")
        .then((res) => {
          console.log(res);
          setComplaints(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>ALL COMPLAINTS</h1>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Complaint</th>
            <th>Date</th>
            <th>Status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr>
              <td>{complaint.id}</td>
              <td>{complaint.complaint}</td>
              <td>{complaint.date}</td>
              <td>{complaint.status}</td>
              <td>
                <button type="button" className="btn btn-secondary">
                  delete
                </button>
                <button type="button" className="btn btn-primary">
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewComplaints;
