import React from 'react';
import Html from '../Img/Html.png';
import Css from '../Img/Css.png';
import JavaScript from '../Img/JavaScript.png';
import Tailwindcss from '../Img/TailwindCss.png';
import Bootstrap from '../Img/bootstrap.png';
import CardSkills from './cardSkills';
import ReactJS from '../Img/reactJs.png';
import NodeJs from '../Img/NodeJS.png';

function Program() {
  return (
    <div className="Skills-grid">
      <CardSkills imgUrl={Html} />
      <CardSkills imgUrl={Css} />
      <CardSkills imgUrl={JavaScript} />
      <CardSkills imgUrl={Bootstrap} />
      <CardSkills imgUrl={Tailwindcss} />
      <CardSkills imgUrl={ReactJS} />
      <CardSkills imgUrl={NodeJs} />
    </div>
  );
}

export default Program;
