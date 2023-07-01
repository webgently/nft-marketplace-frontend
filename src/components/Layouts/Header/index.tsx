import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconMenu from '../../Icons';
import Menu from './Menu';
import { menuLists } from './list.config';
import './header.scss';

const Header = () => {
  /* common variable */
  const location = useLocation();
  const [scrollEvent, setScrollEvent] = React.useState(false);

  const [mobile, setMobile] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const getScrollPosition = () => window.scrollY;
  const getWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  React.useEffect(() => {
    const setResponsiveness = () => {
      if (getWidth() < 840) {
        setMobile(true);
      } else {
        setMobile(false);
        setMenuOpen(false);
      }
    };
    setResponsiveness();
    const setScrollEventY = () => {
      getScrollPosition() > 300 ? setScrollEvent(true) : setScrollEvent(false);
    };
    setScrollEventY();
    window.addEventListener('scroll', setScrollEventY);
    window.addEventListener('resize', setResponsiveness);
    return () => {
      window.removeEventListener('resize', setResponsiveness);
      window.removeEventListener('scroll', setScrollEventY);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header className={scrollEvent ? 'header-container' : ''}>
        <div className="logo-container">
          <IconMenu icon="Logo" size={32} className="text-purple" />
          <h2>NFT Marketplace</h2>
        </div>
        {mobile ? (
          <button onClick={() => setMenuOpen(true)}>
            <IconMenu icon="Hamburger" size={24} />
          </button>
        ) : (
          <div className="navbar-group">
            {menuLists.map((item: any, ind: number) => {
              return (
                <div key={item.label + ind}>
                  <Link to={item.url} className={location.pathname === item.url ? '_active' : ''}>
                    {item.label}
                  </Link>
                </div>
              );
            })}
            <button>
              <IconMenu icon="User" size={20} />
              <span>Sign Up</span>
            </button>
          </div>
        )}
      </header>
      <Menu open={menuOpen} setOpen={setMenuOpen} navList={menuLists} />
    </>
  );
};

export default Header;
