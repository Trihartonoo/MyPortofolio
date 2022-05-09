import React, { useEffect } from 'react';

function UnderlineText() {
  // const boxRef = useRef();
  // useEffect(() => {
  //   gsap.from(boxRef.current, {
  //     rotate: '+360',
  //     translateX: '-100',
  //     duration: '5',
  //     // delay: '1',
  //   });
  // });
  return (
    <div>
      <div className="absolute bottom-2 bg-gradient-to-br from-blue-600 to-blue-300 h-2 w-full rounded-md z-0"></div>
    </div>
  );
}

export default UnderlineText;
