import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "services/api";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const MovieItems = ({ movies }) => {
    const location = useLocation();

    return movies.map(({ id, title, poster_path, release_date }) => {
        return (
            <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}> 
                    <img src={ `${BASE_IMG_URL}${poster_path}` } alt={ title } width='100px'></img>
                    <p>{ title }</p>
                    <p> { release_date.slice(0, 4) } </p>
                </Link>
            </li>
        )
    });
};

MovieItems.PropTypes = {
   movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieItems;
