import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Experience() {
  // const [innerHeight, useInnerHeight] = window();
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.shoe',
  //       start: 'center center',
  //       end: 'bottom top',
  //       scrub: true,
  //       pin: true,
  //     },
  //   })
  //   .from('.midsole', { y: useInnerHeight * 1.5 })
  //   .from('.outsole', { y: useInnerHeight * 1.5 });

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  // useLayoutEffect(() => {
  //   let element = ref.current;
  //   let svg = document.getElementsByClassName('svg-path')[0];
  //   const length = svg.getTotalLength();

  //   console.log(length);
  //   //start
  //   svg.style.stokeDasharray = length;
  //   //hide
  //   svg.style.stokeDashoffset = length;

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: element,
  //       start: 'top center',
  //       end: 'bottom bottom',
  //       onUpdate: (self) => {
  //         const draw = length * self.progress;

  //         svg.style.strokeDashoffset = length - draw;
  //       },
  //     },
  //   });

  //   return () => {};
  // }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll('.first-paragraph'),
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        repeat: 1,
        y: 0,
      }
    );
  }, []);
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(element.querySelectorAll('.pengalaman'), {
  //     scale: 1,
  //     duration: 2,
  //     ease: 'none',
  //     delay: 5,
  //   });
  // }, []);
  return (
    <div ref={ref} className=" py-10 group px-setting relative" id="Experience">
      <div className=" w-fit mx-auto mb-4 relative z-0">
        <h1 className="first-paragraph">Experience</h1>
      </div>
      <div className="first w-full h-1/2  flex justify-end md:justify-start items-center relative">
        <div className=" absolute top-0 w-1/2 md:w-full left-0 h-full ">
          <svg className="svg-path h-full w-1/2 md:w-full md:h-full transition duration-1000 dark:stroke-slate-100 stroke-black" viewBox="0 0 54 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5 0.5V181.5C9.94829 183.367 2 196.5 2 206C2 215.5 10.9386 227.673 26.5 231C43.8511 227.916 52.5 215.5 51.5 206C50.5 196.5 26.5 181.5 26.5 206C26.5 230.5 26.5 256.5 26.5 256.5" strokeWidth="4" />
          </svg>
        </div>
        <div className="pengalaman text-sm md:text-base shadow-xl hover:shadow p-4 w-9/12 md:w-2/5 rounded-xl bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200">
          <div className="font-semibold">Admin & Data entry</div>
          <div className="font-bold">Drym corp</div>
          <div>2021 - 2022. Bertanggung jawab penuh atas pengelolaan data di DRYM, menangani semua penjualan produk transaksi, mengelola data perusahaan menggunakan MS.Excel dan Spreadsheet di GoogleDrive</div>
        </div>
      </div>
      <div className="w-full h-1/2  flex justify-end items-center relative">
        <div className="absolute -top-2 w-1/2 md:w-full left-0 h-full ">
          <svg className="h-full w-1/2 md:w-full md:h-full transition duration-1000 dark:stroke-slate-100 stroke-black" viewBox="0 0 54 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5 0.5V181.5C9.94829 183.367 2 196.5 2 206C2 215.5 10.9386 227.673 26.5 231C43.8511 227.916 52.5 215.5 51.5 206C50.5 196.5 26.5 181.5 26.5 206C26.5 230.5 26.5 256.5 26.5 256.5" strokeWidth="4" />
          </svg>
        </div>
        <div className="pengalaman text-sm md:text-base shadow-xl hover:shadow p-4 w-9/12 md:w-2/5 rounded-xl my-2 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200">
          <div className="font-semibold">Project Staff</div>
          <div className="font-bold">Indonesia International Education Foundation - General Affair</div>
          <div>2016 - 2017. Bertanggung jawab selama project berlangsung dengan menyiapkan kebutuhan, baik alat maupun desain.</div>
        </div>
      </div>

      {/* <div className=" w-fit relative overflow-hidden ">
        <div className="group-hover:translate-x-0 translate-x-full transition duration-1000 absolute bottom-2 bg-gradient-to-br from-blue-600 to-blue-300 h-2 w-full rounded-sm z-0"></div>
        <h2 className="text-2xl md:text-4xl relative">Experience</h2>
      </div>
      <div className="flex-end md:w-1/2 text-sm md:text-base shadow-lg  p-4">
        <div className="font-semibold">Admin & Data entry</div>
        <div className="font-bold">Drym corp</div>
        <div>2021 - 2022. Bertanggung jawab penuh atas pengelolaan data di DRYM, menangani semua penjualan produk transaksi, mengelola data perusahaan menggunakan MS.Excel dan Spreadsheet di GoogleDrive</div>
      </div>

      <div className=" md:w-1/2 h-full text-sm md:text-base shadow-lg  p-4">
        <div className="font-semibold">Project Staff</div>
        <div className="font-bold">Indonesia International Education Foundation - General Affair</div>
        <div>2016 - 2017. Bertanggung jawab selama project berlangsung dengan menyiapkan kebutuhan, baik alat maupun desain.</div>
      </div> */}
    </div>
  );
}
export default Experience;
