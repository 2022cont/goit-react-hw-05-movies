import { useLoaderData } from "react-router-dom";

import ErrorPageReviews from '../pages/ErrorPageCastemer';

import imgSrc from '../images/969696.jpg';
import css from './CastCard.module.css';

export const CastCard = () => {
    const casts = useLoaderData();
    const srcImg = `https://image.tmdb.org/t/p/w300`;
    if (casts.length === 0) {
        return (<ErrorPageReviews />)
    } else {
        return (
            <ul className={css.listCastCard}>
                {
                    casts.map((cast, index) => (
                    
                        <li key={index} className={css.itemListCastCard}>
                            <img className={css.imgCast}
                                src={cast.profile_path !== null ? (srcImg + cast.profile_path) : imgSrc} alt={cast.name} />
                            <span className={css.titleName}>{cast.name}</span>
                            <p className={css.titleName}>Character:   <span className={css.subTitleName}>{cast.character}</span></p>
                        </li>

                    ))}
            </ul>

        )
    }
};
