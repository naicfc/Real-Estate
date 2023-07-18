import React from 'react'
import Banner from '../components/banner/Banner';
import Questions from '../components/questions/Questions';
import LinkFooter from '../components/footer/LinkFooter';
import Footer from '../components/footer/Footer';

export default function About() {
  return (
    <>
      <Banner title="about" description="About Us - Who We Are?"/>
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
