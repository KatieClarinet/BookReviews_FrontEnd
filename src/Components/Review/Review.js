import "./Review.css"

function Review({ review }) {
    return (
        <>
            <br></br>
            <div className="review-container">
                    <div className="left">
            <h1>{review.title}</h1>
                <div>

                    <img className="book-image"
                        src={review.image}
                        alt="review"
                    />
                </div>
                   
                <h2>{review.author}</h2>
                </div>
                <div className="right">
                    
                    <p className="text-wrapper">{review.review}</p>
                </div>
            </div>
            <br></br>
        </>
    );
}

export default Review;
