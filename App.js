import React, { useState, useEffect } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    console.log(task.name.length);
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask({});
  };

  const handleNew = (e) => {
    let newItem = {
      name: e.target.value,
      id: new Date().getTime().toString(),
    };
    setTask(newItem);
  };

  const handleEdit = (id, editedTask) => {
    let editedTaskList = taskList;
  };
  const handleDelete = (id) => {
    let remainingTasks = taskList.filter((task) => task.id !== id);
    setTaskList(remainingTasks);
    console.log(taskList);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 5000);
  });

  return (
    <main>
      <div className="container">
        <h1>Todo</h1>
        {isError && <p className="warning">No empty entries please.</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleNew} value={task.name} />
          <button>+</button>
        </form>
        <section id="todo">
          {taskList.map((i) => {
            const { name, id } = i;
            return (
              <li key={id}>
                {name}
                <span id="button-container">
                  <span onClick={() => handleDelete(id)}>X</span>
                  <span>E</span>
                </span>
              </li>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
