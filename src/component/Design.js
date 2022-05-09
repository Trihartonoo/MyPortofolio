import React from 'react';
import Figma from '../Img/Figma.png';
import CardSkills from '../component/cardSkills';

function Design() {
  return (
    <div>
      <div>
        <div className="Skills-grid">
          <CardSkills imgUrl={Figma} />
        </div>
      </div>
    </div>
  );
}

export default Design;
