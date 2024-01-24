import React from 'react';
import Event from './Event';
import Form from './Form';
import ImageCollage from './ImageCollage';
import Footer from '../common/footer/Footer';
import Hero from './Hero';
import Welcome from './Welcome';
import Message from './Message';


function Main() {
  return (
    <div className='imageContainer'>      
      <Hero />
      <Welcome />
      <Message />
      <Event />
      <ImageCollage />
      <Form />
      <Footer />
    </div>
  );
}

export default Main;
