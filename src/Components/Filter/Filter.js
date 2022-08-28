import { React } from "react";
import Review from "../Review/Review";
import "./Filter.css"

function Filter({ reviews }) {
    console.log(reviews);

    if (reviews?.length > 0) {
        let filter = reviews.map((review, i) => (
            <Review key={review.id} review={review} />
        ));
        console.log(filter);
        return <div className="filter">{filter}</div>;
    }
}

export default Filter;
