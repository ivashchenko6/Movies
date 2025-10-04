import { useEffect, useState } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

const MainPage = () => {
    // const { loading, error, cleanError, getTrendingMovies } = RequestService();
    // const [data,setData] = useState({})
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getTrendingMovies();
    //         setData(data)
    //     }


    //     fetchData()
    // }, []);

    return (
        <main className="main">
            <SearchPanel />
        </main>
    );
};

export default MainPage;
