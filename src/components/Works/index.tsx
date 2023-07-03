import React from 'react';
import './works.scss';

const Works = ({ ind, icon, title, description }: any) => {
  return (
    <div className="work-item">
      <img src={icon} alt={'work' + ind} />
      <div className="flex flex-col items-start xs:items-center gap-[10px]">
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Works;
