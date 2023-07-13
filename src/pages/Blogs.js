import React from 'react'
import Banner from '../components/banner/Banner';
import Recent from '../components/recent/Recent';
import Questions from '../components/questions/Questions';
import Footer from '../components/footer/Footer';
import LinkFooter from '../components/footer/LinkFooter';

export default function Blogs() {
  return (
    <>
      <Banner title="blog" description="Blog Grid - Our Blogs"/>
      <Recent />
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
