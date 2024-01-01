import React from "react";
import NotesBodyForm from "./NotesBodyForm";
import NotesBodyContainer from "./NotesBodyContainer";

const NotesBody = ({
  onAddNote,
  notes,
  archivedNotes,
  onDelete,
  onArchive,
}) => {
  return (
    <div className="note-app__body">
      <NotesBodyForm addNote={onAddNote} />
      <NotesBodyContainer header={"Catatan Aktif"} notes={notes} onArchive={onArchive} onDelete={onDelete} />
      <NotesBodyContainer header={"Arsip"} notes={archivedNotes} onArchive={onArchive} onDelete={onDelete} />
    </div>
  );
};

export default NotesBody;
