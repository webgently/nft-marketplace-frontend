import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Layouts from '../../components/Layouts';
import HeroImg from '../../assets/images/hero.png';
import CreatorImg from '../../assets/images/creator2.png';
import IconMenu from '../../components/Icons';
import 'swiper/css';
import 'swiper/css/pagination';
import './home.scss';

const heroAmount = [
  { count: '240k+', title: 'Total Sale' },
  { count: '100k+', title: 'Auctions' },
  { count: '240k+', title: 'Artists' }
];

const trending = [
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

const Home = () => {
  return (
    <Layouts>
      <section className="hero-section">
        <div>
          <div className="hero-detail">
            <h1 className="max-w-[600px] 2xl:max-w-[800px]">Discover digital art & Collect NFTs</h1>
            <p>NFT marketplace for whitelabel solution</p>
            <div className="hidden md:flex hero-action">
              <button className="max-w-[230px]">
                <IconMenu icon="Rocket" size={20} />
                <span>Get Started</span>
              </button>
              <div className="hero-amount">
                {heroAmount.map((item: any, ind: number) => {
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
            <button className="w-full md:max-w-[230px]">
              <IconMenu icon="Rocket" size={20} />
              <span>Get Started</span>
            </button>
            <div className="hero-amount">
              {heroAmount.map((item: any, ind: number) => {
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
            {trending.map((item: any, ind: number) => {
              return (
                <SwiperSlide className="treding-item" key={'treding' + ind}>
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
    </Layouts>
  );
};

export default Home;
