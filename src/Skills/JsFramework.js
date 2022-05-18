import React from 'react';
import CardSkills from './cardSkills';
import JavaScript from '../Img/JavaScript.png';

function JsFramework() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={JavaScript} />
      </div>
    </div>
  );
}

export default JsFramework;
