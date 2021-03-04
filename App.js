import React, { useState } from 'react';
import List from './List';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing && taskName) {
      let newItem = { title: taskName, id: new Date().getTime().toString() };
      setTaskList([...taskList, newItem]);
      setTaskName('');
    } else if (isEditing && taskName) {
      setTaskList(
        taskList.map((i) => {
          if (i.id === editID) {
            return { ...i, title: taskName };
          }
          return i;
        })
      );
      setIsEditing(false);
      setEditID(null);
      setTaskName('');
    }
  };

  const handleNew = (e) => {
    setTaskName(e.target.value);
  };

  const handleEdit = (id) => {
    let itemToEdit = taskList.find((i) => i.id === id);
    setEditID(id);
    setIsEditing(true);
    setTaskName(itemToEdit.title);
  };

  const handleDelete = (id) => {
    const remainingItems = taskList.filter((i) => i.id !== id);
    setTaskList(remainingItems);
  };
  return (
    <main>
      <div id="container">
        <h1>To Do</h1>
        <form onSubmit={handleSubmit} action="">
          <input onChange={handleNew} type="text" value={taskName} />
          <button>Submit</button>
        </form>
        <section>
          <List
            taskList={taskList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </section>
      </div>
    </main>
  );
}

export default App;

/*
add necessary state
present a form
collect user input as a task
make task an object with an id and save it in a list
render the list (use a nested component)
add additional state for editing
build editing
build deleting
add state for alert
build alert and UX
use localStorage (get and set)

*/
