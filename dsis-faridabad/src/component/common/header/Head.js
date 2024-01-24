import React from "react";
import logoImage from "../../../asset/images/LOGO.png";

function Head() {
  return (
    <section className="head bg-white px-4 py-2 md:px-10 md:py-4">
      <div className=" flex justify-between gap-2 items-center">
        <div className="logo ">
          <img src={logoImage} alt="Logo" className="w-4/6" />
        </div>

        <div className="contact-info flex items-center gap-4 font-semibold space-x-4 md:space-x-8">
          <div className="contact-item flex items-center">
            <i className="fas text-orange-500 fa-phone text-lg md:text-xl mr-2"></i>
            <div className="contact-tt">
              <h4 className="font-bold text-sm md:text-base">Call</h4>
              <span className="text-sm md:text-base">
                8527360511, 9818745263
              </span>
            </div>
          </div>

          <div className="contact-item flex items-center">
            <i className="fas text-orange-500 fa-envelope text-lg md:text-xl mr-2"></i>
            <div className="contact-tt">
              <h4 className="font-bold text-sm md:text-base">Email</h4>
              <span className="text-sm md:text-base">
                info@dsisfaridabad.com
              </span>
            </div>
          </div>

          <div className="contact-item flex items-center">
            <i className="fas text-orange-500 fa-map-marker text-lg md:text-xl mr-2"></i>
            <div className="contact-tt">
              <h4 className="font-bold text-sm md:text-base">Address</h4>
              <p className="text-sm md:text-base">
                Delhi Scholars International School
                <br />
                Sector - 88 Greater Faridabad
                <br />
                Haryana - 121014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
