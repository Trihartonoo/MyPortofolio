import React from 'react';
import Html from '../Img/Html.png';
import CardSkills from '../component/cardSkills';
function JsFramework() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={Html} />
      </div>
    </div>
  );
}

export default JsFramework;
