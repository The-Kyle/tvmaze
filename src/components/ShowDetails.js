import React from 'react';

const ShowDetails = (props) => {
    let name=props.show.name
    // let networkName = props.show.network.name ? props.show.network.name : '' + props.show.network.country.name ? props.show.network.country.name : ''
    // let networkName = props.show.network ? props.show.network.name + props.show.network.country.name : 'Not available'
    // let networkName = props.show.webChannel.name + '(' + props.show.webChannel.country.name + ')'
    // let webchannel = props.show.webchannel

    // Sometimes, either show.network & show.webChannel could be null, thus crash.
    let networkName = "Not available"
    if (props.show.network) { networkName = (props.show.network.name ? props.show.network.name : '') + ' (' + (props.show.network.country.name ? props.show.network.country.name : '') + ')'}
    else if (props.show.webChannel) { networkName = props.show.webChannel.name?props.show.webChannel.name:'' + '(' + props.show.webChannel.country.name?props.show.webChannel.country.name:'' + ')' }

    let premiered = props.show.premiered
    let type = props.show.type
    let language = props.show.language
    let status = props.show.status
    let officialSite = props.show.officialSite

    let summary = props.show.summary
    let genre = props.show.genres.join(", ")

    return (
        <div style={{width:'35%'}}>
            <h2>{name}</h2>
            <h3>{networkName}</h3>
            <div dangerouslySetInnerHTML={{__html: summary}} />
            {/* <h3>{summary}</h3> */}
            <br />
            {genre.length > 0 && <h5><b>Genres: </b>{genre}</h5>}
            <h5><b>Type: </b>{type}</h5>
            <h5><b>Language: </b>{language}</h5>
            <h5><b>Premiered: </b>{premiered}</h5>
            <h5><b>Status: </b>{status}</h5>

            <h5><div>
                {officialSite ? ( <a href={officialSite}>Visit Official Site</a> ) : 
                ( <h3>Official site not available</h3> )}
            </div></h5>
        </div>
    )
}

export default ShowDetails;
