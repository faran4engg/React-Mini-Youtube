import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChange = event => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // TODO: need to call a callback from
    // parent component (App) so that we can change the state
    // and see the search result

    // TODO: Done
    this.props.onSearchBarFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
<div className="ui search">
  <div className="ui icon input">
    <input className="prompt" type="text" placeholder="Common passwords...">
    <i className="search icon"></i>
  </div>
</div>

*/
