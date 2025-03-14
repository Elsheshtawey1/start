import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

function Sec5() {
  const ref = useRef(null);
  const controlsTitle = useAnimation();
  const controlsCards = useAnimation();
  const controlsButton = useAnimation();
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsTitle.start({ y: 0, opacity: 1, transition: { duration: 0.8 } });
      controlsCards.start({ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.2 } });
      controlsButton.start({ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } });
    } else {
      controlsTitle.start({ y: -50, opacity: 0, transition: { duration: 0.5 } });
      controlsCards.start({ scale: 0.9, opacity: 0, transition: { duration: 0.5 } });
      controlsButton.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controlsTitle, controlsCards, controlsButton]);

  return (
    <section ref={ref} className="mx-auto gap-5 mt-25 pt-4 px-6 h-auto flex justify-center flex-col items-center">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={controlsTitle} className="tit flex flex-col justify-center items-center w-full max-w-[700px]">
        <h6 className="text-xl text-center text-[var(--main-color)] pb-4 tracking-widest font-bold">team</h6>
        <h1 className="text-5xl text-center font-bold text-[var(--secondary-color)] pb-4 sm:text-3xl">Our Talents</h1>
        <p className="text-[var(--secondary-color)] mb-12 text-base text-center sm:text-sm">Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={controlsCards}
        className="box grid place-items-center mx-auto gap-11 max-[500px]:grid-cols-1 max-[500px]:justify-center max-[900px]:grid-cols-2 max-[1100px]:grid-cols-3 min-[1140px]:grid-cols-4"
      >
        {[
          { name: "Pag Legend", role: "SEO", img: "./images/talent-1.webp" },
          { name: "Richard Guerra", role: "STO", img: "./images/talent-2.webp" },
          { name: "Alexandra Stolz", role: "DESIGNER", img: "./images/talent-3.webp" },
          { name: "Janet Bray", role: "DEVELOPER", img: "./images/talent-4.webp" },
        ].map((member, index) => (
          <div
            key={index}
            className="card w-72 h-80 mx-auto px-4 rounded-lg shadow-lg p-6 bg-white flex flex-col justify-center items-center group relative transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
          >
            <img className="w-44 h-44 mx-auto object-contain" src={member.img} alt={member.role} />
            <div className="tit flex flex-col items-center mt-5 px-5 text-center">
              <h1 className="text-[var(--secondary-color)] text-2xl font-semibold mb-2">{member.name}</h1>
              <p className="text-[var(--opacity-color2)] font-medium text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={controlsButton}
        className="bg-[var(--secondary-color)] my-5 w-40 items-center text-[var(--secondary2-color)] rounded-md py-3 px-6 mt-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer sm:text-sm mx-auto"
      >
        VIEW TEAM
      </motion.button>
    </section>
  );
}

export default Sec5;
