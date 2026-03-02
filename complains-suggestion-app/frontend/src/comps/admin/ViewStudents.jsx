import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ViewStudents() {
  let [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/admin/student-list")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>ALL STUDENTS</h1>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>MOBILE</th>
            <th>DEPARTMENT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.sname}</td>
              <td>{student.city}</td>
              <td>{student.mobile}</td>
              <td>{student.department}</td>
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

export default ViewStudents;
