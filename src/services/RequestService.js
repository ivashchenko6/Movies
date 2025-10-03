import { useHttp } from '../hooks/http.hook';
const RequestService = () => {
    //request(url) => so it`s going to be request(process.env.MOVIEDB_URL)
    const { loading, error, cleanError, request } = useHttp();
    const baseUrl = process.env.REACT_APP_MOVIEDB_URL;

    const getTrendingMovies = async() => {
        const response = await request(`${baseUrl}trending/movie/day?language=en-US`);

        return response;
    };

    return {
        loading,
        error,
        cleanError,
        getTrendingMovies,
    };
};

export default RequestService;