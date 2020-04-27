import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {doGet} from '../../helpers/ApiHelper';

const Detail = () => {

const  {id} = useParams();

const [movie,setMovie] = useState(null);

useEffect(
    () => {
        doGet(`movie_details.json?movie_id=${id}`).then(response => setMovie(response.data.movie));
        //.then(response => setMovie(response.data.movie));
    } , []
);

if(!movie){
    return <h1> Loading movie details ...</h1>;
}


console.log(movie);

return (
<p>{movie.description_intro}</p>
);
};

export default Detail;