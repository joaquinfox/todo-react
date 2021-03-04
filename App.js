import React, { useState, useEffect } from 'react';
import List from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState(getLocalStorage());
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

  // const handleEdit = (id, editedTask) => {
  //   let editedTaskList = taskList;
  // };
  // const handleDelete = (id) => {
  //   let remainingTasks = taskList.filter((task) => task.id !== id);
  //   setTaskList(remainingTasks);
  //   console.log(taskList);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsError(false);
  //   }, 5000);
  // });

  return (
    <main>
      <div className="container">
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleNew} value={task.title} />
          <button>+</button>
        </form>
        <section id="todo">
          <List />
        </section>
      </div>
    </main>
  );
}

export default App;
