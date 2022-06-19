import React, { useEffect } from 'react';
import Tesfoto from '../Img/TesFoto.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Profile() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
    if (!inView) {
      animation.start('hidden');
    }
    // console.log('use Effect hook, inView =', inView);
  }, [inView]);

  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };
  const variantsImg = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        bounce: 0.25,
      },
    },
  };

  return (
    <div ref={ref} id="Profile" className="pt-20 md:pt-28 lg:pt-36 px-setting flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 lg:gap-20 group ">
      <motion.div animate={animation} initial="hidden" variants={variants} className="text-left w-full">
        <div className="w-fit relative ">
          <h1>Profile</h1>
        </div>
        <h2 className="lg:mt-4 mb-2">
          Hello, i'm <span className="font-bold">Tri Hartono</span> usually called <span className="font-bold"> Tri</span>. I'm a junior front end development developer who has worked on several small projects. Great curiosity, honest and
          disciplined. For me, work is a responsibility that is carried out carefully and to the maximum extent possible, both personal and team work
        </h2>
      </motion.div>
      <motion.div animate={animation} initial="hidden" variants={variantsImg} className="w-full flex items-center justify-center">
        {/* <img className="rounded-xl" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /> */}
        <img className="rounded-md" src={Tesfoto} alt="" />
      </motion.div>
    </div>
  );
}
export default Profile;
