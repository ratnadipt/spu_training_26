import axios from "axios";
import { useEffect, useState } from "react";

function Quiz() {
  let [questions, setQuestions] = useState([]);
  let [qNo, setQNo] = useState(0);
  let [userAnswer, setUserAnswer] = useState("");
  let [loading, setLoading] = useState(true);
  let [score, setScoree] = useState(0);

  useEffect(() => {
    async function getQuestions() {
      await axios
        .get("http://localhost:3000/admin/get-question")
        .then((res) => {
          console.log(res);
          setQuestions(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getQuestions();
  }, []);

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const setScore = () => {
    console.log(userAnswer == questions[qNo].answer);
    if (userAnswer === questions[qNo].answer) {
      setScoree((cur) => cur + 1);
    }
  };

  const previous = async () => {
    await setScore();
    setQNo((cur) => cur - 1);
  };
  const next = async () => {
    await setScore();
    setQNo((cur) => cur + 1);
    // score store
  };
  let [result, setResult] = useState("");
  const showScore = () => {
    setResult(<h1>Score = {score}</h1>);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading........</h1>
      ) : (
        <div className="quiz">
          <h3>{questions[qNo].questionTitle}</h3>
          <ul>
            <li>{questions[qNo].optionA}</li>
            <li>{questions[qNo].optionB}</li>
            <li>{questions[qNo].optionC}</li>
            <li>{questions[qNo].optionD}</li>
          </ul>
          <input
            type="text"
            placeholder="Your Answer"
            onChange={handleChange}
            required
          />
          <hr />
          <button type="button" onClick={previous}>
            Previous
          </button>
          <button type="button" onClick={showScore}>
            Submit
          </button>
          <button type="button" onClick={next}>
            Next
          </button>
        </div>
      )}

      <hr />
      {result}
    </div>
  );
}

export default Quiz;
