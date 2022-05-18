import React from 'react';

export default function Footer() {
  return (
    <div className="bg-blue-50 dark:bg-black/50">
      <div className="md:flex flex-col items-center gap-4 px-setting py-10">
        <div className="md:w-1/2">
          <h1 className="mb-2">Contact Me</h1>
          <form className="flex flex-col gap-2 items-center justify-center px-4">
            <div className="w-full">
              <label>Name</label>
              <input
                type="text"
                name="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="your name"
              />
            </div>
            <div className="w-full">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </div>
            <div className="w-full">
              <label className="">Message</label>
              <textarea
                name="message"
                className="mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="your Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="w-full bg-blue-700 py-2 mt-2 rounded-md text-white " />
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-2  px-setting py-6">
        <div className="">
          <h2 className="mb-2">Tes</h2>
          <div className="flex flex-col gap-1 md:gap-3 mx-4">
            <div className="flex md:items-center gap-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>+6289680041383</div>
            </div>
            <div className="flex md:items-center gap-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>Triihartono29@gmail.com</div>
            </div>
            <div className="flex md:items-center gap-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>Cipedak, Jagakarsa, Jakarta Selatan</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-1/2 gap-2 md:gap-10">
          <div>
            <h2>Quick Links</h2>
            <div className="mx-4 flex flex-col gap-3">
              <div>Home</div>
              <div>Profile</div>
              <div>Project</div>
              <div>Experience</div>
            </div>
          </div>
          <div className="">
            <h2>Reach Me out on</h2>
            <div className="mx-4 flex flex-col gap-3">
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Github</div>
              <div>Linked</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  px-setting">
        <div className="w-full border-t-2 border-blue-100 py-2 flex items-center justify-center md:justify-start ">
          <h3 className="text-sm md:text-base text-gray-700 dark:text-slate-200">© 2022 Tri Hartono • All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
}
