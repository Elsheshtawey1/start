import React from 'react'
import NavBar from './component/NavBar'
import HeroSec from './component/HeroSec';
import Sec2 from './component/Sec2';
import Sec3 from './component/Sec3';
import Sec4 from './component/Sec4';
import Sec5 from './component/Sec5';
import Footer from './component/Footer';

function Home() {
  return (
    <>
      <div className="bg-[var(--main-color)] min-h-[586px] pb-12">
        <NavBar />
        <HeroSec />
      </div>
      {/*  */}
      <div className="bg[var(--secondary2-color)]">
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Footer />
      </div>
    </>
  );
}

export default Home