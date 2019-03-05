import React from 'react';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(e) {
    //     console.log(e.target)
    // }
    handleClick = (value) => {
        this.props.onSelect(value)
    }

    render() {
        return (
            <div>
                {this.props.searchResults.map((item, index) => 
                    <div key={index} onClick={() => this.handleClick(index)} >
                        <li>
                            {item.show.image && 
                                <img src={item.show.image.medium} style={{width: '30px'}}  /> 
                            }
                            {item.show.name}
                        </li>
                        <hr style={{"border-width":"1px", margin:"0.5em 0 0.5em 0", "border-style":"inset"}} />
                    </div>)
                }
            </div>

        )        
    }
}

