import React from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form';
import About from '../components/About';
import Deals from '../components/Deals';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Nav />
        <Form />
        <About />
        <Deals />
        <Footer />
    </>
  )
}

export default Home;