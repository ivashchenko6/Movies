import { useHttp } from '../hooks/http.hook';
const RequestService = () => {
    const { loading, error, cleanError, request } = useHttp();
    const baseUrl = process.env.REACT_APP_MOVIEDB_URL;

    const getTrendingMovies = async () => {
        const response = await request(
            `${baseUrl}trending/movie/day?language=en-US`,
        );

        return response.results;
    };

    const getMovieDetailsByID = async (movieID) => {
        const response = await request(
            `${baseUrl}movie/${movieID}?language=en-US`,
        );

        return response;
    };

    const getAllGenres = async () => {
        const response = await request(
            `${baseUrl}genre/movie/list?language=en`,
        );

        return response.genres;
    };

    const getMovieReviewsByID = async (movie_id = 0) => {
        const response = await request(`${baseUrl}movie/${movie_id}/reviews`);
        return response.results;
    };

    const findMovieByName = async (movieName) => {
        const response = await request(
            `${baseUrl}search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        );
        return response.results;
    };

    return {
        loading,
        error,
        cleanError,
        getTrendingMovies,
        getMovieDetailsByID,
        getAllGenres,
        getMovieReviewsByID,
        findMovieByName,
    };
};

export default RequestService;
