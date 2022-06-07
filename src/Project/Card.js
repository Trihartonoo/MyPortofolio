import React from 'react';

function Card(props) {
  return (
    <div className=" shadow-xl bg-colorBackground dark:bg-black/50 text-gray-900 dark:text-colorBackground rounded-lg overflow-hidden transition-all duration-500 hover:shadow relative p-4">
      <div className="">
        <img className="w-full hover:scale-110 transition duration-500 rounded-xl shadow-xl" src={props.imageUrl} alt="Project Picture" srcSet="" />
      </div>
      <div className=" my-3">
        <div className="text-sm md:text-base font-semibold">{props.title}</div>
        <div className="text-sm md:text-base">{props.ket}</div>
      </div>
      <div className="text-sm rounded-md transition duration-300 flex gap-2 items-center">
        <a
          className="flex items-center transition duration-400 justify-center rounded-sm hover:bg-gray-900 dark:hover:bg-colorBackground dark:hover:text-gray-900 hover:text-colorBackground gap-2 py-2 px-4 border-2 border-gray-900 dark:border-colorBackground"
          href={props.toUrl || '/'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <div>Demo</div>
        </a>
        <a
          className="flex items-center transition duration-400 justify-center rounded-sm hover:bg-gray-900 dark:hover:bg-colorBackground dark:hover:text-gray-900 hover:text-colorBackground group  gap-2 py-2 px-4 border-2 border-gray-900 dark:border-colorBackground"
          href={props.toGithub || '/'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-gray-900 dark:fill-colorBackground group-hover:fill-colorBackground dark:group-hover:fill-gray-900"
            viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
              <path
                d="M245 631 c-92 -24 -173 -91 -216 -176 -34 -69 -34 -187 0 -262 26
                  -58 103 -136 156 -159 49 -20 55 -18 55 21 0 33 -2 35 -35 35 -35 0 -42 5 -90
                  66 -44 56 -24 61 34 9 45 -41 73 -44 96 -12 14 21 14 22 -7 30 -57 21 -86 40
                  -101 67 -22 36 -23 128 -1 158 8 12 12 27 9 32 -10 16 5 70 18 70 7 0 24 -6
                  38 -14 32 -16 202 -15 242 2 16 7 32 12 37 12 11 0 23 -56 15 -70 -3 -5 1 -20
                  9 -32 22 -31 21 -126 -1 -158 -24 -35 -43 -48 -86 -60 -32 -9 -36 -13 -27 -30
                  5 -10 10 -46 10 -79 0 -35 4 -61 10 -61 55 0 167 96 201 173 34 75 34 193 0
                  262 -32 64 -93 124 -155 153 -53 25 -160 37 -211 23z"
              />
            </g>
          </svg>
          <div>Github</div>
        </a>
      </div>
    </div>
  );
}
export default Card;
