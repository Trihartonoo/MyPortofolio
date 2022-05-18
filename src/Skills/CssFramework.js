import React from 'react';
import Tailwindcss from '../Img/TailwindCss.png';
import Bootstrap from '../Img/bootstrap.png';
import CardSkills from './cardSkills';

function CssFramework() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={Tailwindcss} />
        <CardSkills imgUrl={Bootstrap} />
      </div>
    </div>
  );
}

export default CssFramework;
