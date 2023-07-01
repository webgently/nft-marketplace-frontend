import React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from '../../Icons';
import { menuLists, socialLists } from '../Header/list.config';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-steps">
          <div className="flex gap-[12px] items-center whitespace-nowrap">
            <IconMenu icon="Logo" size={32} className="text-purple" />
            <h2>NFT Marketplace</h2>
          </div>
          <div className="sub-menu">
            <p>NFT marketplace for Gatochain Foundation.</p>
            <div className="social-group">
              <p>Join our community</p>
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
        </div>
        <div className="footer-steps">
          <h2>Explore</h2>
          <div className="sub-menu">
            {menuLists.map((item: any, ind: number) => {
              return (
                <Link key={item.label + 'footer' + ind} to={item.url}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footer-steps">
          <h2>Join our weekly digest</h2>
          <div className="sub-menu">
            <p className="w-full md:max-w-[400px]">Get exclusive promotions & updates straight to your inbox.</p>
            <div className="search-bar">
              <div className="search-input">
                <input type="text" placeholder="Enter your email here" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="borderline" />
      <div className="footer-bottom">
        <p>&#169; Gatochain Foundation</p>
      </div>
    </footer>
  );
};

export default Footer;
