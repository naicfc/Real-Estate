import React from 'react'
import Banner from '../components/banner/Banner';
import Agents from '../components/agents/Agents';
import Questions from '../components/questions/Questions';
import LinkFooter from '../components/footer/LinkFooter';
import Footer from '../components/footer/Footer';

export default function Contact() {
  return (
    <>
     <Banner title="contact us" description="Get Help & Friendly Support"/>
     <Agents />
     <Questions />
     <LinkFooter />
     <Footer />
    </>
  );
}
