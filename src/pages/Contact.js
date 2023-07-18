import React from "react";
import Banner from "../components/banner/Banner";
import Questions from "../components/questions/Questions";
import LinkFooter from "../components/footer/LinkFooter";
import Footer from "../components/footer/Footer";
import Contacts from "../components/contact/Contact";

export default function Contact() {
  return (
    <>
      <Banner title="contact us" description="Get Help & Friendly Support" />
      <Contacts />
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
