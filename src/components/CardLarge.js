import React from 'react';

import './components.css';

const CardLarge = ({ title, para1, para2 }) => {
  const formattedTitle = `${title.charAt(0).toUpperCase()}${title.slice(
    1,
    title.length,
  )}`;
  return (
    <div className="card-large">
      <div className="card-large-title card-large-title-main">
        {formattedTitle}
      </div>
      <div className="content">
        <div className="card-large-title">What this means?</div>
        <div className="card-large-para">{para1}</div>
        <div className="card-large-title card-large-title-last">
          How to fix?
        </div>
        <div className="card-large-para">{para2}</div>
      </div>
    </div>
  );
};

export default CardLarge;
