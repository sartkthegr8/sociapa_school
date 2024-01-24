import React from 'react';

function Form() {
  return (
    <section className="newsletter-container">
      <div className="container">
        <div className="newsletter-section">
          <div className="flex items-center">
            <div className="w-full lg:w-1/3">
              <div className="item-text">
                <h2 className="text-2xl md:text-3xl lg:text-4xl">
                  Join us <br /> and stay tuned!
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <form className="newsletter-form flex flex-wrap">
                <div className="w-full md:w-1/2 p-2">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="form-group">
                    <a
                      href=""
                      title=""
                      className="btn-default btn-default-animation float-right inline-block bg-light-green-600 hover:bg-light-green-700 text-white p-2 rounded-md"
                    >
                      Join Us <i className="fa fa-long-arrow-alt-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
