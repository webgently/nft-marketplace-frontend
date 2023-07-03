import React from 'react';
import './nftcard.scss';

const NftCard = ({ color, ind, art, name, avatar, author, price, currency, highestBid, bidCurrency }: any) => {
  return (
    <div className="nft-card">
      <img src={art} alt={'nft' + ind} />
      <div className={`nft-detail ${color}`}>
        <div className="creator-detail">
          <p>{name}</p>
          <div className="flex items-center gap-[12px]">
            <img src={avatar} width="24px" alt={'creator' + ind} />
            <span>{author}</span>
          </div>
        </div>
        <div className="price-detail">
          <div className="flex flex-col items-start gap-[8px]">
            <span className="text-third !text-[14px]">Price:</span>
            <span>
              {price.toFixed(2)} {currency}
            </span>
          </div>
          <div className="flex flex-col items-end gap-[8px]">
            <span className="text-third !text-[12px]">Highest Bid:</span>
            <span>
              {highestBid.toFixed(2)} {bidCurrency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
