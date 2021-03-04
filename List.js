import React from 'react';
function List({ taskList, handleEdit }) {
  return (
    <div>
      {taskList.map((i) => {
        const { id, title } = i;
        return (
          <article key={id}>
            {title}
            <span className="button-group">
              <button
                onClick={() => handleEdit(id)}
                className="action-buttons"
                id="edit-button"
              >
                E
              </button>
              <button className="action-buttons" id="delete-button">
                D
              </button>
            </span>
          </article>
        );
      })}
    </div>
  );
}

export default List;
