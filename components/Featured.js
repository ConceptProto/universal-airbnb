import React from 'react';

export const Featured = props => (
  <div>
    <div className="card">
      <img src={props.imgUrl} alt={props.city}/>
      <p>{props.city}</p>
    </div>
    <style jsx>{`
      img {
        max-width: 100%;
        height: auto;
      }
      p {
        font-size: 12px;
        margin: 0;
      }
    `}</style>
  </div>
);

export default Featured;