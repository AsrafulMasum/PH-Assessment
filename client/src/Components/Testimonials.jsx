

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Title from "./Title";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const res = await fetch("./testimonials.json");
      const data = await res.json();
      setTestimonials(data);
    };

    getTestimonials();
  }, []);

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto my-10 pt-10">
      <Title
        title="Testimonials"
        subTitle="Stories of Success and Satisfaction"
        desc="Testimonials are brief statements that express satisfaction or approval, often used in marketing to build trust and credibility."
      />

      <div className="max-w-4xl mx-auto my-10">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial?.id}>
              <div className="flex flex-col justify-center items-center gap-4 text-center mb-16">
                <img className="w-20 rounded-full" src={testimonial?.photo_url} alt="User" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    {testimonial?.name}
                  </h4>
                  <p className="text-white">{testimonial?.location}</p>
                </div>
                <p className="w-2/3 md:w-10/12">{testimonial?.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
