import _ from 'lodash';
import React, { Component } from 'react';
 
class Search extends Component {
  constructor(props) {
    super(props)
 
    this.onChange = this.onChange.bind(this); // binding this because onChange is called in another scope
    this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), 200); // debouncing function to 200ms and binding this
    // this.handleChange = this.handleChange.bind(this)
  }  
 
  onChange(event) {
    this.debouncedOnChange(event.target.value); // sending only the values not the entire event
  }
 
  debouncedOnChange(value) {
    this.search(value); // perform a search only once every 200ms
  }

  search(value) {
    this.props.onSearchChange(value)
  }

//   search = async (value) => {
//     const api_url = `http://api.tvmaze.com/search/shows?q=${value}`
//     const api_call = await fetch(api_url)
//     const data = await api_call.json()

//     data.sort()

//     console.log('from search - data', data) //
//     this.props.onSearchChange(data)
//   }
 
  render() {
    return (
      <div>
        <input onChange={this.onChange} />
      </div>
    );
  }
}
 
export default Search;

//   fetchData(value) {
//     fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
//       .then(res => res.json())
//       .then((data) => {
//           this.setState({
//               search: value,
//               shows: data
//           })
//       })
//   }

//   search(value) {
//       this.props.onSearchChange(value)
//   }
