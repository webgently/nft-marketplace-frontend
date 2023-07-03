import React from 'react';
import Layouts from '../../components/Layouts';
import NftCard from '../../components/NftCard';
import IconMenu from '../../components/Icons';
import './marketplace.scss';

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
const Marketplace = () => {
  const [tab, setTab] = React.useState(false);

  return (
    <Layouts>
      <div className="marketplace-section">
        <div className="marketplace-top">
          <div>
            <div className="marketplace-title">
              <h2>Browse Marketplace</h2>
              <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            </div>
            <div className="marketplace-search">
              <input type="text" placeholder="Search your favourite NFTs" />
              <IconMenu icon="Search" size={24} />
            </div>
          </div>
        </div>
        <div className="borderline" />
        <div className="marketplace-bottom">
          <div className="marketplace-tab">
            <div>
              <div>
                <div className={`tab-item ${!tab && '_active'}`}>
                  <button onClick={() => setTab(false)}>
                    NFTs <span>302</span>
                  </button>
                </div>
                <div className={`tab-item ${tab && '_active'}`}>
                  <button onClick={() => setTab(true)}>
                    Collections <span>67</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="marketplace-arts">
            <div>
              <div>
                {nfts.map((item: any, ind: number) => {
                  return (
                    <NftCard
                      color="bg-primary"
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
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Marketplace;
