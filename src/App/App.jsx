import { Routes, Route } from 'react-router';
import GreetingPage from '../pages/GreetingPage/GreetingPage';
import MainPage from '../pages/MainPage/MainPage';

import './reset.scss';
import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<GreetingPage />} />

                <Route path='/main' element={<MainPage />} />

                <Route />
            </Routes>
        </div>
    );
};

export default App;
