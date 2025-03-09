import React from "react";

function Sec5() {
  return (
    <section className="mx-auto gap-5 mt-25 pt-4 px-25 h-auto flex justify-center flex-col items-center">
      <div className="tit flex flex-col justify-center items-center w-111 h-40">
        <h6 className="text-xl text-center text-[var(--main-color)] pb-4 tracking-widest font-bold">team</h6>
        <h1 className="text-5xl text-center font-bold text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Our Talents</h1>
        <p className="text-[var(--secondary-color)] mb-12 text-base text-center max-[700px]:text-sm">Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</p>
      </div>
      <div className="box grid grid-cols-4 place-content-center mx-auto max-[500px]:grid-cols-1 max-[900px]:grid-cols-2 max-[1100px]:grid-cols-3  gap-11">
        <div className="card w-73 h-73 mx-auto px-4 rounded-lg shadow-[3px_4px_12px_1px_rgba(0,0,0,0.2)] p-6 bg-white  flex flex-col justify-center items-start group relative  transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ">
          <img className="w-44 h-44 flex justify-center items-center mx-auto object-contain" src="/public/images/talent-1.webp" alt="seo leader" />
          <div className="tit flex justify-start items-start flex-col mt-5 px-5">
            <h1 className="text-[var?(--secondary-color)] text-2xl font-semibold text-start mb-5">pag legend</h1>
            <p className="text-[var(--opacity-color2)] font-medium text-sm text-start">SEO</p>
          </div>
        </div>
        <div className="card w-73 h-73 mx-auto px-4 rounded-lg shadow-[3px_4px_12px_1px_rgba(0,0,0,0.2)] p-6 bg-white  flex flex-col justify-center items-start group relative  transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ">
          <img className="w-44 h-44 flex justify-center items-center mx-auto object-contain" src="/public/images/talent-2.webp" alt="sto leader" />
          <div className="tit flex justify-start items-start flex-col mt-5 px-5">
            <h1 className="text-[var?(--secondary-color)] text-2xl font-semibold text-start mb-5">Richard Guerra</h1>
            <p className="text-[var(--opacity-color2)] font-medium text-sm text-start">STO</p>
          </div>
        </div>
        <div className="card w-73 h-73 mx-auto px-4 rounded-lg shadow-[3px_4px_12px_1px_rgba(0,0,0,0.2)] p-6 bg-white  flex flex-col justify-center items-start group relative  transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ">
          <img className="w-44 h-44 flex justify-center items-center mx-auto object-contain" src="/public/images/talent-3.webp" alt="DESIGNER" />
          <div className="tit flex justify-start items-start flex-col mt-5 px-5">
            <h1 className="text-[var?(--secondary-color)] text-2xl font-semibold text-start mb-5">Alexandra Stolz</h1>
            <p className="text-[var(--opacity-color2)] font-medium text-sm text-start">DESIGNER</p>
          </div>
        </div>
        <div className="card w-73 h-73 mx-auto px-4 rounded-lg shadow-[3px_4px_12px_1px_rgba(0,0,0,0.2)] p-6 bg-white  flex flex-col justify-center items-start group relative  transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ">
          <img className="w-44 h-44 flex justify-center items-center mx-auto object-contain" src="/public/images/talent-4.webp" alt="DEVELOPER" />
          <div className="tit flex justify-start items-start flex-col mt-5 px-5">
            <h1 className="text-[var?(--secondary-color)] text-2xl font-semibold text-start mb-5">Janet Bray</h1>
            <p className="text-[var(--opacity-color2)] font-medium text-sm text-start">DEVELOPER</p>
          </div>
        </div>
      </div>

      <button className="bg-[var(--secondary-color)] my-5 w-40 items-center text-[var(--secondary2-color)] rounded-md py-3 px-6 mt-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm mx-auto">
        VIEW TEAM
      </button>
    </section>
  );
}

export default Sec5;
