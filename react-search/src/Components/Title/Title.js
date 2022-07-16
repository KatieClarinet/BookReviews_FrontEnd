import { React, useState} from 'react'
import Review from '../Review/Review';

function Title({review}) {
    const [reviewShown, setReviewShown] = useState(false);
    const [itemVisible, setItemVisible] = useState(true);
    
    console.log(review);
    const handleClick = event => {
        // toggle shown state
        setReviewShown(true);
        setItemVisible(false);
      };
    
        return(
            <>
            <div>

                    <div >
                            <p className="list-container2" style={{visibility: itemVisible ? 'visible' : 'hidden'}} onClick={handleClick}>{review.author}: {review.title}</p>

                    </div>
                    <div>
                        {reviewShown && <Review review={review} />}
                    </div>
                   
            </div>
            </>
        )
}

export default Title;