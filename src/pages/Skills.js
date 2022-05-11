import React, { useState } from 'react';
import UnderlineText from '../component/UnderlineText';
import Language from '../component/Language';
import CssFramework from '../component/CssFramework';
import JsFramework from '../component/JsFramework';
import Design from '../component/Design';

export default function Skills() {
  const [active, setActive] = useState('Language');

  return (
    <div className="mb-10 md:mt-10 md:mb-20">
      <div className="flex flex-col px-setting  md:flex-row items-end md:items-center justify-between">
        <div className="w-fit h-fit relative overflow-hidden">
          <UnderlineText />
          <h2 className="text-2xl md:text-4xl relative">Skills</h2>
        </div>
        <div className="flex gap-1 md:gap-2 text-sm md:text-base my-2">
          <div onClick={() => setActive('Language')} className="border-b-2 border-transparent text-gray-800 hover:text-gray-900">
            Language
          </div>
          <div onClick={() => setActive('CssFramework')} className="border-b-2 border-transparent text-gray-800 hover:text-gray-900">
            CssFramework
          </div>
          <div onClick={() => setActive('JsFramework')} className="border-b-2 border-transparent text-gray-800 hover:text-gray-900">
            JsFramework
          </div>
          <div onClick={() => setActive('Design')} className="border-b-2 border-transparent text-gray-800 hover:text-gray-900">
            Design
          </div>
        </div>
      </div>
      <div className="my-4 px-setting">
        {active === 'Language' && <Language />}
        {active === 'CssFramework' && <CssFramework />}
        {active === 'JsFramework' && <JsFramework />}
        {active === 'Design' && <Design />}
      </div>
    </div>
  );
}
