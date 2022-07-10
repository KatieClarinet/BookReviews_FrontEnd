import {useState, React} from 'react';
import Review from "../Review/Review"
import ListGroup from 'react-bootstrap/ListGroup';

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
        <div className="list-container" style={{visibility: listVisible ? 'visible' : 'hidden'}}>
            <ListGroup >
                <ListGroup.Item onClick={handleClick}>{review.title}</ListGroup.Item>
            </ListGroup>
         </div>
                <div>
                    {reviewShown && <Review review={review} />}
                </div>
        </>
    )
}

export default Title;
