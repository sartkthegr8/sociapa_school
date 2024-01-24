import React from "react";
import url1 from "../../asset/images/1.jpg";
import url2 from "../../asset/images/2.jpg";
import url3 from "../../asset/images/3.jpg";
import url4 from "../../asset/images/4.jpg";
import url5 from "../../asset/images/5.jpg";
import url6 from "../../asset/images/6.jpg";
import url7 from "../../asset/images/7.jpg";
import url8 from "../../asset/images/8.jpg";
import url9 from "../../asset/images/9.jpg";
import url10 from "../../asset/images/10.jpg";

const ImageCollage = () => {


  return (
    <div>     
      <>
        <div className="my-10">
        <section class="about-us-section">
          <div class="container">       

            <div class="abt-img">
              <ul
                class="masonary"
                style={{
                  position: "relative",
                  height: "588px",
                }}
              >
                <li
                  class="width1 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                  }}
                >
                  <a
                    href={url1}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url1} alt="gallery1" />
                  </a>
                </li>
                <li
                  class="width2 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "199px",
                    top: "0px",
                  }}
                >
                  <a
                    href={url2}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url2} alt="gallery2" />
                  </a>
                </li>
                <li
                  class="width3 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "496px",
                    top: "0px",
                  }}
                >
                  <a
                    href={url3}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url3} alt="" />
                  </a>
                </li>
                <li
                  class="width4 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "693px",
                    top: "0px",
                  }}
                >
                  <a
                    href={url4}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url4} alt="" />
                  </a>
                </li>
                <li
                  class="width5 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "873px",
                    top: "0px",
                  }}
                >
                  <a
                    href={url5}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url5} alt="" />
                  </a>
                </li>
                <li
                  class="width6 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "693px",
                    top: "211px",
                  }}
                >
                  <a
                    href={url6}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url6} alt="" />
                  </a>
                </li>
                <li
                  class="width7 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "891px",
                    top: "211px",
                  }}
                >
                  <a
                    href={url7}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url7} alt="" />
                  </a>
                </li>
                <li
                  class="width8 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "1089px",
                    top: "211px",
                  }}
                >
                  <a
                    href={url8}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url8} alt="" />
                  </a>
                </li>
                <li
                  class="width9 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "199px",
                    top: "379px",
                  }}
                >
                  <a
                    href={url9}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url9} alt="" />
                  </a>
                </li>
                <li
                  class="width10 wow zoomIn"
                  data-wow-duration="1000ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationName: "jb",
                    position: "absolute",
                    left: "496px",
                    top: "329px",
                  }}
                >
                  <a
                    href={url10}
                    data-group="set1"
                    title=""
                    class="html5lightbox"
                  >
                    <img src={url10} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        </div>
      </>
    </div>
  );
};

export default ImageCollage;
