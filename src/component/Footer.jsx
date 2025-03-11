import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

      function Footer() {
  return (
    <footer className="bg-[var(--main-color)] gap-2 mt-14 py-4 px-23 flex justify-between items-center max-[700px]:flex-col max-[700px]:text-center max-[700px]:py-4 ">
      <div className="icon flex gap-4 text-white text-xl max-[700px]:mb-4">
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-600 hover:scale-110">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-pink-500 hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-400 hover:scale-110">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-red-500 hover:scale-110">
          <FaPinterest />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-black hover:scale-110">
          <FaTiktok />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-green-500 hover:scale-110">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-red-600 hover:scale-110">
          <FaYoutube />
        </a>
      </div>

      <div className="cope">
        <p className="text-white text-sm">&copy; Start, 2025. All rights reserved | Eng: Mohamed-ELsheshtawey.</p>
      </div>
    </footer>
  );
}

export default Footer;
