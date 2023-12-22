import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

export default function Social() {
  return (
    <div>
      <ul className="flex flex-col gap-y-5 text-[30px] pl-5 pt-28">
        <li>
          <a href="mailto:sarthakbornare@gmail.com" target="_blank">
            <MdEmail className="transform transition-transform hover:scale-110 hover:opacity-40" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sarthak-bornare-8042b1239/"
            target="_blank"
          >
            <IoLogoLinkedin className="transform transition-transform hover:scale-110 hover:opacity-40" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Sarthaak02" target="_blank">
            <IoLogoGithub className="transform transition-transform hover:scale-110 hover:opacity-40" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sarthaak_02/" target="_blank">
            <IoLogoInstagram className="transform transition-transform hover:scale-110 hover:opacity-40" />
          </a>
        </li>
      </ul>
    </div>
  );
}
