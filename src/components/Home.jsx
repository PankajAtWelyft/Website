import React from "react";
import Welyft_banner_Nw from "../assets/Welyft_banner_Nw.png";

const Home = () => {
  return (
    <section id="home" className="w-full overflow-hidden">
      <img
        src={Welyft_banner_Nw}
        alt="Welyft Banner"
        className="block h-auto w-full object-contain"
      />
    </section>
  );
};

export default Home;
