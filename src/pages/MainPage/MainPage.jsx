import { useEffect, useState } from 'react';
import './mainPage.scss';
import RequestService from '../../services/RequestService';

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

    return <h1>Main Page</h1>;
};

export default MainPage;
