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
  const [isError, setIsError] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setIsError({ show: true, msg: 'no blanks', type: 'reject' });
    } else if (isEditing && task) {
      taskList.map((i) => {
        if (i.id === editID) {
          return { ...task, i };
        }
      });
    } else {
      setTaskList([...taskList, task]);
    }
    setTask({});
  };

  const handleNew = (e) => {
    let newItem = {
      title: e.target.value,
      id: new Date().getTime().toString(),
    };
    setTask(newItem);
  };

  const handleEdit = (id) => {
    const targetItem = taskList.find((i) => i.id === id);
    setIsEditing(true);
    setEditID(targetItem.id);
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
          <List taskList={taskList} handleEdit={handleEdit} />
        </section>
      </div>
    </main>
  );
}

export default App;
