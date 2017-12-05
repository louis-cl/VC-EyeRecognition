import React, {Component} from 'react';
import axios from 'axios';

const BASE_URL = 'https://s3.eu-west-2.amazonaws.com/vc-fib-images/BioID_';
const BASE_FORMAT = '.png';

function intToStringId(id) {
    if (id < 10) return '000' + id.toString();
    else if (id < 100) return '00' + id.toString();
    else if (id < 1000) return '0' + id.toString();
    else return id.toString();
}

function urlFor(imageId) {
    return BASE_URL + intToStringId(imageId) + BASE_FORMAT;
}

const Image = ({imageId}) => {
    if (imageId === undefined) return <p>Fetching data...</p>;
    else return <img src={urlFor(imageId)}/>;
}

export default Image;
