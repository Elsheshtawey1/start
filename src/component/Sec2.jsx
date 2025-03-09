import React from "react";

function Sec2() {
  return (
    <section className="container mx-auto pt-14 px-25 flex justify-center items-center flex-col overflow-hidden">
      <div className="tit flex flex-col justify-center items-center w-111 h-40">
        <h6 className="text-xl text-center text-[var(--main-color)] pb-4 tracking-widest font-bold">partners</h6>
        <h1 className="text-5xl text-center font-bold text-[var(--secondary-color)] pb-4 max-[700px]:text-2xl">Lorem Ipsum Dolor</h1>
        <p className="text-[var(--secondary-color)] mb-12 text-base max-[700px]:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="img justify-center items-center flex gap-16 my-8 max-[700px]:flex-col max-[700px]:gap-9 max-[900px]:flex-wrap   max-[700px]:justify-center max-[700px]:items-center">
        <img className="w-39 h-13 min-[780px]:w-30" src="/public/images/airbnb.webp" alt="airbnb" />
        <img className="w-39 h-13 min-[780px]:w-30" src="/public/images/facebook.webp" alt="facebook" />
        <img className="w-39 h-13 min-[780px]:w-30" src="/public/images/google.webp" alt="google" />
        <img className="w-39 h-13 min-[780px]:w-30" src="/public/images/spotify.webp" alt="spotify" />
        <img className="w-39 h-13 min-[780px]:w-30" src="/public/images/microsoft.webp" alt="microsoft" />
      </div>
      <button className="bg-[var(--secondary-color)] w-35 items-center text-[var(--secondary2-color)] rounded-md py-3 px-4 my-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2 ">
        Learn More
      </button>
    </section>
  );
}

export default Sec2;
