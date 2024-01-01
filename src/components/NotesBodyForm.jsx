import React, { Component } from "react";

export class NotesBodyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleCharCount: 0,
      maxTitleChars: 50,
    };
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }
  onTitleChange(e) {
    const titleValue = e.target.value;
    const titleCharCount = titleValue.length;

    if (titleCharCount <= this.state.maxTitleChars) {
      this.setState({ title: titleValue, titleCharCount });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const { title, body, titleCharCount, maxTitleChars } = this.state;
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmit}>
          <p className="note-input__title__char-limit">Sisa karakter: {maxTitleChars - titleCharCount}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required
            value={title}
            onChange={this.onTitleChange}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required
            value={body}
            onChange={this.onBodyChange}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesBodyForm;
