import { React, useState } from 'react'
import Review from '../Review/Review'


function Title({review}) {
    const [reviewShown, setReviewShown] = useState(false);
    const [listVisible, setListVisible] = useState(true);

    console.log(review);

    const handleClick = event => {
        setReviewShown(true)
        setListVisible(current => !current);
    }

        return(
            <>
            <div className="list-container" style={{visibility: listVisible ? 'visible' : 'hidden' }}>
                <p className="list-container2" onClick={handleClick}>{review.author}: {review.title}</p>
            </div>
                <div>
                    {reviewShown && <Review review={review}  />}
                </div>
            </>
        )
}

export default Title;