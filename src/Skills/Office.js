import React from 'react';
import Powerpoint from '../Img/powerpoint.png';
import Word from '../Img/word.png';
import Excel from '../Img/excel.png';
import CardSkills from './cardSkills';

function Office() {
  return (
    <div>
      <div className="Skills-grid">
        <CardSkills imgUrl={Word} />
        <CardSkills imgUrl={Powerpoint} />
        <CardSkills imgUrl={Excel} />
      </div>
    </div>
  );
}

export default Office;
