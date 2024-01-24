import React from "react";

const Footer = () => {
  return (
    <>
      <section class="newsletter-container">
        <div class="container">
          <div class="newsletter-section">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <div class="item-text">
                  <h2>
                    Join us <br /> and stay tuned!
                  </h2>
                </div>
              </div>
              <div class="col-lg-8">
                <form class="newsletter-form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <a
                          href=""
                          title=""
                          class="btn-default btn-default-animation float-right"
                        >
                          Join Us <i class="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-container ">
          <div class="footer">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 footer-logo">
                <div class="footer-logo-item">
                  <img src="/Assets/img/LOGO.png" alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="footer-item">
                  <h3 class="">Address</h3>
                  <p>
                    Delhi Scholars International School
                    <br />
                    Sector - 88 Greater Faridabad Haryana - 121014
                  </p>
                  <div class="">
                    <ul class="contact-section">
                      <li>
                        <div class="contact-info contact-info-details">
                          <img src="assets/img/icon1.png" alt="" />
                          <div class="contact-details">
                            <span> 8527360511, 9818745263</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="contact-info fa-envelope-email">
                          <i class="fa-solid fa-envelope "></i>
                          <div class="contact-details">
                            <span>info@dsisfaridabad.com</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul class="social-links">
                    <li class="fb">
                      <a
                        href="https://www.facebook.com/dsisfaridabad"
                        target="_blank"
                        title=""
                        rel="noreferrer"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="insta">
                      <a
                        href="https://www.instagram.com/dsisfbd/"
                        title=""
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="yt">
                      <a
                        href="https://www.youtube.com/channel/UC34qYr5qHuPZhG658Qm92UA"
                        title=""
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="widget widget-links">
                  <h3 class="">Facilities In School</h3>
                  <ul>
                    <li>
                      <a href="facilities.php" title="">
                        Sports{" "}
                      </a>
                    </li>
                    <li>
                      <a href="facilities.php" title="">
                        {" "}
                        Class Rooms
                      </a>
                    </li>
                    <li>
                      <a href="facilities.php" title="">
                        {" "}
                        Information Technology{" "}
                      </a>
                    </li>
                    <li>
                      <a href="facilities.php" title="">
                        {" "}
                        Resource Centre{" "}
                      </a>
                    </li>
                    <li>
                      <a href="facilities.php" title="">
                        Faculty{" "}
                      </a>
                    </li>
                    <li>
                      <a href="facilities.php" title="">
                        Transport{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="widget widget-iframe"></div>
              </div>
            </div>
          </div>
          <div class="copyright-section">
            <div class="row align-items-center">
              <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                <p class="copyright-footer">
                  © Copyright 2023 | Delhi Scholars International School
                  Designed &amp; Developed by{" "}
                  <strong class="sociapa-link">
                    <a href="https://www.sociapa.com/" target="_blank">
                      Sociapa
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
