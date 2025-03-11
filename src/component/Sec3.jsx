import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

function Sec3() {
  const ref = useRef(null);
  const controlsTitle = useAnimation();
  const controlsImage = useAnimation();
  const controlsButton = useAnimation();
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsTitle.start({ y: 0, opacity: 1, transition: { duration: 0.8 } });
      controlsImage.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
      controlsButton.start({ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } });
    } else {
      controlsTitle.start({ y: -50, opacity: 0, transition: { duration: 0.5 } });
      controlsImage.start({ x: -50, opacity: 0, transition: { duration: 0.5 } });
      controlsButton.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controlsTitle, controlsImage, controlsButton]);

  return (
    <section
      ref={ref}
      className="mx-auto gap-5 mt-18 lg:w-5/7 pt-3.5 px-25 max-[700px]:px-6 w-full max-w-5x2 h-auto flex justify-between items-center max-[785px]:flex-wrap max-[785px]:justify-center max-[700px]:flex-col max-[700px]:w-full text-center"
    >
      <motion.div initial={{ x: -50, opacity: 0 }} animate={controlsImage} className="img w-1/2 max-w-lg h-auto flex justify-center items-center max-[700px]:w-full">
        <img className="w-full max-[700px]:w-4/5 max-[700px]:h-auto object-contain" src="./images/group-1.webp" alt="group" />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={controlsTitle}
        className="tit pt-8 flex flex-col justify-center items-center w-1/2 max-w-lg h-auto max-[700px]:w-full max-[700px]:text-center max-[785px]:w-full"
      >
        <h1 className="text-4xl text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-[var(--secondary-color)] text-lg max-[700px]:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
        </p>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={controlsButton}
          className="bg-[var(--secondary-color)] my-5 w-40 items-center text-[var(--secondary2-color)] rounded-md py-3 px-6 mt-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm mx-auto"
        >
          <Link to="/services">Learn More</Link>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Sec3;
