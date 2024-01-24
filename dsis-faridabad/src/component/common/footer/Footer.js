import React from 'react';
import logoImage from '../../../asset/images/LOGO.png';



const Footer = () => {
  return (
    <footer className=" text-black">
      <div >
        {/* Top Footer Section */}
        <div className="top-footer my-5 mx-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img src={logoImage} alt="Logo" className="w-full" />
            </div>

            {/* Address Section */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="widget-about">
                <h3 className="text-lg">Address</h3>
                <p>
                  Delhi Scholars International School<br />
                  Sector - 88 Greater Faridabad<br />
                  Haryana - 121014
                </p>
                <div className="widget-contact">
                  <ul className="contact-add">
                    <li>
                      <div className="contact-info contact-info-tt">
                        <img src="assets/img/icon1.png" alt="" />
                        <div className="contact-tt flex">
                        <i className="fas text-orange-500 fa-phone text-xl mr-2"></i>
                          <span>8527360511, 9818745263</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info fa-envelope-email ">                        
                        <div className="contact-tt flex">
                        <i className="fas text-orange-500 fa-envelope text-xl mr-2"></i>
                          <span>info@dsisfaridabad.com</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="social-links flex gap-8 py-2">
                  <li className="fb">
                    <a href="https://www.facebook.com/dsisfaridabad" target="_blank" title="">
                      <i className="fab text-2xl  text-blue fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="insta">
                    <a href="https://www.instagram.com/dsisfbd/" title="" target="_blank">
                      <i className="fab text-2xl fa-instagram"></i>
                    </a>
                  </li>
                  <li className="yt">
                    <a href="https://www.youtube.com/channel/UC34qYr5qHuPZhG658Qm92UA" title="" target="_blank">
                      <i className="fab text-2xl fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facilities In School Section */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="widget-links">
                <h3 className="text-lg">Facilities In School</h3>
                <ul>
                  <li><a href="facilities.php" title="">Sports </a></li>
                  <li><a href="facilities.php" title="">Class Rooms</a></li>
                  <li><a href="facilities.php" title="">Information Technology </a></li>
                  <li><a href="facilities.php" title="">Resource Centre </a></li>
                  <li><a href="facilities.php" title="">Faculty </a></li>
                  <li><a href="facilities.php" title="">Transport </a></li>
                </ul>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="widget-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28069.668103955544!2d77.361637!3d28.428051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd0706c8331d%3A0x2a192d1e1c8a1851!2sDELHI%20SCHOLARS%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1686301544117!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: '0' }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bottom-footer text-left  bg-slate-300 ">
          <p className="copyright-footer">
            &copy; Copyright 2023 | Delhi Scholars International School Designed &amp; Developed by{' '}
            <strong className="sociapa-link  text-red-500">
              <a href="https://www.sociapa.com/"  target="_blank" rel="noopener noreferrer">
                Sociapa
              </a>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
