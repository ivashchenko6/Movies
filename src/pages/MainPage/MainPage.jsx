import { useEffect } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';

const MainPage = () => {
    const { loading, error, cleanError, getTrendingMovies } = RequestService();
    useEffect(() => {
        const data = getTrendingMovies();

        console.log(data);
    }, []);

    return <h1>Main Page</h1>;
};

export default MainPage;
