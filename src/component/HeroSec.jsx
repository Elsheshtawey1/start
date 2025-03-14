import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function HeroSec() {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    controlsText.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    controlsImage.start({ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } });
  }, [controlsText, controlsImage]);

  return (
    <main
      id="first-section"
      className="heroSec bg-fixed mx-auto pt-20 px-25 flex justify-between items-center max-[785px]:flex-wrap max-[700px]:flex-col-reverse max-[700px]:justify-center max-[700px]:items-center max-[700px]:text-center max-[700px]:px-4 max-[800px]:justify-center max-[800px]:items-center max-[800px]:text-center"
    >
      <motion.div initial={{ x: -50, opacity: 0 }} animate={controlsText} className="tit flex flex-col justify-center w-108 h-75 max-[700px]:w-full max-[700px]:text-sm">
        <h6 className="text-lg text-[var(--secondary2-color)] pb-4 tracking-widest font-bold">WELCOME</h6>
        <h1 className="text-5xl text-[var(--secondary2-color)] pb-4 max-[700px]:text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-[var(--opacity-color)] text-base max-[700px]:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
        </p>
        <button className="bg-[var(--secondary2-color)] w-35 items-center text-[var(--secondary-color)] rounded-md py-3 px-4 mt-5 hover:bg-[var(--secondary-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2 ">
          <Link to="/Portfolio">Explore</Link>
        </button>
      </motion.div>
      <motion.div initial={{ x: 50, opacity: 0 }} animate={controlsImage} className="img flex justify-center items-center max-[700px]:w-full">
        <img className="w-155 h-79 max-[700px]:w-80 max-[700px]:h-50" src="./images/hero.webp" alt="hero" />
      </motion.div>
    </main>
  );
}

export default HeroSec;
