import React from "react";
import Banner from "../components/banner/Banner";
import Feature from "../components/feature/Feature";
import Questions from "../components/questions/Questions";
import LinkFooter from "../components/footer/LinkFooter";
import Footer from "../components/footer/Footer";

export default function Services() {
  return (
    <>
      <Banner title="services" description=" Services - All Services"/>
      <Feature />
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
