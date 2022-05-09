import React from 'react';
import Html from '../Img/Html.png';
import Css from '../Img/Css.png';
import JavaScript from '../Img/JavaScript.png';
import CardSkills from '../component/cardSkills';

function CssFramework() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={Html} />
        <CardSkills imgUrl={JavaScript} />
        <CardSkills imgUrl={Css} />
      </div>
    </div>
  );
}

export default CssFramework;
