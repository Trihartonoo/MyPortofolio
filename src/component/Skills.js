import React, { useState } from 'react';
import Program from '../Skills/Program';
import Office from '../Skills/Office';
import Design from '../Skills/Design';

export default function Skills() {
  const [isActive, setIsActive] = useState('Program');

  return (
    <div className="py-10 md:pt-10 md:pb-20 px-setting " id="Skills">
      <div className="flex flex-col md:flex-row items-end md:items-center justify-between">
        <div className="w-fit h-fit relative overflow-hidden">
          <h1>Skills</h1>
        </div>
        <div className="flex gap-2 md:gap-4 text-sm md:text-base 2xl:text-2xl my-2">
          <div onClick={() => setIsActive('Program')} className={isActive === 'Program' ? 'SkillsInActive' : 'Active '}>
            Frontend Dev
          </div>
          <div onClick={() => setIsActive('Office')} className={isActive === 'Office' ? 'SkillsInActive' : 'Active'}>
            Ms Office
          </div>
          <div onClick={() => setIsActive('Design')} className={isActive === 'Design' ? 'SkillsInActive' : 'Active'}>
            Design
          </div>
        </div>
      </div>
      <div className="my-4">
        {isActive === 'Program' && <Program />}
        {isActive === 'Office' && <Office />}
        {isActive === 'Design' && <Design />}
      </div>
    </div>
  );
}
