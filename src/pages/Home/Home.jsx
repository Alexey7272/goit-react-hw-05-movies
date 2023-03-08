import { getTrendingMovies } from "services/api";
import { useEffect, useState } from "react";
import MovieItems from "components/MovieItems/movieItems";

const HomePage = () => {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
          .then(data => setMovies(data.results))
          .catch(error => {
            console.log('Error message:', error.message)
        }) 
    }, []);


    return (
        <>
            <h1> Trending today </h1>
            <ul>
                <li> <MovieItems movies={movies}/> </li>
            </ul>
        </>
    )
}

export default HomePage;