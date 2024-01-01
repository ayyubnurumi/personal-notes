import React, { Component } from "react";

export class NotesHeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    this.onSearch = this.onSearch.bind(this);
    this.onReset = this.onSearch.bind(this);
  }
  onSearch(e) {
    const keyword = e.target.value;
    this.setState({ keyword }, () => {
      this.props.onSearch(keyword);
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari catatan ..."
          value={this.state.keyword}
          onChange={this.onSearch}
        />
      </div>
    );
  }
}

export default NotesHeaderSearch;
