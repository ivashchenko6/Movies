import { useHttp } from '../hooks/http.hook';
const RequestService = () => {
    //request(url) => so it`s going to be request(process.env.MOVIEDB_URL)
    const { loading, error, cleanError, request } = useHttp();
    const baseUrl = process.env.REACT_APP_MOVIEDB_URL;

    const getTrendingMovies = async() => {
        const response = await request(
            `${baseUrl}trending/movie/day?language=en-US`,
        );

        return response.results;
    };

    const getMovieDetailsByID = async (movieID) => {
        const response = await request(
            `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`
        );

        return response;
    }

    const getAllGenres = async () => {
        const response = await request('https://api.themoviedb.org/3/genre/movie/list?language=en');

        return response.genres;
    }

    return {
        loading,
        error,
        cleanError,
        getTrendingMovies,
        getMovieDetailsByID,
        getAllGenres
    };
};

export default RequestService;