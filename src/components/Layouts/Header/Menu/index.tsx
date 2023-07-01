import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconMenu from '../../../../components/Icons';
import UserImg from '../../../../assets/images/user.png';
import './menu.scss';

const profileList = [
  {
    label: 'My Profile',
    icon: 'User',
    action: 'profile'
  },
  {
    label: 'Settings',
    icon: 'Setting',
    action: 'setting'
  },
  {
    label: 'Logout',
    icon: 'SignOut',
    action: 'signOut'
  }
];
const Menu = ({ open, setOpen, navList }: any) => {
  /* common variable */
  const auth = true;
  const location = useLocation();

  /* profile action function */
  const userAction = (action: string) => {
    switch (action) {
      case 'profile':
        break;
      case 'setting':
        break;
      case 'signOut':
        break;
    }
  };

  return (
    <>
      {open && (
        <div>
          <div
            className="fixed inset-0 bg-primary bg-opacity-80 transition-opacity z-[999]"
            onClick={() => setOpen(false)}
          ></div>
          <menu>
            <div className="menu-header">
              <div className="flex items-center gap-[20px] p-[20px]">
                <img src={UserImg} alt="logo" className="user" />
                <div className="text-white text-[16px]">
                  <p className="font-[400]">Hello,</p>
                  <p className="font-[700]">DigiLab</p>
                </div>
              </div>
              <span onClick={() => setOpen(false)}>&times;</span>
            </div>
            <div className="nav-group">
              <div className="nav-list">
                {navList.map((item: any, ind: number) => {
                  return (
                    <Link
                      key={item.label + 'menu' + ind}
                      to={item.url}
                      className={location.pathname === item.url ? '_active' : ''}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="user-action-group">
                {auth ? (
                  <button>
                    <IconMenu icon="User" size={20} />
                    <span>Sign Up</span>
                  </button>
                ) : (
                  <>
                    {profileList.map((item: any, ind: number) => {
                      return (
                        <div key={ind} onClick={() => userAction(item.action)}>
                          <IconMenu icon={item.icon} size={20} className="text-white" />
                          <p>{item.label}</p>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </menu>
        </div>
      )}
    </>
  );
};

export default Menu;
