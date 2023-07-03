import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Layouts from '../../components/Layouts';
import NftCard from '../../components/NftCard';
import Creator from '../../components/Creator';
import Browse from '../../components/Browse';
import Works from '../../components/Works';
import HeroImg from '../../assets/images/hero.png';
import CreatorImg from '../../assets/images/creator1.png';
import IconMenu from '../../components/Icons';
import 'swiper/css';
import 'swiper/css/pagination';
import './home.scss';

const heroAmounts = [
  { count: '240k+', title: 'Total Sale' },
  { count: '100k+', title: 'Auctions' },
  { count: '240k+', title: 'Artists' }
];

const trendings = [
  {
    art: './assets/images/art1.png',
    creator: {
      avatar: './assets/images/creator1.png',
      name: 'MrFox'
    },
    title: 'DSGN Animals',
    arts: ['./assets/images/art8.png', './assets/images/art4.png', '']
  },
  {
    art: './assets/images/art2.png',
    creator: {
      avatar: './assets/images/creator2.png',
      name: 'Shroomie'
    },
    title: 'Magic Mushrooms',
    arts: ['./assets/images/art8.png', './assets/images/art4.png', '']
  },
  {
    art: './assets/images/art3.png',
    creator: {
      avatar: './assets/images/creator3.png',
      name: 'BeKind2Robots'
    },
    title: 'Disco Machines',
    arts: ['./assets/images/art8.png', './assets/images/art4.png', '']
  }
];

const creators = [
  { avatar: './assets/images/creator1.png', author: 'Keepitreal', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator2.png', author: 'DigiLab', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator3.png', author: 'GravityOne', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator1.png', author: 'Juanie', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator2.png', author: 'BlueWhale', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator3.png', author: 'Mr Fox', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator1.png', author: 'Shroomie', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator2.png', author: 'Robotica', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator3.png', author: 'RustyRobot', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator1.png', author: 'Animakid', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator2.png', author: 'Dotgu', price: 34.53, currency: 'ETH' },
  { avatar: './assets/images/creator3.png', author: 'Ghiblier', price: 34.53, currency: 'ETH' }
];

const browses = [
  { art: './assets/images/browse1.png', icon: 'Brush', name: 'Art' },
  { art: './assets/images/browse2.png', icon: 'Swatches', name: 'Collectibles' },
  { art: './assets/images/browse3.png', icon: 'Music', name: 'Music' },
  { art: './assets/images/browse4.png', icon: 'Camera', name: 'Photography' },
  { art: './assets/images/browse5.png', icon: 'Video', name: 'Video' },
  { art: './assets/images/browse6.png', icon: 'Magic', name: 'Utility' },
  { art: './assets/images/browse7.png', icon: 'BasketBall', name: 'Sport' },
  { art: './assets/images/browse8.png', icon: 'Planet', name: 'Virtual Worlds' }
];

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
  }
];

const works = [
  {
    icon: './assets/images/wallet.png',
    title: 'Setup Your wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
  },
  {
    icon: './assets/images/collection.png',
    title: 'Create Collection',
    description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
  },
  {
    icon: './assets/images/earning.png',
    title: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
  }
];

const Home = () => {
  return (
    <Layouts>
      <section className="hero-section">
        <div>
          <div className="hero-detail">
            <h1 className="max-w-[600px] 2xl:max-w-[800px]">Discover digital art & Collect NFTs</h1>
            <p>NFT marketplace for whitelabel solution</p>
            <div className="hidden md:flex hero-action">
              <button className="primary-btn w-full sm:w-[250px] hidden md:flex">
                <IconMenu icon="Rocket" size={20} />
                <span>Get Started</span>
              </button>
              <div className="hero-amount">
                {heroAmounts.map((item: any, ind: number) => {
                  return (
                    <div key={item.title + ind} className="flex flex-col">
                      <p>{item.count}</p>
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hero-item">
            <img src={HeroImg} alt="hero" />
            <div className="hero-item-detail">
              <p>Space Walking</p>
              <div className="flex items-center gap-[12px]">
                <img src={CreatorImg} width="24px" alt="creator" />
                <span>Animakid</span>
              </div>
            </div>
          </div>
          <div className="flex md:hidden hero-action">
            <button className="primary-btn w-full flex md:hidden">
              <IconMenu icon="Rocket" size={20} />
              <span>Get Started</span>
            </button>
            <div className="hero-amount">
              {heroAmounts.map((item: any, ind: number) => {
                return (
                  <div key={item.title + ind} className="flex flex-col justify-self-center">
                    <p>{item.count}</p>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="trending-section">
        <div>
          <div className="trending-description">
            <h3>Trending Collection</h3>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <Swiper
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              600: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              840: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            className="mySwiper trending-collections"
          >
            {trendings.map((item: any, ind: number) => {
              return (
                <SwiperSlide key={'treding' + ind} className="treding-item">
                  <img src={item.art} alt={'treding' + ind} />
                  <div className="sub-collections">
                    {item.arts.map((art: string, i: number) => {
                      return (
                        <div key={'sub-art' + i}>
                          {i < 2 ? <img src={art} alt={'sub-art' + i} /> : <span>1025+</span>}
                        </div>
                      );
                    })}
                  </div>
                  <div className="collection-description">
                    <p>{item.title}</p>
                    <div className="flex items-center gap-[12px]">
                      <img src={item.creator.avatar} width="24px" alt={'creator' + ind} />
                      <span>{item.creator.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="creator-section">
        <div>
          <div className="creator-description">
            <div>
              <h3>Top creators</h3>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className="outline-btn w-full sm:w-[250px] hidden sm:flex">
              <IconMenu icon="Rocket" size={20} />
              View Rankings
            </button>
          </div>
          <div className="creator-collections">
            {creators.map((item: any, ind: number) => {
              return (
                <Creator
                  key={'creator' + ind}
                  ind={ind}
                  avatar={item.avatar}
                  author={item.author}
                  price={item.price}
                  currency={item.currency}
                ></Creator>
              );
            })}
          </div>
          <button className="outline-btn w-full sm:w-[250px] flex sm:hidden">
            <IconMenu icon="Rocket" size={20} />
            View Rankings
          </button>
        </div>
      </section>
      <section className="browse-section">
        <div>
          <div className="browse-description">
            <h3>Browse Categories</h3>
          </div>
          <div className="browse-collections">
            {browses.map((item: any, ind: number) => {
              return <Browse key={'browse' + ind} ind={ind} icon={item.icon} art={item.art} name={item.name} />;
            })}
          </div>
        </div>
      </section>
      <section className="nft-section">
        <div>
          <div className="nft-description">
            <div>
              <h3>Discover More NFTs</h3>
              <p>Explore new trending NFTs</p>
            </div>
            <button className="outline-btn w-full sm:w-[250px] hidden sm:flex">
              <IconMenu icon="Eye" size={20} />
              See All
            </button>
          </div>
          <div className="nft-collections">
            {nfts.map((item: any, ind: number) => {
              return (
                <NftCard
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
            <IconMenu icon="Eye" size={20} />
            See All
          </button>
        </div>
      </section>
      <section className="special-section">
        <div>
          <div className="special-container">
            <div>
              <div className="special-detail">
                <div className="special-author">
                  <img src={CreatorImg} width="24px" alt="special-author" />
                  <span>Shroomie</span>
                </div>
                <h2>Magic Mashrooms</h2>
                <button className="w-full sm:w-[250px] hidden sm:flex">
                  <IconMenu icon="Eye" size={20} />
                  See NFT
                </button>
              </div>
              <div className="special-auction">
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
              </div>
              <button className="w-full xs:w-[260px] flex sm:hidden">
                <IconMenu icon="Eye" size={20} />
                See NFT
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div>
          <div className="work-description">
            <h3>How it works</h3>
            <p>Find out how to get started</p>
          </div>
          <div className="work-collections">
            {works.map((item: any, ind: number) => {
              return (
                <Works
                  key={'browse' + ind}
                  ind={ind}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Home;
