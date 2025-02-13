import React, { useEffect, useState } from 'react';
import { starRatings } from '../data/CommonData/CommonData';

const StarRating = () => {

    const [unabledIndex, setUnabledIndex] = useState(5); 

    useEffect(() => {
        const randomIndex = 5;
        setUnabledIndex(randomIndex);
        // console.log(Math.random());
    }, []);

    return (
        <ul className="star-rating flx-align justify-content-end">
            {
                starRatings.map((star, index) => {
                    return (
                        <li className={`star-rating__item ${index >= unabledIndex ? "unabled": "" } `} key={index}>
                            {star.icon}
                        </li>
                    )
                })
            }

        </ul>   
    );
};

export default StarRating;

    