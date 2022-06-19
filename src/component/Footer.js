import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vhew7td', 'template_7pa2cub', form.current, 'QLDJQwM4vHWG4-3lR').then(
      (result) => {
        console.log(result.text);
        alert('Send Succes');
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div className="md:flex flex-col items-center gap-4 px-setting py-10 relative" id="Contact">
        <div className="absolute top-0 rounded-md bg-colorBackground dark:bg-gray-900 border-2 border-gray-900 p-2 dark:border-slate-200">
          <h1 className="mb-2 dark:text-white text-gray-900">Contact Me</h1>
        </div>
        <div className="md:w-1/2 border-2 border-gray-900 p-2 dark:border-slate-200 py-6 px-4 md:px-8 md:py-10 rounded-md">
          <form className="flex flex-col gap-2 items-center justify-center px-4" ref={form} onSubmit={sendEmail}>
            <div className="w-full">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-900  ring-gray-900 dark:ring-colorBackground text-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-900  ring-gray-900 dark:ring-colorBackground text-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Your email@gmail.com"
                required
              />
            </div>
            <div className="w-full">
              <label className="">Message</label>
              <textarea
                name="message"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-900  ring-gray-900 dark:ring-colorBackground text-gray-900 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" className="w-full bg-gray-900 dark:bg-black/50 py-2 cursor-pointer mt-2 rounded-md border-2 border-slate-200 text-white " />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full  px-setting bg-colorBackground dark:bg-black/50 ">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2 py-6 ">
          <div className="">
            <div className="text-xl 2xl:text-3xl mb-2">Tri Hartono</div>
            <div className="flex flex-col gap-1 md:gap-3 mx-4">
              <div className="flex md:items-center gap-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a className="effect-hover" href="mailto:Triihartono29@gmail.com">
                  29trihartono@gmail.com
                </a>
              </div>
              <div className="flex md:items-center gap-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <a className="effect-hover" href="https://goo.gl/maps/fCTnamkeqPQxB6AC6">
                  Cipedak, Jagakarsa, Jakarta Selatan
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-1/2 gap-2 md:gap-10">
            <div>
              <div className="text-xl 2xl:text-3xl mb-2">Quick Links</div>

              <div className="mx-4 flex flex-col cursor-pointer gap-3 2xl:text-2xl no-underline">
                <Link className="effect-hover" to="Profile" spy={true} smooth={true} offset={-100} duration={500}>
                  Profile
                </Link>

                <Link className="effect-hover" to="Skills" spy={true} smooth={true} offset={-100} duration={500}>
                  Skills
                </Link>

                <Link className="effect-hover" to="Project" spy={true} smooth={true} offset={-100} duration={500}>
                  Project
                </Link>

                <Link className="effect-hover" to="Experience" spy={true} smooth={true} offset={-100} duration={500}>
                  Experience
                </Link>

                <Link className="effect-hover" to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="">
              <div className="text-xl 2xl:text-3xl mb-2">Get in Touch</div>
              <div className="mx-4 flex flex-col gap-3">
                <a href="https://www.facebook.com/profile.php?id=100064153174194" className=" effect-hover">
                  Facebook
                </a>
                <a href="https://www.instagram.com/hrtn29/" className=" effect-hover">
                  Instagram
                </a>
                <a href="https://github.com/Trihartonoo" className=" effect-hover">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-gray-900 dark:border-colorBackground py-2 flex items-center justify-center md:justify-start ">
          <h3 className="text-sm md:text-base text-gray-800 dark:text-slate-200">© 2022 Tri Hartono • All Rights Reserved</h3>
        </div>
      </div>
    </>
  );
}
