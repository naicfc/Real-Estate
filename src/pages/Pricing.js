import React from 'react'
import Banner from '../components/banner/Banner';
import Pricings from '../components/packages/Pricing';
import Questions from '../components/questions/Questions';
import LinkFooter from '../components/footer/LinkFooter';
import Footer from '../components/footer/Footer';

export default function Pricing() {
  return (
    <>
      <Banner title="30 days money back guarantee." description="No Extra Fees. Friendly Support"/>
      <Pricings />
      <Questions />
      <LinkFooter />
      <Footer />
    </>
  );
}
