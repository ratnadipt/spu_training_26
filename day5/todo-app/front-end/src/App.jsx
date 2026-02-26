import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./comps/AddTask";
import ListTask from "./comps/ListTask";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/get-all")
        .then((res) => {
          //console.log(res);
          setTodos(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);

  async function addNewTask(task) {
    await axios
      .post("http://localhost:3000/add", task)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <AddTask handleData={setTodos} add={addNewTask} />
      <hr />
      <ListTask tasks={todos} />
    </div>
  );
}

export default App;
