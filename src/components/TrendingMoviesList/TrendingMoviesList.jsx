import MovieItem from'../MovieItem/MovieItem';
import './trendingMoviesList.scss';

const TrendingMoviesList = ({ trendingMovies, genresList }) => {
    const movieItems = trendingMovies.map((movieItem, i) => {
        return (
            <MovieItem
                key={i}
                movieItem={movieItem}
                genresList={genresList}
            />
        );
    });

    return <ul className='trending-movies__list'>{movieItems}</ul>;
};

export default TrendingMoviesList;
