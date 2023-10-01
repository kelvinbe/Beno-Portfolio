'use client'

import "./styles.css";


const Articles = () => {

  return (
    <div>
    <div className="rounded-lg bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:h-[300px] sm:mt-[40px] relative">
    <img
      src='./light.gif' 
      alt="image"
      style={{borderRadius: '90px'}}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:mt-[10px]"
      width={300}
      height={300}
    />
  </div>
  </div>
  );
}


export default Articles