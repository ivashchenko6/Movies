import { useEffect, useState } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import Spinner from '../../components/Spinner/Spinner';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import MoviesByNameList from '../../components/MoviesByNameList/MoviesByNameList';

const MainPage = () => {
    const { loading, error, cleanError, getTrendingMovies, getAllGenres, findMovieByName } =
        RequestService();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [movieTerm, setMovieTerm] = useState("");
    const [moviesByName, setMoviesByName] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            cleanError();
            const [trending, genres] = await Promise.all([
                getTrendingMovies(),
                getAllGenres(),
            ]);
            setTrendingMovies(trending);
            setGenresList(genres);
        };
        fetchData();
    }, []);



    const onEnterMovieTerm = (e) => {
        const value = e.target.value;
        setMovieTerm(value);
        if (!value) setMoviesByName([]);
    };

    const onSearchMovie = async () => {
        const result = await findMovieByName(movieTerm);
        setMoviesByName(result)
    }

    const spinner = loading ? <Spinner marginTop='100px' /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const trendingContent = !(loading || error || !trendingMovies) ? (
        <TrendingMoviesList
            trendingMovies={trendingMovies}
            genresList={genresList}
        />
    ) : null;

    const moviesByNameContent = !(loading || error || !moviesByName) ? (
        <MoviesByNameList
            moviesByName={moviesByName}
            genresList={genresList}
        />
    ) : null;



    return (
        <main className='main'>
            <SearchPanel onEnterMovieTerm={onEnterMovieTerm} onSearchMovie={onSearchMovie}/>
            {spinner}
            {errorMessage}
            {movieTerm && moviesByName.length > 0 ? moviesByNameContent : trendingContent}

        </main>
    );
};

export default MainPage;
