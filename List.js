import React from 'react';

function List({ taskList, handleEdit }) {
  return (
    <div>
      {taskList.map((task) => {
        const { id, title } = task;
        return (
          <article key={id}>
            <p>
              {title}
              <span>
                <span>X</span>
                <span onClick={() => handleEdit(id)}>E</span>
              </span>
            </p>
          </article>
        );
      })}
    </div>
  );
}

export default List;
