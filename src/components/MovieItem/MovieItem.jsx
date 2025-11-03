import './movieItem.scss';

import starIcon from '../../assets/icons/star.png';
import { Link } from 'react-router-dom';
// import Spinner from '../Spinner/Spinner';

const MovieItem = ({ movieItem, genresList }) => {



    if (!movieItem || !movieItem.title) return null;

    const {
        poster_path: movieImg = '',
        genre_ids = [],
        title = '',
        original_title = '',
        id: movieId = 0,
        overview = '',
        release_date = '',
        vote_average = 0,
        vote_count = 0,
        original_language = '',
    } = movieItem || {};

    const makeGenresLink = getGenresForCurrentMovie(genresList, genre_ids).map(
        (genre, i) => {

            return (
                <>
                    <Link
                        key={i}
                        to={`/genres/${genre.id}`}
                        className='movie-item__list-item__body-genres-item'
                    >
                        {genre.name}
                    </Link>
                    {i !== genre_ids.length - 1 ? ', ' : null}
                </>
            );
        },
    );
    return (
        <li className='movie-item__list-item'>
            <img
                src={`https://www.themoviedb.org/t/p/original${movieImg}`}
                alt={title}
                className='movie-item__list-item__poster'
            />
            <div className='movie-item__list-item__about'>
                <div className='movie-item__list-item__header'>
                    <p className='movie-item__list-item__title'>
                        {(title?.length< 20 && title) ? title : title.slice(0, 20) + '...'}

                    </p>
                    <div className='movie-item__list-item__rating-wrapper'>
                        <p className='movie-item__list-item__average'>
                            { vote_average ? +vote_average.toFixed(0) : ""}/10
                        </p>
                        <img
                            src={starIcon}
                            alt='star-icon'
                            className='star-icon'
                        />
                    </div>
                </div>

                <div className='movie-item__list-item__body'>
                    <div>
                        <span className='movie-data__span'>Description: </span>
                        <p className='movie-item__list-item__body-description'>
                            {overview}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original title:{' '}
                        </span>
                        <p className='movie-item__list-item__body-original-title'>
                            {original_title}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original language:{' '}
                        </span>
                        <p className='movie-item__list-item__body-original-language'>
                            {original_language}
                        </p>
                    </div>

                    <div>
                        <span className='movie-data__span'>Genres: </span>
                        <p className='movie-item__list-item__body-genres'>
                            {makeGenresLink}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>Vote Count: </span>
                        <p className='movie-item__list-item__body-vote-count'>
                            {vote_count}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Realease Date:{' '}
                        </span>
                        <p className='movie-item__list-item__body-realease-date'>
                            {release_date}
                        </p>
                    </div>
                    <Link
                        to={`/movies/${movieId}`}
                        className='about-movie__button glow-on-hover'
                    >
                        About
                    </Link>
                </div>
            </div>
        </li>
    );
};

function getGenresForCurrentMovie(genresList, genresMovieIDs) {
    // genres List [{id: number, name: string}, {}, {}]
    //genresMovieIDs = [number, number]
    const finalGenreNames = [];
    for (let i = 0; i < genresList.length; i++) {
        for (let j = 0; j < genresMovieIDs.length; j++) {
            if (genresList[i].id === genresMovieIDs[j]) {
                finalGenreNames.push(genresList[i]);
            }
        }
    }

    return finalGenreNames;
}

export default MovieItem;
