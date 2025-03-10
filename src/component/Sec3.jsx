import React from "react";
import { Link } from "react-router-dom";

function Sec3() {
  return (
    <section className="mx-auto gap-5 mt-18 lg:w-5/7 pt-3.5 px-25 max-[700px]:px-6 w-full max-w-5x2 h-auto flex justify-between items-center max-[785px]:flex-wrap max-[785px]:justify-center max-[700px]:flex-col max-[700px]:w-full text-center">
      <div className="img w-1/2 max-w-lg h-auto flex justify-center items-center max-[700px]:w-full">
        <img className="w-full max-[700px]:w-4/5   max-[700px]:h-auto object-contain" src="/public/images/group-1.webp" alt="group" />
      </div>

      <div className="tit pt-8 flex flex-col justify-center items-center w-1/2 max-w-lg h-auto max-[700px]:w-full max-[700px]:text-center max-[785px]:w-full">
        <h1 className="text-4xl text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
        <p className="text-[var(--secondary-color)] text-lg max-[700px]:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
        </p>
        <button className="bg-[var(--secondary-color)] my-5 w-40 items-center text-[var(--secondary2-color)] rounded-md py-3 px-6 mt-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm mx-auto">
          <Link to="/services">Learn More</Link>
        </button>
      </div>
    </section>
  );
}

export default Sec3;
