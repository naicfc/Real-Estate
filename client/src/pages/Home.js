import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
import Feature from "../components/feature/Feature";
import Recent from "../components/recent/Recent";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Feature />
      <Recent />
    </>
  );
}
