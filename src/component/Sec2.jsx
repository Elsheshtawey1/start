import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

function Sec2() {
  const ref = useRef(null);
  const controlsTitle = useAnimation();
  const controlsImages = useAnimation();
  const controlsButton = useAnimation();
  const imagesRef = useRef([]);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsTitle.start({ y: 0, opacity: 1, transition: { duration: 0.8 } });
      imagesRef.current.forEach((el, index) => {
        controlsImages.start(
          (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2 },
          }),
          { custom: index }
        );
      });
      controlsButton.start({ y: 0, opacity: 1, transition: { duration: 0.8, delay: 1 } });
    } else {
      controlsTitle.start({ y: -50, opacity: 0, transition: { duration: 0.5 } });
      imagesRef.current.forEach((el, index) => {
        controlsImages.start(
          (i) => ({
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, delay: i * 0.1 },
          }),
          { custom: index }
        );
      });
      controlsButton.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controlsTitle, controlsImages, controlsButton]);

  return (
    <section ref={ref} className="container mx-auto pt-14 px-25 flex justify-center items-center flex-col overflow-hidden">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={controlsTitle} className="tit flex flex-col justify-center items-center w-111 h-40">
        <h6 className="text-xl text-center text-[var(--main-color)] pb-4 tracking-widest font-bold">partners</h6>
        <h1 className="text-5xl text-center font-bold text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Lorem Ipsum Dolor</h1>
        <p className="text-[var(--secondary-color)] mb-12 text-base max-[700px]:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
      <div className="img justify-center items-center flex gap-23 my-8 max-[700px]:flex-col max-[700px]:gap-9 max-[900px]:flex-wrap max-[700px]:justify-center max-[700px]:items-center">
        {["airbnb", "facebook", "google", "spotify", "microsoft"].map((name, index) => (
          <motion.img
            key={name}
            ref={(el) => (imagesRef.current[index] = el)}
            custom={index}
            initial={{ y: 50, opacity: 0 }}
            animate={controlsImages}
            className="w-39 h-13 min-[780px]:w-30"
            src={`/images/${name}.webp`}
            alt={name}
          />
        ))}
      </div>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={controlsButton}
        className="bg-[var(--secondary-color)] w-35 items-center text-[var(--secondary2-color)] rounded-md py-3 px-4 my-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2"
      >
        <Link to="/services">Learn More</Link>
      </motion.button>
    </section>
  );
}

export default Sec2;
