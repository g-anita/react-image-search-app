import React, { Component } from 'react';


class SearchInput extends Component {
  constructor(props){
  super(props);
  this.state = {
    searchTerm: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  handleChange(e) {
    this.setState(
      {searchTerm: e.target.value }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;
