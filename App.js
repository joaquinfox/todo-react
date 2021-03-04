import React, { useState, useEffect } from 'react';
import List from './List';

const getLocalStorage = () => {
  let taskList = localStorage.getItem('list');
  if (taskList) {
    return (taskList = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(getLocalStorage());
  const [isError, setIsError] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setIsError({ show: true, msg: 'no blanks', type: 'reject' });
    } else if (task && isEditing) {
      setTaskList(
        taskList.map((i) => {
          if (i.id === editID) {
            return { ...i, title: task };
          }
          return i;
        })
      );
      setTask('');
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { title: task, id: new Date().getTime().toString() };
      setTaskList([...taskList, newItem]);
      setTask('');
    }
  };

  const handleNew = (e) => {
    setTask(e.target.value);
  };

  const handleEdit = (id) => {
    const targetItem = taskList.find((i) => i.id === id);
    setIsEditing(true);
    setEditID(id);
    setTask(targetItem.title);
    console.log('handleEdit');
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
          <input type="text" onChange={handleNew} value={task} />
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
