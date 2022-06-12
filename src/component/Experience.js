import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {
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
      },
    },
  };
  const variantsImg = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div ref={ref} className=" py-10 group px-setting relative" id="Experience">
      <div className=" w-fit mx-auto mb-4 relative z-0">
        <h1 className="first-paragraph">Experience</h1>
      </div>

      <div className="first w-full h-1/2  flex justify-end md:justify-start items-center relative">
        <div className="absolute w-1/2 md:w-full left-0 md:left-1/2 h-full ">
          <div className="w-1 h-full bg-gray-900 dark:bg-colorBackground rounded-xl"></div>
        </div>
        <div className="md:w-1/2 p-4 md:p-6 relative flex md:justify-center items-center">
          <motion.div animate={animation} initial="hidden" variants={variants} className=" absolute w-5 h-5 -left-2 md:hidden rounded-full border-2 border-gray-900 bg-colorBackground"></motion.div>
          <motion.div animate={animation} initial="hidden" variants={variants} className="absolute w-5 h-5 md:-right-3 rounded-full border-2 border-gray-900 bg-colorBackground hidden md:block"></motion.div>

          <motion.div animate={animation} initial="hidden" variants={variants} className="text-sm md:text-base shadow-xl hover:shadow p-4 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200 rounded-xl">
            <h2 className="font-semibold">Admin & Data entry</h2>
            <h2 className="font-bold mb-2">Drym corp</h2>
            <div className="font-bold">1 Year</div>
            <div>2021 - 2022. Fully responsible for data management at DRYM, handling all product sales transactions, managing company data using MS.Excel and Spreadsheets on GoogleDrive</div>
          </motion.div>
        </div>
      </div>
      <div className="first w-full h-1/2  flex justify-end md:justify-end items-center relative">
        <div className="absolute -top-1 w-1/2 md:w-full left-0 md:left-1/2 h-full ">
          <div className="w-1 h-full bg-gray-900 dark:bg-colorBackground rounded-xl"></div>
        </div>
        <div className="md:w-1/2 p-4 md:p-6 relative flex md:justify-center items-center">
          <motion.div animate={animation} initial="hidden" variants={variantsImg} className="absolute w-5 h-5 -left-2 md:-right-3 rounded-full border-2 border-gray-900 bg-colorBackground"></motion.div>
          <motion.div animate={animation} initial="hidden" variants={variantsImg} className="text-sm md:text-base shadow-xl hover:shadow p-4 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200 rounded-xl">
            <h2 className="font-semibold">Project Staff</h2>
            <h2 className="font-bold mb-2">Indonesia International Education Foundation - General Affair</h2>
            <div className="font-bold">4 month</div>
            <div>2016 - 2017. Responsible during the project by preparing the needs, both tools and designs</div>
          </motion.div>
        </div>
      </div>
      {/* <div className="w-full h-1/2  flex justify-end items-center relative bg-slate-200">
        <div className="absolute w-1/2 md:w-full left-1/2 h-full">
          <div className="w-1 h-full bg-gray-900"></div>
        </div>
        <div className="text-sm md:text-base shadow-xl hover:shadow p-4 w-9/12 md:w-2/5 rounded-xl my-2 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200">
          <div className="font-semibold">Project Staff</div>
          <div className="font-bold">Indonesia International Education Foundation - General Affair</div>
          <div>2016 - 2017. Bertanggung jawab selama project berlangsung dengan menyiapkan kebutuhan, baik alat maupun desain.</div>
        </div>
      </div> */}
    </div>
  );
}
export default Experience;
