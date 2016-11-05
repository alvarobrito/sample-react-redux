import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.onSearch({
      description: e.target.value,
    });
  }

  render() {
    return (
      <div className="search">
        <input
          className="form-control"
          type="search"
          name="search"
          value={this.props.searchText}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
