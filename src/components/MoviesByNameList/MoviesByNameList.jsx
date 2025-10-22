import MovieItem from "../MovieItem/MovieItem";
import './moviesByNameList.scss';

const MoviesByNameList = ({moviesByName, genresList}) => {
    const moviesItems = moviesByName.map((movieItem, i) => {
        return (
            <MovieItem key={i} movieItem={movieItem} genresList={genresList}/>
        )
    })

    return <ul className="searched-movies__list">{moviesItems}</ul>


}

export default MoviesByNameList;