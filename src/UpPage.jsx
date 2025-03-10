import React from "react";

function UPpage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 transition-all duration-300">
      <button
        onClick={scrollToTop}
        className="
        w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border-none shadow-md 
        cursor-pointer transition-all duration-300 relative overflow-hidden group
        hover:w-36 hover:rounded-full hover:bg-[var(--main-color)]"
      >
        <svg className="w-3 transition-transform duration-300 group-hover:-translate-y-full" viewBox="0 0 384 512">
          <path
            fill="white"
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
        <span className="absolute text-white text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">Back to Top</span>
      </button>
    </div>
  );
}

export default UPpage;
