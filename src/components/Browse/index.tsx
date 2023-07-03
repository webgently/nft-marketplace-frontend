import React from 'react';
import IconMenu from '../Icons';
import './browse.scss';
const Browse = ({ ind, icon, art, name }: any) => {
  return (
    <div className="browse-card">
      <div className="browse-image-container">
        <div className="overlay" />
        <IconMenu icon={icon} size={100} className="icon" />
        <img src={art} width="100%" alt={'browse' + ind} />
      </div>
      <div className="browse-title-container">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Browse;
