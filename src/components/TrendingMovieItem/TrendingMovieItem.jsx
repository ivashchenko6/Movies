import './trendingMovieItem.scss';

import starIcon from '../../assets/icons/star.png';
import { Link } from 'react-router-dom';

const TrendingMovieItem = ({ movieItem, genresList }) => {
    const {
        poster_path: movieImg,
        genre_ids,
        original_title: title,
        id: movieId,
        overview,
        release_date,
        vote_average,
        vote_count,
        original_language,
    } = movieItem;

    const makeGenresLink = getGenresForCurrentMovie(genresList, genre_ids).map(
        (genre, i) => {
            return (
                <>
                    <Link
                        to={`/genres/${genre.toLowerCase()}`}
                        className='trending-movies__list-item__body-genres-item'
                    >
                        {genre}
                    </Link>
                    {i !== genre_ids.length - 1 ? ', ' : null}
                </>
            );
        },
    );
    return (
        <li className='trending-movies__list-item'>
            <img
                src={`https://www.themoviedb.org/t/p/original${movieImg}`}
                alt={title}
                className='trending-movies__list-item__poster'
            />
            <div className='trending-movies__list-item__about'>
                <div className='trending-movies__list-item__header'>
                    <p className='trending-movies__list-item__title'>
                        {title.length < 20 ? title : title.slice(0, 20) + '...'}
                    </p>
                    <div className='trending-movies__list-item__rating-wrapper'>
                        <p className='trending-movies__list-item__average'>
                            {+vote_average.toFixed(0)}/10
                        </p>
                        <img
                            src={starIcon}
                            alt='star-icon'
                            className='star-icon'
                        />
                    </div>
                </div>

                <div className='trending-movies__list-item__body'>
                    <div>
                        <span className='movie-data__span'>Description: </span>
                        <p className='trending-movies__list-item__body-description'>
                            {overview}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original title:{' '}
                        </span>
                        <p className='trending-movies__list-item__body-original-title'>
                            {title}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Original language:{' '}
                        </span>
                        <p className='trending-movies__list-item__body-original-language'>
                            {original_language}
                        </p>
                    </div>

                    <div>
                        <span className='movie-data__span'>Genres: </span>
                        <p className='trending-movies__list-item__body-genres'>
                            {makeGenresLink}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>Vote Count: </span>
                        <p className='trending-movies__list-item__body-vote-count'>
                            {vote_count}
                        </p>
                    </div>
                    <div>
                        <span className='movie-data__span'>
                            Realease Date:{' '}
                        </span>
                        <p className='trending-movies__list-item__body-realease-date'>
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
                finalGenreNames.push(genresList[i].name);
            }
        }
    }

    return finalGenreNames;
}

export default TrendingMovieItem;
