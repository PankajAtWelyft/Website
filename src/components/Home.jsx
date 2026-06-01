import React from "react";
import Welyft_banner_Nw from "../assets/Welyft_banner_Nw.png";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat px-4
          sm:px-8
          md:px-12
          lg:px-16
"
        style={{
          backgroundImage: `
    url(${Welyft_banner_Nw})
  `,
        }}
      ></div>
    </>
  );
};

export default Home;
