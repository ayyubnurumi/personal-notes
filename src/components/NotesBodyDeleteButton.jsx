import React from "react";

const NotesBodyDeleteButton = ({ id, onDelete }) => {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default NotesBodyDeleteButton;
