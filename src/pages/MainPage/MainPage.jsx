import { useEffect, useState } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import Spinner from '../../components/Spinner/Spinner';

const MainPage = () => {
    const { loading, error, cleanError, getTrendingMovies } = RequestService();
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            //Getting trending movies
            const data = await getTrendingMovies();
            setTrendingMovies(data);
        };
        fetchData();
    }, []);

    return (
        <main className='main'>
            <SearchPanel />
            {/* <Spinner /> */}
            <TrendingMoviesList trendingMovies={trendingMovies} />
        </main>
    );
};

export default MainPage;
