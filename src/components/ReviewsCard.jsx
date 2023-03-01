import { useLoaderData } from "react-router-dom";

import ErrorPageReviews from '../pages/ErrorPageReviews';

import css from './ReviewsCard.module.css';

export const ReviewsCard = () => {
    const reviewses = useLoaderData();

    if (reviewses.length === 0) {
        return (<ErrorPageReviews />)
    } else {
        return (
            <ul className={css.reviewsList}>
                {
                    reviewses.map((reviews) => (
                        <li className={css.reviewItem} key={reviews.id}><span className={css.titleName}>Author:  </span>{reviews.author}
                            <p className={css.reviewDescription}>{reviews.content}</p>
                        </li>

                    ))}
            </ul>

        )
    }
};

