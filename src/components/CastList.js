import React, {Component} from 'react';
import _ from 'lodash';

class CastList extends Component {
    constructor(props) {
        super(props)
        this.state = { searchResultsCast: null }
     
        this.onChange = this.onChange.bind(this); // binding this because onChange is called in another scope
        this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), 200); // debouncing function to 200ms and binding this
        // this.handleChange = this.handleChange.bind(this)
    }  
     
    onChange(event) {
        // this.debouncedOnChange(event.target.value); // sending only the values not the entire event
        this.debouncedOnChange(this.props.id);
    }
    
    debouncedOnChange(value) {
        this.search(value); // perform a search only once every 200ms
    }

    search(value) {
        fetch(`http://api.tvmaze.com/shows/${value}/cast`)
          .then(res => res.json())
          .then(json => this.setState({ searchResultsCast: json }))
          .catch(err => console.log(err))
    }

    // see if I can fetch the castlist within this component.
    // fetchCast(id) {
    //     fetch(`http://api.tvmaze.com/shows/${id}/cast`)
    //       .then(res => res.json())
    //       .then(json => this.setState({ searchResultsCast: json }))
    //       .catch(err => console.log(err))

    //     console.log('reached fetchCast within CastList!')
    //     console.log(this.state.searchResultsCast? this.state.searchResultsCast:'Not Yet')
    // }

    //Try to use conditional rendering, because of the <button> 
    render() {
        if (!this.state.searchResultsCast) {
            return (
                <div>
                    <button type="button" onClick={this.onChange}>Retrieve Cast Information</button>
                </div>
            )
        } else   
        if (this.state.searchResultsCast.length>0) {
            return (
                <div>
                    <button type="button" onClick={this.onChange}>Retrieve Cast Information</button>
                    <h3>Cast List ({this.state.searchResultsCast.length})</h3>
                    <div style={{ display:"flex", "flexDirection":"column" }}>
                        {
                            this.state.searchResultsCast.map((cast, i) => {
                                return (
                                    <div key={i} style={{ display:"flex", "flexDirection":"row" }}>
                                        <img src={cast.person.image.medium} style={{width:"30%", height:"30%"}}></img>
                                        <ul>
                                            <li>{cast.person.name}</li>
                                            <li>{cast.character.name}</li>
                                        </ul>
                                        <hr style={{"border-width":"1px", margin:"0.5em 0 0.5em 0", "border-style":"inset"}} />                                    
                                    </div>                               
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else 
        {
            return (
                <div>
                    <button type="button" onClick={this.onChange}>Retrieve Cast Information</button>
                    <p>No CastInfo Available</p>
                </div>
            )
        }
    }
}

export default CastList