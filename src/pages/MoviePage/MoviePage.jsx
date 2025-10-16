import {useParams } from 'react-router-dom';
import './moviePage.scss';


const MoviePage = () => {
    const params = useParams().id


    console.log(params);

    return (
        <h1>Movie Page</h1>
    )
}

export default MoviePage;