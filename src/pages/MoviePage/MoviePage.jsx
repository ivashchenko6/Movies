import { Link, useParams } from 'react-router-dom';
import './moviePage.scss';
import { useEffect, useState } from 'react';
import RequestService from '../../services/RequestService';
import Spinner from '../../components/Spinner/Spinner';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { modifyDate } from '../../services/functions';
import starIcon from '../../assets/icons/star.png';

const MoviePage = () => {
    const { loading, error, cleanError, getMovieDetailsByID } =
        RequestService();
    const movieID = useParams().id;
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            cleanError();
            const response = await getMovieDetailsByID(movieID);
            setMovieDetails(response);
        };
        fetchData();
    }, []);

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const content = !(loading || error || !movieDetails) ? (
        <MoviePageItem movieDetails={movieDetails} />
    ) : null;

    return (
        <main className='movie-page'>
            {spinner}
            {errorMessage}
            {content}
        </main>
    );
};

const MoviePageItem = ({ movieDetails }) => {
    const {
        adult,
        budget,
        genres,
        status,
        title,
        id,
        overview,
        original_title,
        popularity,
        production_companies,
        poster_path,
        release_date,
        runtime,
        vote_average,
        vote_count,
    } = movieDetails;

    const { readyDate } = modifyDate(release_date ? release_date : '');

    const generateGenreItems = genres
        ? genres.map((genre, i) => {
              return (
                  <>
                      <Link
                          to={`/genres/${genre.id}`}
                          key={i}
                          className='genre-link'
                      >
                          {genre.name}
                      </Link>
                      {i !== genres.length - 1 ? ', ' : null}
                  </>
              );
          })
        : null;
    return (
        <>
            <div className='movie-page__header'>
                <p className='movie-page__header-title'>{title}</p>
                <div className='movie-page__header-rating'>
                    <p className='movie-page__header-average'>
                        {vote_average ? +vote_average.toFixed(0) : ''}/10
                    </p>
                    <img src={starIcon} alt='star-icon' className='star-icon' />
                </div>
            </div>

            <div className='movie-page__body-info'>
                <img
                    src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                    alt={original_title}
                    className='movie-page__poster'
                />
                <div className='movie-page__about'>
                    <div className='movie-page__body'>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>
                                Original title:
                            </span>
                            <p className='movie-page__body-original-title'>
                                {original_title}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>
                                Age restrictions:
                            </span>
                            <p className='movie-page__body-restrictions'>
                                {adult ? 'Yes' : 'No'}
                            </p>
                        </div>

                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>Genres: </span>
                            <p className='movie-page__body-genres'>
                                {generateGenreItems}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>Runtime: </span>
                            <p className='movie-page__body-runtime'>
                                {runtime + ' min.'}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>Budget: </span>
                            <p className='movie-page__body-budget'>
                                {budget === 0 ? 'Unknown' : budget + '$'}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>
                                Vote Count:{' '}
                            </span>
                            <p className='movie-page__body-vote-count'>
                                {vote_count}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>
                                Realease Date:
                            </span>
                            <p className='movie-page__body-realease-date'>
                                {readyDate ? readyDate : null}
                            </p>
                        </div>
                        <div className='movie-page__info-block'>
                            <span className='movie-data__span'>Status:</span>
                            <p className='movie-page__body-status'>{status}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='movie-page__item-description'></div>
        </>
    );
};

export default MoviePage;
