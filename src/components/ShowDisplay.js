import React, {Component} from 'react';
import ShowImage from './ShowImage';
import ShowDetails from './ShowDetails';
import CastList from './CastList';

class ShowDisplay extends Component {
    constructor(props){
        super(props)
        this.state={
            search: null,
            selectedSearchResult: null,
            searchResultsCast: [], //added for cast retrieval
            searchResults: []
        }
        this.handleCastButton = this.handleCastButton.bind(this)
    }

    fetchCast(value) {
        fetch(`https://api.tvmaze.com/search/shows/${this.props.show.id}/cast`) //originally, ${value}
          .then(res => res.json())
          .then(json => this.setState({ searchResultsCast: json }))
          .catch(err => console.log(err))
    }

    handleCastButton(e) {
        console.log('from handleCastButton') //debug
        // this.fetchCast(e)
    }

    render() {
        return (
            <div style={{display:"flex", "flexDirection":"row"}}>
                <ShowImage show={this.props.show} />
                <ShowDetails show={this.props.show} />
                <CastList id={this.props.show.id} onClick={this.handleCastButton} />
            </div>  
        )
    } // end of render()
}


// const ShowDisplay = (props) => {


//     return (
//         <div style={{display:"flex", "flexDirection":"row"}}>
//             <ShowImage show={props.show} />
//             <ShowDetails show={props.show} />
//             <CastList id={props.show.id} onClick={this.handleCastButton} />
//         </div>   
//     )
// }

export default ShowDisplay

