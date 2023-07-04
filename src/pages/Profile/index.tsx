import React from 'react';
import { Link } from 'react-router-dom';
import Layouts from '../../components/Layouts';
import IconMenu from '../../components/Icons';
import CreatorImg from '../../assets/images/creator.png';
import { socialLists } from '../../components/Layouts/list.config';
import './profile.scss';
import NftCard from '../../components/NftCard';

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

const heroAmounts = [
  { count: '250k+', title: 'Volume' },
  { count: '50+', title: 'NFTs Sold' },
  { count: '3000+', title: 'Followers' }
];
const Profile = () => {
  const walletAddress = '0xcEd60d7797dB2edac6125A1F30F560926190B40F';
  const [tab, setTab] = React.useState(0);

  return (
    <Layouts>
      <div className="bg-profile-container">
        <div className="avatar-container">
          <img src={CreatorImg} alt="avatar" />
        </div>
      </div>
      <section className="profile-container">
        <div>
          <div className="profile">
            <h2>Animakid</h2>
            <div className="action flex lg:hidden">
              <button className="primary-btn flex w-full sm:w-[220px]">
                <IconMenu icon="Copy" size={20} />
                <span>
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(walletAddress.length - 3, walletAddress.length)}
                </span>
              </button>
              <button className="outline-btn flex w-full sm:w-[220px]">
                <IconMenu icon="Plus" size={20} />
                <span>Follow</span>
              </button>
            </div>
            <div className="hero-amount">
              {heroAmounts.map((item: any, ind: number) => {
                return (
                  <div key={item.title + ind} className="justify-self-center xs:justify-self-start flex flex-col">
                    <p>{item.count}</p>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="profile-bio">
              <p>Bio</p>
              <div>The internet's friendliest designer kid.</div>
            </div>
            <div className="profile-socials">
              <p>Links</p>
              <div className="social-list">
                {socialLists.map((item: any, ind: number) => {
                  return (
                    <Link key={item.icon + ind} to={item.link}>
                      <IconMenu icon={item.icon} size={32} className="text-third" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="action hidden lg:flex">
            <button className="primary-btn flex w-full sm:w-[220px]">
              <IconMenu icon="Copy" size={20} />
              <span>
                {walletAddress.slice(0, 6)}...{walletAddress.slice(walletAddress.length - 3, walletAddress.length)}
              </span>
            </button>
            <button className="outline-btn flex w-full sm:w-[220px]">
              <IconMenu icon="Plus" size={20} />
              <span>Follow</span>
            </button>
          </div>
        </div>
      </section>
      <div className="nft-collections">
        <div className="borderline" />
        <div className="collection-container">
          <div className="collection-tab">
            <div>
              <div>
                <div className={`tab-item ${tab === 0 && '_active'}`}>
                  <button onClick={() => setTab(0)}>
                    NFTs <span>302</span>
                  </button>
                </div>
                <div className={`tab-item ${tab === 1 && '_active'}`}>
                  <button onClick={() => setTab(1)}>
                    NFTs <span>302</span>
                  </button>
                </div>
                <div className={`tab-item ${tab === 2 && '_active'}`}>
                  <button onClick={() => setTab(2)}>
                    Collections <span>67</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-arts">
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

export default Profile;
