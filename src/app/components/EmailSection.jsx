import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Articles from "./Articles";
import { MdEmail } from 'react-icons/md';


const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <div className="flex">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <h5 className="text-xl font-bold text-white my-2 ml-10">
          Let&apos;s Build
        </h5>
        <h5 className="text-xl font-bold text-white my-2 ml-10">
          Let&apos;s Grow
        </h5>
        </div>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-8">
          <Link href="https://github.com/kelvinbe">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kelvin-beno-a06ab8175">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#compose">
            <MdEmail color="white" style={{width: 50, height:50}}/>
          </Link>
        </div>
      </div>
      <div className="z-10">
        <Articles />
      </div>
    </section>
  );
};

export default EmailSection;
