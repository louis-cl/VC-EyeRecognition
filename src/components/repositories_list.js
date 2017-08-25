import React, {Component} from 'react';

import Repository from "./repository";

class RepositoriesList extends Component {

  constructor(props) {
    super(props);

    console.log(props.repositories);
    this.repositories = props.repositories.map((repository) => {
      return (
          <Repository key={repository.id} repository={repository}/>
      );
    });

    this.state = {
      selectedRepository: null
    };
  };

  render() {
    return (
        <ul className="scrollable collection l3 m6 s12">
          {this.repositories}
        </ul>
    );
  }
}

export default RepositoriesList;