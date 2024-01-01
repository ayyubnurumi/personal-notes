import React from "react";
import NotesBodyDeleteButton from "./NotesBodyDeleteButton";
import NotesBodyArchiveButton from "./NotesBodyArchiveButton";
import { showFormattedDate } from "../utils";

const NotesBodyItem = ({ onDelete, onArchive, title, createdAt, body, id, archived }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <NotesBodyDeleteButton id={id} onDelete={onDelete} />
        <NotesBodyArchiveButton
          id={id}
          archived={archived}
          onArchive={onArchive}
        />
      </div>
    </div>
  );
};

export default NotesBodyItem;
