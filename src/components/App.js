import React, { Component } from 'react';
import SearchInput from './SearchInput';
import PictureList from './PictureList';
import unsplashAuth from '../unsplashAuth';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pictures: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchTerm) {
    unsplashAuth.get('https://api.unsplash.com/search/photos/', {
      params: {
        query: searchTerm
      }
    })
    .then(res => {
      this.setState({ pictures: res.data.results})
    })
  }

  render() {
    return (
      <div className="container">
      <header className="display-4">Image Search</header>
      <SearchInput onSubmit={this.handleSearch}/>
      <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
}

export default App;
