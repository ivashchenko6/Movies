import {useParams } from 'react-router-dom';
import './moviePage.scss';


const MoviePage = () => {
    const movieID = useParams().id;


    console.log(movieID);

    return (
        <h1>Movie Page</h1>
    )
}

export default MoviePage;