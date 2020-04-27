import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


import {doGet} from '../../helpers/ApiHelper';


const Home = () => {

    const [movies,setMovies] = useState([]);

    useEffect(
        () => {
            doGet('list_movies.json?sort=seeds&limit=10').then(response => setMovies(response.data.movies));
        } , []
    );

   if(!movies || !movies.length){
       return <h1> Loading movies...</h1>;
   }

   const movieList = movies.map(m => {
    // NÃO utilizando método getId da API HELPERS   
    const id = m.id;
       return (
        <li key={m.id}>
            <Link to={`/detail/`+id }>{m.title}</Link> 
        </li>

            );}
        );

   return (<> 
                <h1>Movies</h1> 
                     <ul>{movieList}</ul>
         </>);

    //console.log(movies);

return <h1>Home</h1>;
};

export default Home;