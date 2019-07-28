import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <div className="field">
          <label className="label">Search Video</label>
          <input
            type="text"
            name="term"
            onChange={this.onInputChange}
            value={this.state.term}
            className="input"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
