import React from 'react';
import Layouts from '../../components/Layouts';
import NFT1 from '../../assets/images/nft1.png';
import UserImg from '../../assets/images/user.png';
import IconMenu from '../../components/Icons';
import './home.scss';

const heroAmount = [
  { count: '240k+', title: 'Total Sale' },
  { count: '100k+', title: 'Auctions' },
  { count: '240k+', title: 'Artists' }
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
            <img src={NFT1} alt="nft" />
            <div className="hero-item-detail">
              <p>Space Walking</p>
              <div className="flex items-center gap-[12px]">
                <img src={UserImg} width="24px" />
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
    </Layouts>
  );
};

export default Home;
