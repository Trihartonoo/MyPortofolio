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
        <div className="absolute w-1/2 md:w-full left-0 md:left-1/2 h-full ">
          <div className="w-1 h-full bg-gray-900 dark:bg-colorBackground rounded-xl"></div>
        </div>
        <div className="md:w-1/2 p-4 md:p-6 relative flex md:justify-center items-center">
          <div className="absolute w-5 h-5 -left-2 md:hidden rounded-full border-2 border-gray-900 bg-colorBackground"></div>
          <div className="absolute w-5 h-5 md:-right-3 rounded-full border-2 border-gray-900 bg-colorBackground hidden md:block"></div>
          <div className="text-sm md:text-base shadow-xl hover:shadow p-4 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200 rounded-xl">
            <div className="font-semibold">Admin & Data entry</div>
            <div className="font-bold">Drym corp</div>
            <div>2021 - 2022. Bertanggung jawab penuh atas pengelolaan data di DRYM, menangani semua penjualan produk transaksi, mengelola data perusahaan menggunakan MS.Excel dan Spreadsheet di GoogleDrive</div>
          </div>
        </div>
      </div>
      <div className="first w-full h-1/2  flex justify-end md:justify-end items-center relative">
        <div className="absolute -top-1 w-1/2 md:w-full left-0 md:left-1/2 h-full ">
          <div className="w-1 h-full bg-gray-900 dark:bg-colorBackground rounded-xl"></div>
        </div>
        <div className="md:w-1/2 p-4 md:p-6 relative flex md:justify-center items-center">
          <div className="absolute w-5 h-5 -left-2 md:-right-3 rounded-full border-2 border-gray-900 bg-colorBackground"></div>
          <div className="text-sm md:text-base shadow-xl hover:shadow p-4 bg-white/50 dark:bg-gray-900 dark:border-2 border-slate-200 rounded-xl">
            <div className="font-semibold">Project Staff</div>
            <div className="font-bold">Indonesia International Education Foundation - General Affair</div>
            <div>Indonesia International Education Foundation - General Affair</div>
            <div>2016 - 2017. Bertanggung jawab selama project berlangsung dengan menyiapkan kebutuhan, baik alat maupun desain.</div>
          </div>
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
