import {useState, React} from 'react';
import Review from "../Review/Review"

function Title({
    review
}) {
const [reviewShown, setReviewShown] = useState(false);
const [listVisible, setListVisible] = useState(true);



const handleClick = event => {
    // 👇️ toggle shown state
    setReviewShown(true);
    setListVisible(current => !current);;
  };

  

  

    return(
        <>
            <div style={{visibility: listVisible ? 'visible' : 'hidden'}}>
            {/* toggle list items  */}
                <p onClick={handleClick} className="dropdown-list">{review.title}</p>
            </div>
        <div>
                {reviewShown && <Review
                    review={review} />}
            </div></>
    )
}

export default Title;
