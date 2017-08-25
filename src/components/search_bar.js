import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }

  render() {
    return (
        <div className="search-bar">
          <div className="row container">
            <div className="input-field">
              <input placeholder="Search videos" className="search-field" type="text" value={this.state.searchTerm}
                     onChange={event => this.onInputChange(event.target.value)}/>
            </div>
          </div>
        </div>
    );
  }
}

export default SearchBar;