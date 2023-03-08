import { Suspense, useEffect, useState} from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { PAGE_NAMES } from "router/paths";
import { getMovieById } from "services/api";
import { BASE_IMG_URL } from "services/api";

const MovieDetails = () => {
   const [movieDetails, setMovieDetails] = useState({});
   const { movieId } = useParams();
   const { title, poster_path, vote_average, overview, genres } = movieDetails;
   const location = useLocation();
   const backlinkHref = location.state?.from ?? PAGE_NAMES.homepage;
   
  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => console.log('Error message:', error.message));
  }, [movieId])

  return (
    <>
      <Link to={backlinkHref}>Go back</Link>
      <br/>
      <img src={ `${BASE_IMG_URL}${poster_path}` } alt={ title } width='300px'/>
      <p> { title } </p>
      <p>  User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : 0}</p>
      <h3>Overview</h3>
      <p> {overview} </p>
      {genres && (
        <>
          <h3>Genres</h3>
          <p>{genres.map(genre => `${genre.name} `)}</p>
        </>
      )}

      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={PAGE_NAMES.cast}>Cast</Link>
        </li>

        <li>
          <Link to={PAGE_NAMES.reviews}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<> loading... </>}> 
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};

export default MovieDetails;

