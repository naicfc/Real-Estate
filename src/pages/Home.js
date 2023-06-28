import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
import Feature from "../components/feature/Feature";
import Recent from "../components/recent/Recent";
import Awards from "../components/awards/Awards";
import Explore from "../components/explore/Explore";
import Agents from "../components/agents/Agents";
import Pricing from "../components/packages/Pricing";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Feature />
      <Recent />
      <Awards />
      <Explore />
      <Agents />
      <Pricing />
    </>
  );
}
