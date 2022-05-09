import React from 'react';

function cardSkills(CardSkills) {
  return (
    <div className="bg-blue-100 p-6 flex items-center justify-center rounded-xl shadow-xl  dark:bg-black/50 hover:shadow">
      <img className="" src={CardSkills.imgUrl} alt="" />
    </div>
  );
}
export default cardSkills;
