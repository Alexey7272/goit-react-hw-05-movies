import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL, getMovieCredits } from "services/api";

const Cast = () => {
    const [ cast, setCast ] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
     getMovieCredits(movieId)
       .then(data => setCast(data.cast))
       .catch(error => { console.log('Erroe message:', error.message)});
    }, [movieId])

    return (
        <ul> 
            {cast.map(({ id, name, character, profile_path}) => {
                return (
                    <li key={id}> 
                        <img
                            src={`${BASE_IMG_URL}${profile_path}`}
                            alt={name}
                            width="100px"
                        ></img> 
                        <p> {name} </p>
                        <p> Character: {character}</p>
                    </li>
                )
            })}
        </ul>
    )
};


export default Cast;
