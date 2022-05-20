import React from 'react';
import Project from './Project';
import Profile from './Profile';
import Experience from './Experience';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import useDarkMode from '../Hook/useDarkMode';
import Skills from './Skills';

function Home() {
  const [Hide, setHide] = useState('hide-1');
  const [coba, setCoba] = useState('coba-1');
  const StartPortofolio = () => {
    setCoba('coba-2');
    setHide('hide-2');
  };
  useDarkMode();

  return (
    <>
      <div className="dark:bg-gray-900 bg-blue-100 text-gray-800 dark:text-slate-200 transition duration-500" id="Home">
        <div className={coba}>
          <div className="text-5xl md:text-8xl lg:text-9xl text-gray-900 dark:text-slate-100 relative">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full absolute -top-2 -left-2"></div>
            <div className="relative z-10">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString('Portofolio')

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Tri Hartono')
                    .start();
                }}
              />
            </div>
          </div>
          <div className="text-lg bg-gradient-to-br from-blue-500 to-blue-700 px-4 py-2 rounded-lg font-semibold text-gray-900 dark:text-white z-10" onClick={StartPortofolio}>
            Show Portofolio
          </div>
        </div>
        <div className={Hide}>
          <Navbar />
          <Profile />
          <Skills />
          <Project />
          <Experience />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
