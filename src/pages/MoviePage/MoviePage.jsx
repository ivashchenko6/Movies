import { useParams } from 'react-router-dom';
import './moviePage.scss';
import { useEffect, useState } from 'react';
import RequestService from '../../services/RequestService';

const MoviePage = () => {
    const { loading, error, cleanError, getMovieDetailsByID } =
        RequestService();
    const movieID = useParams().id;
    const [movieDetails, setMovieDetails] = useState({});

    //Getting information about certain movie by ID
    useEffect(() => {
        const fetchData = async () => {
            cleanError();
            const data = getMovieDetailsByID(movieID);
            setMovieDetails(data);
        };
        fetchData();
    });

    return <h1>Movie Page</h1>;
};

export default MoviePage;
