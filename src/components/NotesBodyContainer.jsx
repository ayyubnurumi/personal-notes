import React from "react";
import NotesBodyItem from "./NotesBodyItem";

const NotesBodyContainer = ({ notes, onDelete, onArchive, header }) => {
  return (
    <>
      <h2>{header}</h2>
      <div className="notes-list">
        {notes?.length < 1 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <NotesBodyItem
              key={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
};

export default NotesBodyContainer;
