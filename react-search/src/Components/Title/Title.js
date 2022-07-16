import { React, useState} from 'react'
import Review from '../Review/Review';

function Title({review}) {
    const [reviewShown, setReviewShown] = useState(false);
    const [listVisible, setListVisible] = useState(true);

    
    const handleClick = event => {
        // toggle shown state
        setReviewShown(true);
        setListVisible(current => !current);;
      };
    
        return(
            <>
            <div  >

            <div className="list-container" style={{visibility: listVisible ? 'visible' : 'hidden'}}>
                {/* <ListGroup > */}
                    <p onClick={handleClick}>{review.author}: {review.title}</p>
                {/* </ListGroup> */}
             </div>
                    <div>
                        {reviewShown && <Review review={review} />}
                    </div>
            </div>
            </>
        )
}

export default Title;