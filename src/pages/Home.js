import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
import Feature from "../components/feature/Feature";
import Recent from "../components/recent/Recent";
import Awards from "../components/awards/Awards";
import Explore from "../components/explore/Explore";
import Agents from "../components/agents/Agents";
import Pricings from "../components/packages/Pricing";
import Questions from "../components/questions/Questions";
import LinkFooter from "../components/footer/LinkFooter";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Feature />
      <Recent />
      <Awards />
      <Explore />
      <Agents />
      <Pricings />
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
