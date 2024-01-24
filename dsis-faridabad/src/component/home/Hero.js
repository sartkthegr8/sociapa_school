import React from 'react';
import homeImage from '../../asset/images/home-page-banner.png';

function Hero() {
  return (
    <section className="main-banner bg-white py-8 my-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 lg:mr-8">
            <div className="banner-text wow fadeInLeft">
              <h2 className="text-7xl font-bold text-gray-800 mb-4">
                Discover the Art of Smart Learning at <span className="text-orange-500 text-6xl  underline-offset-1 ">DSIS</span>
              </h2>
              <p className="text-lg text-gray-700">
                Welcome to DSIS, where we believe in the power of knowledge and the joy of learning. Discover the smarter way to learn anything with our engaging and innovative approach. Our dedicated educators and state-of-the-art resources ensure an exceptional educational experience.
              </p>
            </div>
          </div>
          <div className="lg:w-5/12">
            <div className="banner-img wow zoomIn">
              <img src={homeImage} alt="Home Page Banner" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
