import React from "react";
import NotesHeaderSearch from "./NotesHeaderSearch";

const NotesHeader = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NotesHeaderSearch onSearch={onSearch} />
    </div>
  );
};

export default NotesHeader;
