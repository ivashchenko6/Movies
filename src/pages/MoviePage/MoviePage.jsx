import { useParams } from 'react-router-dom';
import './moviePage.scss';
import { useEffect, useState } from 'react';
import RequestService from '../../services/RequestService';
import Spinner from '../../components/Spinner/Spinner';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

import starIcon from '../../assets/icons/star.png';

const MoviePage = () => {
    const { loading, error, cleanError, getMovieDetailsByID } =
        RequestService();
    const movieID = useParams().id;
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        console.log(movieID)
        const fetchData = async () => {
            cleanError()
            const response = await getMovieDetailsByID(movieID);
            setMovieDetails(response);
        }
        fetchData()
    }, [])

    const spinner = loading ? <Spinner/> : null;
    const errorMessage =  error ?  <ErrorComponent/> : null;
    const content = !(loading || error || !movieDetails) ? <MoviePageItem movieDetails={movieDetails}/> : null;



    return (
        <main className="movie-page">
            {spinner}
            {errorMessage}
            {content}

        </main>
    );
};


const MoviePageItem = ({movieDetails}) => {

    const {adult, budget, genres, homepage, id, overview, original_title, popularity, production_companies, poster_path, release_date, runtime, vote_average, vote_count} = movieDetails;
    return (
        <>


            <div className="movie-page__header">
                <p className='movie-page__header-title'>
                    {original_title}
                </p>
                <div className='movie-page__header-rating'>
                    <p className='movie-page__header-average'>
                        {+vote_average.toFixed(0)}/10
                    </p>
                    <img
                        src={starIcon}
                        alt='star-icon'
                        className='star-icon'
                    />
                </div>
            </div>

            <img
                src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                alt={original_title}
                className='movie-page__poster'
            />
            <div className='movie-page__about'>
                <p className='movie-page__title'>
                        {original_title}
                    </p>
                    <div className='movie-page__rating-wrapper'>
                        <p className='movie-page__average'>
                            {+vote_average.toFixed(0)}/10
                        </p>
                        <img
                            src={starIcon}
                            alt='star-icon'
                            className='star-icon'
                        />
                    </div>

                <div className='movie-page__body'>
                    <div>
                        <span className='movie-data__span'>Description: </span>
                        <p className='movie-page__body-description'>
                            {overview}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original title:
                        </span>
                        <p className='movie-page__body-original-title'>
                            {original_title}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original language:
                        </span>

                    </div>

                    <div>
                        <span className='movie-data__span'>Genres: </span>
                        <p className='movie-page__body-genres'>
                            {/* {genresLink} */}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>Vote Count: </span>
                        <p className='movie-page__body-vote-count'>
                            {vote_count}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Realease Date:
                        </span>
                        <p className='movie-page__body-realease-date'>
                            {release_date}
                        </p>
                    </div>

                </div>
            </div>

        </>


    )
}

export default MoviePage;
