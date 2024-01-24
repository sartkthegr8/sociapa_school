import React from 'react';
import schoolpic from '../../asset/images/schoolpic.jpg';
import childpic from '../../asset/images/childpic.jpg';

function Welcome() {
  return (
    <section className="welcome-section bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Welcome to <span className="text-orange-500">DSIS</span></h2>

        {/* About School Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-1/2 lg:mr-8">
            <div className="course-img text-center">
              <img src={schoolpic} alt="About School" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="sec-title mb-4">
              <h3 className="font-bold text-3xl">ABOUT SCHOOL</h3>
            </div>
            <div className="course-card">
              <p className="posted-by">
                Moria Montessori quoted, "The goal of early childhood education should be to activate the child’s own natural desire to learn."
              </p>
              <div className="lnk-dv my-4 text-center">
                <a href="about.php" title="" className="btn-default">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-1/2 lg:mr-8">
            <div className="sec-title mb-4">
              <h3 className="font-bold text-3xl">OUR MISSION</h3>
            </div>
            <div className="course-card">
              <p className="posted-by">
                Our aim is to cultivate empathy and kindness towards others, encourage creative thinking to its fullest potential, provide a comprehensive curriculum, and foster the confidence to act on personal convictions in the minds of young people.
              </p>
              <div className="lnk-dv my-4 text-center">
                <a href="about.php" title="" className="btn-default">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="course-img text-center">
              <img src={childpic} alt="Our Mission" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Welcome;
