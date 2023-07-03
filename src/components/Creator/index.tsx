import React from 'react';
import './creator.scss';

const Creator = ({ ind, avatar, author, price, currency }: any) => {
  return (
    <div className="creator">
      <span>{ind + 1}</span>
      <div className="creator-avatar">
        <img src={avatar} alt={'creator' + ind} />
      </div>
      <div className="creator-detail">
        <p>{author}</p>
        <span>
          <span className="text-third">Total Sales:</span>
          <span>
            {price.toFixed(2)} {currency}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Creator;
