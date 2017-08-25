import React, {Component} from 'react';

import _ from 'lodash';
import axios from 'axios';

import SearchBar from "./search_bar";
import RepositoriesList from "./repositories_list";

class RepositoriesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      filteredRepositories: []
    };

    axios.get('https://api.github.com/users/' + this.PROFILE_NAME + '/repos')
        .then(data => {
          this.setState({
            repositories: data.data,
            filteredRepositories: data.data
          });
        });
  }

  PROFILE_NAME = 'JosepRivaille';

  repositorySearch(searchTerm) {
    this.setState({
      filteredRepositories: searchTerm
    })
  }

  render() {
    const repositories = this.state.filteredRepositories;

    const limitSearch = _.debounce(searchTerm => {
      this.repositorySearch(searchTerm);
    }, 300);

    if (!repositories.length) {
      return <p>Fetching data...</p>;
    } else {
      return (
          <div className="section">
            <SearchBar onSearchTermChange={limitSearch}/>
            <RepositoriesList repositories={repositories}/>
          </div>
      );
    }
  }
}

export default RepositoriesSection;