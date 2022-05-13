import React, { useState } from 'react';
import UnderlineText from '../component/UnderlineText';
import Language from '../component/Language';
import CssFramework from '../component/CssFramework';
import JsFramework from '../component/JsFramework';
import Design from '../component/Design';

export default function Skills() {
  const [isActive, setIsActive] = useState('Language');

  return (
    <div className="mb-10 md:mt-10 md:mb-20">
      <div className="flex flex-col px-setting  md:flex-row items-end md:items-center justify-between">
        <div className="w-fit h-fit relative overflow-hidden">
          <UnderlineText />
          <h1>Skills</h1>
        </div>
        <div className="flex gap-1 md:gap-2 text-sm md:text-base my-2">
          <div onClick={() => setIsActive('Language')} className={'border-b-2 border-transparent text-gray-800 dark:text-slate-300 hover:text-gray-900' + (isActive ? 'border-blue-600' : 'border-transparent')}>
            Language
          </div>
          <div onClick={() => setIsActive('CssFramework')} className={'border-b-2 border-transparent text-gray-800 dark:text-slate-300 hover:text-gray-900' + (isActive ? 'border-blue-600' : 'border-transparent')}>
            CssFramework
          </div>
          <div onClick={() => setIsActive('JsFramework')} className={'border-b-2 border-transparent text-gray-800 dark:text-slate-300 hover:text-gray-900' + (isActive ? 'border-blue-600' : 'border-transparent')}>
            JsFramework
          </div>
          <div onClick={() => setIsActive('Design')} className={'border-b-2 border-transparent text-gray-800 dark:text-slate-300 hover:text-gray-900' + (isActive ? 'border-blue-600' : 'border-transparent')}>
            Design
          </div>
        </div>
      </div>
      <div className="my-4 px-setting">
        {isActive === 'Language' && <Language />}
        {isActive === 'CssFramework' && <CssFramework />}
        {isActive === 'JsFramework' && <JsFramework />}
        {isActive === 'Design' && <Design />}
      </div>
    </div>
  );
}
