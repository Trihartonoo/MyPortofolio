import React from 'react';
import Card from './Card';
import naufalSatu from '../Img/naufalSatu.png';
import naufalDua from '../Img/naufalDua.png';

function CardDekstop() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
      <Card imageUrl={naufalDua} title="Design by Naufal@array.id" ket="Slicing Design array id (Tailwindcss & Aos liblary)" toUrl="https://trihartonoo.github.io/Arrayid-Wumbo/" textLogo="Demo" />
      <Card imageUrl={naufalSatu} title="Design by Naufal@array.id" ket="Slicing Design array id (Tailwindcss & Aos liblary)" toUrl="https://trihartonoo.github.io/Arrayid-MSTSKP/" textLogo="Demo" />
    </div>
  );
}

export default CardDekstop;
