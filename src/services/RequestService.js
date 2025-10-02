import { useHttp } from '../hooks/http.hook';
const RequestService = () => {
    //request(url) => so it`s going to be request(process.env.MOVIEDB_URL)
    const { loading, error, cleanError, request } = useHttp();

    const getTrendingMovies = async() => {
        const response = await request(process.env.REACT_APP_MOVIEDB_URL);

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