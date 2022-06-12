import React, { useEffect } from 'react';
import Powerpoint from '../Img/powerpoint.png';
import Word from '../Img/word.png';
import Excel from '../Img/excel.png';
import CardSkills from './cardSkills';
import { motion } from 'framer-motion';

function Office() {
  return (
    <div>
      <div className="Skills-grid">
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.2 }}>
          <CardSkills imgUrl={Word} />
        </motion.div>
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.4 }}>
          <CardSkills imgUrl={Powerpoint} />
        </motion.div>
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.6 }}>
          <CardSkills imgUrl={Excel} />
        </motion.div>
      </div>
    </div>
  );
}

export default Office;
