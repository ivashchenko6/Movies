import './trendingMovieItem.scss';

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
                <h2 className='trending-movies__list-item__title'>{title}</h2>
            </div>
        </li>
    );
};

export default TrendingMovieItem;
