import React from 'react';
import UnderlineText from '../component/UnderlineText';

function Profile() {
  return (
    <div className="pt-20 pb-10 lg:pt-28 px-setting flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 lg:gap-20 group ">
      <div className="text-left w-full">
        <div className="w-fit relative ">
          <UnderlineText />
          <h1>Profile</h1>
        </div>
        <p className="text-sm md:text-base lg:mt-4"> Perkenalkan saya Tri Hartono biasa dipanggil Tri. Saya junior front end development yang sudah mengerjakan beberapa project kecil. </p>
        <p className="text-sm md:text-base mt-2">
          Rasa ingin tahu yang besar, jujur dan disiplin. Bagi saya pekerjaan itu adalah suatu tanggung jawab yang dilakukan dengan hati-hati dan semaksimal mungkin, baik pekerjaan pribadi maupun tim
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
  );
}
export default Profile;
