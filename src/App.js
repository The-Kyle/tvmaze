import React, { Component } from 'react';
import './w3.css';
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import ShowDisplay from './components/ShowDisplay'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      search: null,
      selectedSearchResult: null,
      searchResultsCast: [], //added for cast retrieval
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchResultSelect = this.handleSearchResultSelect.bind(this)
  }

  handleChange(e) {
    this.fetchData(e)
  }

  handleSearchResultSelect(value) {
    //when click on each show in the search results lists
    this.setState({ 
      search: 'this.state.search',
      selectedSearchResult: value})
  }

  fetchData(value) {
    fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
      .then(res => res.json())
      .then(json => this.setState({ search: value, selectedSearchResult: null, searchResults: json }))
      .catch(err => console.log(err))
  }

  search(value) {
      this.props.onSearchChange(value)
  }

  render() {
    return (
      <div>
        <div className="w3-sidebar w3-light-grey w3-bar-block w3-card-4" style={{ width:'20%' }}>
          <img style={{width:'100%'}} src="https://static.tvmaze.com/images/tvm-header-logo.png" alt='' />
          <Search shows={this.state.shows} onSearchChange={this.handleChange} />
          <SearchResults searchResults={this.state.searchResults} onSelect={this.handleSearchResultSelect} />
        </div>         

        <div style={{ marginLeft:'20%' }}>
          <div className="w3-container">
            {
            this.state.selectedSearchResult !== null &&
              <ShowDisplay show={ this.state.searchResults[this.state.selectedSearchResult].show } />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
