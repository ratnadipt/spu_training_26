import { useEffect, useState } from "react";
import axios from "axios";

function ViewSuggestions() {
  let [suggestions, setSuggestion] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/admin/suggestions")
        .then((res) => {
          setSuggestion(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>ALL SUGGESTIONS</h1>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Suggestions</th>
            <th>Date</th>
            <th>Status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((suggestion) => (
            <tr key={suggestion.id}>
              <td>{suggestion.id}</td>
              <td>{suggestion.suggestion}</td>
              <td>{suggestion.date}</td>
              <td>{suggestion.status}</td>
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
export default ViewSuggestions;
