import { useEffect, useState } from "react";
import axios from "axios";
function ManageQuestions() {
  let [questions, setQuestions] = useState([]);
  let [formData, setFormData] = useState({
    id: 0,
    questionTitle: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/admin/get-question")
        .then((res) => {
          setQuestions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData(); // calling
  }, []);

  const addQuestion = async () => {
    await axios
      .post("http://localhost:3000/admin/add-question", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    addQuestion();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="que">
      <h2>Manage Questions</h2>
      <div className="que-form">
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="col">
              <input
                type="number"
                name="id"
                placeholder="Question ID"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="questionTitle"
                placeholder="Question"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="optionA"
                placeholder="Option A"
                onChange={handleChange}
              />
              <input
                type="text"
                name="optionC"
                placeholder="Option C"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="optionB"
                placeholder="Option B"
                onChange={handleChange}
              />
              <input
                type="text"
                name="optionD"
                placeholder="Option D"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="answer"
                placeholder="Answer"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <button type="reset">CLEAR</button>
              <button type="submit">ADD</button>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="que-list">
        <h2>All Questions</h2>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Question</th>
              <th>Opt A</th>
              <th>Opt B</th>
              <th>Opt C</th>
              <th>Opt D</th>
              <th>Ans</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((que) => (
              <tr key={que.id}>
                <td>{que.id}</td>
                <td>{que.questionTitle}</td>
                <td>{que.optionA}</td>
                <td>{que.optionB}</td>
                <td>{que.optionC}</td>
                <td>{que.optionD}</td>
                <td>{que.answer}</td>
                <td>
                  <button type="button">Update</button>
                  <button type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageQuestions;
