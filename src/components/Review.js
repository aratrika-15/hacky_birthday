
import React from "react";
import StarRatings from 'react-star-ratings';

const Review = ({review}) => {
    return (
        <div className="review">
        <React.Fragment>
        <td><h3>{review.username}</h3></td>
        <td><h4>&ensp;&ensp;&ensp;&ensp;&ensp;</h4></td>
        <td><StarRatings
          rating={review.rating}
          starRatedColor="gold"
          numberOfStars={10}
          starDimension='30px'
          name='rating'
        /></td>
        </React.Fragment>
        <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{review.review}</p>
        </div>
    )
}

export default Review;