import React from 'react';
import Card from '../component/Card';
import naufalSatu from '../Img/naufalSatu.png';
import naufalDua from '../Img/naufalDua.png';
import JustTravel from '../Img/JustTravel.png';
import RumahImpian from '../Img/RumahImpian.png';
import UnderlineText from '../component/UnderlineText';

function Project() {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'card-1',
  //   };
  // }

  // const name = this.state.name;
  return (
    <div className="px-setting">
      <div className=" flex flex-col md:flex-row-reverse items-start md:items-center justify-between relative mb-4 ">
        <div className="w-fit h-fit relative overflow-hidden">
          <UnderlineText />
          <h1>Project</h1>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-md">
          <div>Web</div>
          <div>Dekstop Application</div>
          <div>Feed Instagram</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-10">
        <Card imageUrl={naufalDua} title="Design by Naufal@array.id" ket="Slicing Design array id (Tailwindcss & Aos liblary)" toUrl="https://trihartonoo.github.io/Arrayid-Wumbo/" textLogo="Demo" />
        <Card imageUrl={naufalSatu} title="Design by Naufal@array.id" ket="Slicing Design array id (Tailwindcss & Aos liblary)" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" textLogo="Demo" />
        <Card imageUrl={JustTravel} title="Design by Naufal@array.id" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" textLogo="Comming soon" />
        <Card imageUrl={RumahImpian} title="Design by Me" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" textLogo="Comming soon" />
      </div>
    </div>
  );
}

export default Project;
