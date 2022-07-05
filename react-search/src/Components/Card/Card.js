import {useState, React} from 'react';
import Test from "../Test/Test"

function Card({review}) {
const [isShown, setIsShown] = useState(false);
/*
onclick here
render component and pass props to it

*/
const handleClick = event => {
    // 👇️ toggle shown state
     setIsShown(true);
  };


    return(
        
        <>
            <div className="tc">
                <img src="" className="br-100  w3 dib" alt="Kitty" />
                <h1 onClick={handleClick} className="f4">{review.title}</h1>
                {/* <h3>{review.author}</h3> */}
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">
                {/* {review.review} */}
            </p>

        <div>
                {isShown && <Test 
                    review={review}
                />}
            </div></>
       
    )
}

export default Card;
