import React from 'react';
import Tailwindcss from '../Img/TailwindCss.png';
import Bootstrap from '../Img/bootstrap.png';
import Html from '../Img/Html.png';
import CardSkills from '../component/cardSkills';
function JsFramework() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={Html} />
        <CardSkills imgUrl={Tailwindcss} />
        <CardSkills imgUrl={Bootstrap} />
      </div>
    </div>
  );
}

export default JsFramework;
