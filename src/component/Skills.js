import React, { useState } from 'react';
import UnderlineText from '../component/UnderlineText';
import Language from '../Skills/Language';
import CssFramework from '../Skills/CssFramework';
import JsFramework from '../Skills/JsFramework';
import Design from '../Skills/Design';

export default function Skills() {
  const [isActive, setIsActive] = useState('Language');

  return (
    <div className="py-10 md:pt-10 md:pb-20 px-setting " id="Skills">
      <div className="flex flex-col md:flex-row items-end md:items-center justify-between">
        <div className="w-fit h-fit relative overflow-hidden">
          <UnderlineText />
          <h1>Skills</h1>
        </div>
        <div className="flex gap-1 md:gap-2 text-sm md:text-base my-2">
          <div onClick={() => setIsActive('Language')} className={isActive === 'Language' ? 'SkillsInActive' : 'Active '}>
            Language
          </div>
          <div onClick={() => setIsActive('CssFramework')} className={isActive === 'CssFramework' ? 'SkillsInActive' : 'Active'}>
            CssFramework
          </div>
          <div onClick={() => setIsActive('JsFramework')} className={isActive === 'JsFramework' ? 'SkillsInActive' : 'Active'}>
            JsFramework
          </div>
          <div onClick={() => setIsActive('Design')} className={isActive === 'Design' ? 'SkillsInActive' : 'Active'}>
            Design
          </div>
        </div>
      </div>
      <div className="my-4">
        {isActive === 'Language' && <Language />}
        {isActive === 'CssFramework' && <CssFramework />}
        {isActive === 'JsFramework' && <JsFramework />}
        {isActive === 'Design' && <Design />}
      </div>
    </div>
  );
}
