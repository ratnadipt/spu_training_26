import { useState } from "react";

function AddTask({ handleData, add }) {
  let [formData, setFormData] = useState({
    id: 0,
    taskName: "",
    taskDescription: "",
    taskDate: "",
    status: false,
  });

  const handleSave = (e) => {
    e.preventDefault();
    handleData((cur) => [formData, ...cur]);
    add(formData);
  };

  const handleChange = (e) => {
    setFormData((cur) => {
      return { ...cur, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <h1>ADD NEW TASK</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="id">Task ID : </label>
          <input type="text" name="id" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="taskName">Task Name : </label>
          <input type="text" name="taskName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="taskDescription">Task Description : </label>
          <input type="text" name="taskDescription" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="taskDate">Task Date : </label>
          <input type="date" name="taskDate" onChange={handleChange} />
        </div>
        <div>
          <button type="reset">Clear</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
