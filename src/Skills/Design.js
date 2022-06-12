import React from 'react';
import Figma from '../Img/Figma.png';
import CardSkills from './cardSkills';
import { motion } from 'framer-motion';
function Design() {
  return (
    <div className="Skills-grid">
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.3 }}>
        <CardSkills imgUrl={Figma} />
      </motion.div>
    </div>
  );
}

export default Design;
