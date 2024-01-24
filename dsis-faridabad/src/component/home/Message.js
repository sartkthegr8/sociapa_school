import React from 'react';
import chairmen from '../../asset/images/chairman.png';
import manager from '../../asset/images/manager.png';
import principal from '../../asset/images/principal.png';

function MessageCard({ imgSrc, title, message }) {
  return (
    <div className="flex justify-between items-center mx-10 my-4">
      <img src={imgSrc} alt={title} className="w-49" />
      <div flex>
      <div className="banner-text wow fadeInLeft">
        <h4 className="text-4xl mb-4">{title}</h4>
        <p className="text-lg text-gray-700">{message}</p>
      </div>
      <div className="lnk-dv my-4 text-center">
                <a href="about.php" title="" className="btn-default">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
      </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <section className="welcome-section bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Messages</h2>

        {/* Chairman's Message */}
        <MessageCard
          imgSrc={chairmen}
          title="Chairman's Message"
          message="Welcome to Delhi Scholars International School. 'Education is the most powerful weapon which you can use to change the world.' Similarly at DSIS, each one of us believes, we have a unique opportunity and responsibility to make learning an enjoyable and knowledge-seeking."
        />
      

        {/* Manager's Message */}
        <MessageCard
          imgSrc={manager}
          title="Manager's Message"
          message="'Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realize the great life.' A. P. J. Abdul Kalam Knowledge never goes waste."
        />
    
        {/* Principal's Message */}
        <MessageCard
          imgSrc={principal}
          title="Principal's Message"
          message="'What makes my staff and students so special? They just have the most amazing hearts and beautiful souls.' We live today in a world that is very different from the one we grew up, in the one we were educated in. The world today is changing at such an accelerated rate where we as"
        />

      </div>
    </section>
  );
}

export default Message;
