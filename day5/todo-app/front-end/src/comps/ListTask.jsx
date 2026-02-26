function ListTask({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <ul>
          <li>{task.id}</li>
          <li>{task.taskName}</li>
          <li>{task.taskDescription}</li>
          <li>{task.taskDate}</li>
          <li>{task.status}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListTask;
