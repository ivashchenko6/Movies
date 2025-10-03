import { Link } from 'react-router-dom';
import './greetingPage.scss';

const GreetingPage = () => {


    return (
        <header className='greeting'>
            <h1 className='greeting-title'>Movie Data Base</h1>

            <p className='greeting-description'>
                Find modern and popular films and TV series to suit every taste. Search by title, genre, ratings, detailed descriptions, and comments to help you make the right choice.
                This application is built using <span>HTML</span>, <span>SCSS</span>, <span>React</span> and <a href='https://www.themoviedb.org/'>TMDB API</a>
            </p>



            <Link to="/main" className="getStarted glow-on-hover" type="button">GET STARTED</Link>
        </header>
    );
};

export default GreetingPage;
