import "./Review.css"

function Review({ review }) {
    return (
        <>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="review-container">
                    <div className="left">
            <h1>{review.title}</h1>
                
                    <img
                        className="book-image"
                        src={review.image}
                        alt="review"
                    />
                   
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
