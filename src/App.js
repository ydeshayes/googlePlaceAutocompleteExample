import React, { Component } from 'react';

import GooglePlace from 'material-ui-places';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTextEverywhere: '',
      searchTextParis: ''
    };
  }

  onAutoCompleteEverywhereInputChangeFct = (e) => {
    this.setState({
      searchTextEverywhere: e.target.value
    });
  }

  onClickEverywhereLocationFct = (selectedData, searchedText, selectedDataIndex) => {
    this.setState({
      searchTextEverywhere: selectedData.description
    });
  }

  onAutoCompleteParisInputChangeFct = (e) => {
    this.setState({
      searchTextParis: e.target.value
    });
  }

  onClickParisLocationFct = (selectedData, searchedText, selectedDataIndex) => {
    this.setState({
      searchTextParis: selectedData.description
    });
  }

  render() {
    return (
      <div className="App">
        <h1>material-ui-places</h1>
        <h2>Search everywhere in the world</h2>
        <GooglePlace
          name="location"
          floatingLabelText="Address"
          searchText={this.state.searchTextEverywhere}
          onChange={this.onAutoCompleteEverywhereInputChangeFct}
          onNewRequest={this.onClickEverywhereLocationFct}
        />
        <h2>Search From Paris</h2>
        <GooglePlace
          name="location"
          location={{lat: 48.862725, lng: 2.287592}}
          radius={2000}
          floatingLabelText="Address"
          searchText={this.state.searchTextParis}
          onChange={this.onAutoCompleteParisInputChangeFct}
          onNewRequest={this.onClickParisLocationFct}
        />
      </div>
    );
  }
}

export default App;
