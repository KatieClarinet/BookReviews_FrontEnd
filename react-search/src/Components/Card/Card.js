import React from 'react';

function Card({review}) {
    return(
        
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 h3 dib">
        <div className="tc">
        <img src="" className="br-100  w3 dib" alt="Kitty" />
        <h1 className="f4">{review.title}</h1>
        <h3>{review.author}</h3>
        <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f6 black-70">
        {review.review}
  </p>
           
        </article>
       
    )
}

export default Card;
