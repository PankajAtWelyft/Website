import React from "react";
import Welyft_banner_Nw from "../assets/Welyft_banner_Nw.png";

const Home = () => {
  return (
    <section id="home" className="w-full">
      <img
        src={Welyft_banner_Nw}
        alt="Welyft Banner"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Home;
