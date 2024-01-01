import React, { Component } from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData } from "../utils";

export class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  handleArchive(noteId) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === noteId ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  handleDelete(noteId) {
    const notes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes });
  }

  handleSearch(keyword) {
    this.setState({
      searchKeyword: keyword,
    });
  }

  render() {
    const { notes, searchKeyword } = this.state;

    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const nonArchivedNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <>
        <NotesHeader onSearch={this.handleSearch} />
        <NotesBody
          notes={nonArchivedNotes}
          archivedNotes={archivedNotes}
          onAddNote={this.handleAddNote}
          onArchive={this.handleArchive}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default NotesApp;
