import React from 'react';
import Html from '../Img/Html.png';
import Css from '../Img/Css.png';
import JavaScript from '../Img/JavaScript.png';
import Tailwindcss from '../Img/TailwindCss.png';
import Bootstrap from '../Img/bootstrap.png';
import CardSkills from './cardSkills';
import ReactJS from '../Img/reactJs.png';
import NodeJs from '../Img/NodeJS.png';
import { motion } from 'framer-motion';

function Program() {
  return (
    <div className="Skills-grid">
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.2 }}>
        <CardSkills imgUrl={Html} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.4 }}>
        <CardSkills imgUrl={Css} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.6 }}>
        <CardSkills imgUrl={JavaScript} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.8 }}>
        <CardSkills imgUrl={Bootstrap} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1 }}>
        <CardSkills imgUrl={Tailwindcss} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.2 }}>
        <CardSkills imgUrl={NodeJs} />
      </motion.div>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.4 }}>
        <CardSkills imgUrl={ReactJS} />
      </motion.div>
    </div>
  );
}

export default Program;
