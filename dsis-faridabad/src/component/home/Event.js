import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import event1 from "../../asset/images/event1.jpg";
import event2 from "../../asset/images/event2.jpeg";
import event3 from "../../asset/images/event3.jpeg";
import event4 from "../../asset/images/event4.jpeg";
import event5 from "../../asset/images/event5.jpeg";

const events = [
  {
    id: 1,
    name: "Sports teaches you character building. It teaches you to",
    image: event1,
    text: " Dec 23, 2022",
  },
  {
    id: 2,
    name: "Geeta scholarship Cum Admission Test",
    image: event2,
    text: " Oct 8, 2022",
  },
  {
    id: 3,
    name: "Scholarship Cum Admission Test",
    image: event3,
    text: "Feb 12, 2022",
  },
  {
    id: 4,
    name: "CLASS-X BOARD RESULT (2021-22)",
    image: event4,
    text: "Feb 12, 2022",
  },
  {
    id: 5,
    name: "CLASS-X BOARD RESULT (2021-22)",
    image: event5,
    text: "Feb 12, 2022",
  },
];

const Event = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="my-5">
    <div className="">
  <h2 className="text-2xl  mx-80 px-80 font-bold col-span-1">Latest Events <span>  <button className="text-gray-600 text-3xl focus:outline-none">&lt;</button></span><span> <button className="text-gray-600 text-3xl focus:outline-none">&gt;</button></span></h2>
  {/* <div className="flex space-x-2 justify-end col-span-1">
    <button className="text-gray-600 text-3xl focus:outline-none">&lt;</button>
    <button className="text-gray-600 text-3xl focus:outline-none">&gt;</button>
  </div> */}
</div>



      <div className="mx-20">
        <Slider {...sliderSettings}>
          {events.map((event) => (
            <div key={event.id} className="w-60  p-4">
              <div className="bg-white p-4 rounded shadow-md h-full">
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="w-full h-80  object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-700">{event.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Event;
