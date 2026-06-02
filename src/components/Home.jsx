import React from "react";
import Welyft_banner_Nw from "../assets/Welyft_banner_Nw.png";

const Home = () => {
  return (
    <section id="home" className="w-full overflow-hidden">
      <img
        src={Welyft_banner_Nw}
        alt="Welyft Banner"
        className="block h-[42vh] min-h-[260px] w-full object-cover object-center sm:h-[55vh] md:h-auto md:min-h-0"
      />
    </section>
  );
};

export default Home;
