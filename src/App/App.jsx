import { Routes, Route } from 'react-router';
import GreetingPage from '../pages/GreetingPage/GreetingPage';
import MainPage from '../pages/MainPage/MainPage';

import './reset.scss';
import './app.scss';
import Header from '../components/Header/Header';
import MoviePage from '../pages/MoviePage/MoviePage';

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Routes>
                <Route path='/' element={<GreetingPage />} />

                <Route path='/main' element={<MainPage />} />

                <Route path='/movies/:id' element={<MoviePage />}/>
            </Routes>
        </div>
    );
};

export default App;
