import { useEffect, useState } from 'react';
import './comments.scss';
import RequestService from '../../services/RequestService';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import Spinner from '../Spinner/Spinner';

import basicReviewUserPicture from '../../assets/icons/review-user-picture.png';
import { modifyDate } from '../../services/functions';

const Comments = ({ movieID }) => {
    const { loading, error, cleanError, getMovieReviewsByID } =
        RequestService();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            cleanError();
            const response = await getMovieReviewsByID(movieID);
            setReviews(response);
        };
        if (movieID > 0) {
            fetchData();
        }
    }, [movieID]);

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const content =
        !loading && !error && reviews.length > 0 ? (
            reviews.map((reviewItem, i) => (
                <CommentItem key={i} reviewItem={reviewItem} />
            ))
        ) : !loading && !error ? (
            <li>No reviews yet.</li>
        ) : null;

    return (
        <ul className='reviews-list'>
            {spinner}
            {errorMessage}
            {content}
        </ul>
    );
};

const CommentItem = ({ reviewItem }) => {
    const [expendedReview, setExpendedReview] = useState(false);
    const {
        author = '',
        author_details: { avatar_path } = {},
        content = '',
        created_at = '',
    } = reviewItem;

    // const avatarUrl = avatar_path
    //     ? avatar_path.startsWith('/https')
    //         ? avatar_path.slice(1)
    //         : `https://image.tmdb.org/t/p/w200${avatar_path}`
    //     : basicReviewUserPicture;

    let { readyDate, hours, minutes, seconds } = modifyDate(
        ...created_at.split('T'),
    );
    seconds = seconds.split('.')[0];

    let expandReviewButton = null;

    if (content.length >= 250) {
        expandReviewButton  = (
        <button
            className='expand-review'
            style={{"marginLeft": "10px"}}
            onClick={() => setExpendedReview(!expendedReview)}
        >
            {!expendedReview ? 'Show More' : 'Show Less'}
        </button>
    );
    }


    return (
        <li className='reviews-list__item'>
            <img
                src={basicReviewUserPicture}
                alt='reviews'
                className='reviews-list__item-avatar'
            />
            <div className='reviews-list__item-about'>
                <div className='reviews-list__item-header'>
                    <p className='reviews-list__item-header__name'>
                        {author}
                    </p>
                    <p className='reviews-list__item-header__createdat'>
                        {`${readyDate} ${hours}:${minutes}:${seconds}`}
                    </p>
                </div>
                <div className='reviews-list__item-description'>
                    {content.length < 250 ? content : content.slice(0, 250)}
                    {expendedReview ? content.slice(250) : ""}
                    {expandReviewButton}
                </div>
            </div>
        </li>
    );
};

export default Comments;
