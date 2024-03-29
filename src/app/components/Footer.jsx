import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between justify-center items-center">
        <span>
            <Image
              src="/images/beno.jpg"  
              alt="hero image"
              style={{borderRadius: '146px'}}
              width={80}
              height={80}
            />
        </span>
        <p className="text-white sm:text-sm">© 2024 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
