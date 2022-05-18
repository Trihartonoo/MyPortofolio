import React from 'react';
import Html from '../Img/Html.png';
import Css from '../Img/Css.png';
import JavaScript from '../Img/JavaScript.png';
import CardSkills from './cardSkills';
function Language() {
  return (
    <div className="Skills-grid">
      <CardSkills imgUrl={Html} />
      <CardSkills imgUrl={Css} />
      <CardSkills imgUrl={JavaScript} />
    </div>
  );
}

export default Language;
