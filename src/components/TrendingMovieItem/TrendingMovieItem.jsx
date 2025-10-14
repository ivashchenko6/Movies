import './trendingMovieItem.scss';

import starIcon from '../../assets/icons/star.png';

const TrendingMovieItem = ({ movieItem }) => {
    const {
        poster_path: movieImg,
        genre_ids,
        original_title: title,
        overview,
        popularity,
        release_date,
        vote_average,
        vote_count,
    } = movieItem;
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
                        {title.length < 22 ? title : title.slice(0, 22) + '...'}
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
                    {overview}
                </div>
            </div>
        </li>
    );
};

export default TrendingMovieItem;
