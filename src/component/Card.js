import React from 'react';

function Card(props) {
  return (
    <div className=" bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500 hover:shadow relative group">
      <div className="">
        <img className="w-full" src={props.imageUrl} alt="Project Picture" srcSet="" />
      </div>
      <div className="group-hover:flex group-hover:translate-y-0 transition duration-1000 z-10 absolute inset-0 translate-y-full px-4 py-2 bg-white/80 flex flex-col md:flex-row items-center justify-evenly">
        <div className="md:w-1/2 text-center text-gray-900">
          <div className="text-sm font-semibold">{props.title}</div>
          <div className="text-sm gap-4">{props.ket}</div>
        </div>
        <div className="text-sm px-2 py-1 md:px-4 md:py-2 ring-1 ring-slate-200 bg-gradient-to-br from-blue-500 to-blue-700 text-slate-200 rounded-md transition duration-300">
          <a href={props.toUrl || '/'}>{props.textLogo}</a>
        </div>
      </div>
    </div>
  );
}
export default Card;
