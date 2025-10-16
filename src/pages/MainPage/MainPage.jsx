import { useEffect, useState } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import Spinner from '../../components/Spinner/Spinner';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const MainPage = () => {
    const { loading, error, cleanError, getTrendingMovies, getAllGenres } =
        RequestService();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [genresList, setGenresList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            //Getting trending movies
            const data = await getTrendingMovies();
            setTrendingMovies(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const genresData = async () => {
            //Getting all genres list
            const data = await getAllGenres();
            setGenresList(data);
        };
        genresData();
    }, []);

    const spinner = loading ? <Spinner marginTop='100px' /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const content = !(loading || error || !trendingMovies) ? (
        <TrendingMoviesList
            trendingMovies={trendingMovies}
            genresList={genresList}
        />
    ) : null;

    return (
        <main className='main'>
            <SearchPanel />
            {spinner}
            {errorMessage}
            {content}
        </main>
    );
};

export default MainPage;
