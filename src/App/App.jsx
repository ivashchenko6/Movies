import { Routes, Route } from 'react-router';
import GreetingPage from '../pages/GreetingPage/GreetingPage';
import MainPage from '../pages/MainPage/MainPage';

import './reset.scss';
import './app.scss';
import Header from '../components/Header/Header';

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Routes>
                <Route path='/' element={<GreetingPage />} />

                <Route path='/main' element={<MainPage />} />

                <Route />
            </Routes>
        </div>
    );
};

export default App;
