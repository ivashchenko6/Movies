import { useParams } from 'react-router-dom';
import './moviesByGenreList.scss';
import RequestService from '../../services/RequestService';
import Spinner from '../Spinner/Spinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';



const MoviesByGenreList = () => {
    const { genreID } = useParams();
    const { loading, error, cleanError, getMoviesByGenre } = RequestService();
    const [moviesList, setMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        cleanError();

        try {
            const response = await getMoviesByGenre(1, genreID);
            console.log(response)
            setMoviesList(response || []);
        } catch (e) {
            console.error("Failed to fetch movies:", e);
        }
        };

        if (genreID) fetchData();
    }, [genreID]);

    if (loading) return <Spinner />;
    if (error) return <ErrorComponent />;

    return (
        <div>
        {moviesList.length > 0 ? (
            moviesList.map((movieItem, i) => (
            <MovieItem key={movieItem.id || i} movieItem={movieItem} />
            ))
        ) : (
            <p>No movies found for this genre.</p>
        )}
        </div>
    );
};


export default MoviesByGenreList;