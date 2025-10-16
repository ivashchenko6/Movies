import TrendingMovieItem from '../TrendingMovieItem/TrendingMovieItem';
import './trendingMoviesList.scss';

const TrendingMoviesList = ({ trendingMovies, genresList }) => {
    const movieItems = trendingMovies.map((movieItem, i) => {
        return (
            <TrendingMovieItem
                key={i}
                movieItem={movieItem}
                genresList={genresList}
            />
        );
    });

    return <ul className='trending-movies__list'>{movieItems}</ul>;
};

export default TrendingMoviesList;
