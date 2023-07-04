import React from 'react';
import Layouts from '../../components/Layouts';
import IconMenu from '../../components/Icons';
import NftCard from '../../components/NftCard';
import CreatorImg from '../../assets/images/creator1.png';
import './collection.scss';

const tags = ['ANIMATION', 'ILLUSTRATION', 'MOON', 'MOON'];
const nfts = [
  {
    art: './assets/images/nft1.png',
    name: 'Distant Galaxy',
    creator: {
      avatar: './assets/images/creator1.png',
      author: 'MrFox'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  },
  {
    art: './assets/images/nft2.png',
    name: 'Life On Edena',
    creator: {
      avatar: './assets/images/creator2.png',
      author: 'DigiLab'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  },
  {
    art: './assets/images/nft3.png',
    name: 'AstroFiction',
    creator: {
      avatar: './assets/images/creator3.png',
      author: 'BlueWhale'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  },
  {
    art: './assets/images/nft1.png',
    name: 'Distant Galaxy',
    creator: {
      avatar: './assets/images/creator1.png',
      author: 'MrFox'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  },
  {
    art: './assets/images/nft2.png',
    name: 'Life On Edena',
    creator: {
      avatar: './assets/images/creator2.png',
      author: 'DigiLab'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  },
  {
    art: './assets/images/nft3.png',
    name: 'AstroFiction',
    creator: {
      avatar: './assets/images/creator3.png',
      author: 'BlueWhale'
    },
    price: 1.63,
    currency: 'ETH',
    highestBid: 0.33,
    bidCurrency: 'wETH'
  }
];
const Collection = () => {
  return (
    <Layouts>
      <div className="bg-nft-container"></div>
      <section className="nft-info-section">
        <div>
          <div className="nft-info">
            <div className="name">
              <h2>The Orbitians</h2>
              <p>Minted on Sep 30, 2022</p>
            </div>
            <div className="nft-auction flex md:hidden">
              <span>Auction ends in:</span>
              <div className="spacial-time">
                <div>
                  <p>59</p>
                  <span>Hours</span>
                </div>
                <p>:</p>
                <div>
                  <p>59</p>
                  <span>Minutes</span>
                </div>
                <p>:</p>
                <div>
                  <p>59</p>
                  <span>Seconds</span>
                </div>
              </div>
              <button className="primary-btn w-full">Place Bid</button>
            </div>
            <div className="author">
              <p>Created By</p>
              <div>
                <img src={CreatorImg} width="24px" alt="creator" />
                <p>Orbitian</p>
              </div>
            </div>
            <div className="description">
              <p>Description</p>
              <div>
                The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, There are all sorts of
                beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a
                metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful
                race, but they have been at war with a group of invaders for many generations. The invaders are called
                Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to
                be. Upside-Downs believe that they will be able to win this war if they could only get an eye into
                Orbitian territory, so they've taken to make human beings their target.
              </div>
            </div>
            <div className="details">
              <p>Details</p>
              <div>
                <div>
                  <IconMenu icon="Website" size={32} className="text-third" />
                  <p>View on Etherscan</p>
                </div>
                <div>
                  <IconMenu icon="Website" size={32} className="text-third" />
                  <p>View Original</p>
                </div>
              </div>
            </div>
            <div className="tags">
              <p>Tags</p>
              <div className="tag-group">
                {tags.map((text: string, ind: number) => {
                  return <div key={'tag' + ind}>{text}</div>;
                })}
              </div>
            </div>
          </div>
          <div className="nft-auction hidden md:flex">
            <span>Auction ends in:</span>
            <div className="spacial-time">
              <div>
                <p>59</p>
                <span>Hours</span>
              </div>
              <p>:</p>
              <div>
                <p>59</p>
                <span>Minutes</span>
              </div>
              <p>:</p>
              <div>
                <p>59</p>
                <span>Seconds</span>
              </div>
            </div>
            <button className="primary-btn w-full">Place Bid</button>
          </div>
        </div>
      </section>
      <section className="nft-more-section">
        <div>
          <div className="nft-description">
            <h3>More from this artist</h3>
            <button className="outline-btn w-full sm:w-[250px] hidden sm:flex">
              <IconMenu icon="Arrow" size={20} />
              Go To Artist Page
            </button>
          </div>
          <div className="nft-collections">
            {nfts.map((item: any, ind: number) => {
              return (
                <NftCard
                  color="bg-second"
                  key={'nft' + ind}
                  ind={ind}
                  art={item.art}
                  name={item.name}
                  avatar={item.creator.avatar}
                  author={item.creator.author}
                  price={item.price}
                  currency={item.currency}
                  highestBid={item.highestBid}
                  bidCurrency={item.bidCurrency}
                />
              );
            })}
          </div>
          <button className="outline-btn w-full sm:w-[250px] flex sm:hidden">
            <IconMenu icon="Arrow" size={20} />
            Go To Artist Page
          </button>
        </div>
      </section>
    </Layouts>
  );
};

export default Collection;
