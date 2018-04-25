import React from 'react';
import H4 from './H4';

export const Card = props => (
  <div>
    <div className="card">
      <img src={props.imgUrl} alt={props.title}/>
      <p className="caption">{props.caption}</p>
      <H4>{props.title}</H4>
      <p className="price">${props.price} per person</p>
    </div>
    <style jsx>{`
      img {
        max-width: 100%;
        height: auto;
      }
      p.caption {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
      }
      p.price {
        font-size: 14px;
        font-weight: 200;
      }
      p {
        margin: 0;
      }
    `}</style>
  </div>
);

export default Card;