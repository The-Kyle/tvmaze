import React from 'react';

const ShowImage = (props) => {

    let imgpath = props.show.image ? props.show.image.original : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
    return (
        <img src={imgpath} style={{width:'30%', height:"30%"}} /> 
    )
}

export default ShowImage