import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
import Feature from "../components/feature/Feature";
import Recent from "../components/recent/Recent";
import Awards from "../components/awards/Awards";
import Explore from "../components/explore/Explore";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Feature />
      <Recent />
      <Awards />
      <Explore />
    </>
  );
}
