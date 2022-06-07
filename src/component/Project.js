import React, { useState } from 'react';
import CardWeb from '../Project/CardWeb';
import CardDekstop from '../Project/CardDekstop';

function Project() {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'card-1',
  //   };
  // }

  // const name = this.state.name;
  const [isActive, setIsActive] = useState('Web');

  return (
    <div className="px-setting" id="Project">
      <div className=" flex flex-col md:flex-row-reverse items-start md:items-center justify-between relative mb-4 ">
        <div className="w-fit h-fit relative overflow-hidden">
          <h1>Project</h1>
        </div>
        <div className="flex items-center gap-4 my-2 text-sm md:text-base 2xl:text-2xl">
          <div onClick={() => setIsActive('Web')} className={isActive === 'Web' ? 'SkillsInActive' : 'Active '}>
            Web
          </div>
          {/* <div onClick={() => setIsActive('Dekstop')} className={isActive === 'Dekstop' ? 'SkillsInActive' : 'Active '}>
            Dekstop Aplication
          </div> */}
        </div>
      </div>
      <div className="">
        {isActive === 'Web' && <CardWeb />}
        {/* {isActive === 'Dekstop' && <CardDekstop />} */}
      </div>
    </div>
  );
}

export default Project;
