import React from "react";
import { Link } from "react-router-dom";

function HeroSec() {
  return (
    <main
      id="first-section"
      className="heroSec bg-fixed mx-auto pt-20 px-25 flex justify-between items-center max-[785px]:flex-wrap max-[700px]:flex-col-reverse max-[700px]:justify-center max-[700px]:items-center max-[700px]:text-center max-[700px]:px-4 max-[800px]:justify-center max-[800px]:items-center max-[800px]:text-center"
    >
      <div className="tit flex flex-col justify-center w-108 h-75 max-[700px]:w-full max-[700px]:text-sm">
        <h6 className="text-lg text-[var(--secondary2-color)] pb-4 tracking-widest font-bold">WELCOME</h6>
        <h1 className="text-5xl text-[var(--secondary2-color)] pb-4 max-[700px]:text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-[var(--opacity-color)] text-base max-[700px]:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
        </p>
        <button className="bg-[var(--secondary2-color)] w-35 items-center text-[var(--secondary-color)] rounded-md py-3 px-4 mt-5 hover:bg-[var(--secondary-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2 ">
          <Link to="/Portfolio">Explore</Link>
        </button>
      </div>
      <div className="img flex justify-center items-center max-[700px]:w-full">
        <img className="w-155 h-79 max-[700px]:w-80 max-[700px]:h-50" src="/public/images/hero.webp" alt="hero" />
      </div>
    </main>
  );
}

export default HeroSec;
