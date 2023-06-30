import React, { useState } from "react";
import { Menu } from '@mui/material';

import logo_img from "../../assets/image/Logo.svg"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

import { menuLists } from "./header.config";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="h-60 md:h-80 lg:h-100 flex flex-row items-center justify-between  px-20 sm:px-30 md:px-40">
      <img alt=""
        src={logo_img}
        className="max-w-50vw cursor-pointer"
      />

      <div className="hidden lg:flex flex-row gap-30 items-center">
        {menuLists.map((menuList: MenuObject, key: number) => (
          <div className="cursor-pointer" key={key}>
            <span className="text-1.1r font-semibold">
              {menuList.label}
            </span>
          </div>
        ))}

        <div className="flex gap-10 px-25 py-18 rounded-3xl bg-btnBg cursor-pointer">
          <Person3OutlinedIcon />
          <span className="text-1.1r font-semibold">Sign Up</span>
        </div>
      </div>

      <div className="flex lg:hidden items-center">
        <div onClick={handleClick}>
          <MenuOpenIcon className="text-1.8r cursor-pointer text-white/80 hover:text-white" />
        </div>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: '#2B2B2B',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div className="flex flex-col gap-10 px-30 py-20 bg-baseBg">
            {menuLists.map((menuList: MenuObject, key: number) => (
              <div className="cursor-pointer" key={key}>
                <span className="text-1.1r font-bold text-white/60 hover:text-white/80">
                  {menuList.label}
                </span>
              </div>
            ))}
          </div>
        </Menu>
      </div>
    </div>
  )
}