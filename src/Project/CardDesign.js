import React from 'react';
import Card from './Card';
import JustTravel from '../Img/JustTravel.png';
import RumahImpian from '../Img/RumahImpian.png';

function CardDesign() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
      <Card imageUrl={RumahImpian} title="Design by Me" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" toGithub="https://trihartonoo.github.io/MyPortofolio" />
      <Card imageUrl={JustTravel} title="Design by Me" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" toGithub="https://trihartonoo.github.io/MyPortofolio" />
    </div>
  );
}

export default CardDesign;
