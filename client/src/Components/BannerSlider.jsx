import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Button from "./Button";

function BannerSlider() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.postimg.cc/3R65B0bS/close-up-person-cooking.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div className="flex justify-center items-center h-full">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide
            style={{
              height: "100vh",
            }}
          >
            <div className="flex flex-col mx-10 xl:mx-48 h-full justify-center">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl md:w-3/4 lg:w-4/5 xl:w-2/3 capitalize">
              Where taste meets creativity
              </h2>
              <p className="mt-4 mb-10 w-3/4 xl:w-1/2">
                Unleash your inner chef with fresh, flavorful creations. Our
                recipes cater to every palate and occasion, offering
                step-by-step guides that make cooking a joyful and nourishing
                experience for both beginners and seasoned cooks.
              </p>
              <div className="flex gap-4">
                <Button
                  text="See Recipes"
                  style="border-none bg-primary text-white px-6 text-lg"
                />
                <button className="text-black hover:border-none text-lg px-6 bg-white rounded-lg font-semibold hover:text-primary">
                  Add Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "100vh",
            }}
          >
            <div className="flex flex-col mx-10 xl:mx-48 h-full justify-center">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl md:w-3/4 lg:w-4/5 xl:w-2/3 capitalize">
                Spice up your life with our recipes
              </h2>
              <p className="mt-4 mb-10 w-3/4 xl:w-1/2">
                Unleash your inner chef with fresh, flavorful creations. Our
                recipes cater to every palate and occasion, offering
                step-by-step guides that make cooking a joyful and nourishing
                experience for both beginners and seasoned cooks.
              </p>
              <div className="flex gap-4">
                <Button
                  text="See Recipes"
                  style="border-none bg-primary text-white px-6 text-lg"
                />
                <button className="text-black hover:border-none text-lg px-6 bg-white rounded-lg font-semibold hover:text-primary">
                  Add Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "100vh",
            }}
          >
            <div className="flex flex-col mx-10 xl:mx-48 h-full justify-center">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl md:w-3/4 lg:w-4/5 xl:w-2/3 capitalize">
                Where every recipe tells a story
              </h2>
              <p className="mt-4 mb-10 w-3/4 xl:w-1/2">
                Unleash your inner chef with fresh, flavorful creations. Our
                recipes cater to every palate and occasion, offering
                step-by-step guides that make cooking a joyful and nourishing
                experience for both beginners and seasoned cooks.
              </p>
              <div className="flex gap-4">
                <Button
                  text="See Recipes"
                  style="border-none bg-primary text-white px-6 text-lg"
                />
                <button className="text-black hover:border-none text-lg px-6 bg-white rounded-lg font-semibold hover:text-primary">
                  Add Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "100vh",
            }}
          >
            <div className="flex flex-col mx-10 xl:mx-48 h-full justify-center">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl md:w-3/4 lg:w-4/5 xl:w-2/3 capitalize">
                Fueling your passion for cooking
              </h2>
              <p className="mt-4 mb-10 w-3/4 xl:w-1/2">
                Unleash your inner chef with fresh, flavorful creations. Our
                recipes cater to every palate and occasion, offering
                step-by-step guides that make cooking a joyful and nourishing
                experience for both beginners and seasoned cooks.
              </p>
              <div className="flex gap-4">
                <Button
                  text="See Recipes"
                  style="border-none bg-primary text-white px-6 text-lg"
                />
                <button className="text-black hover:border-none text-lg px-6 bg-white rounded-lg font-semibold hover:text-primary">
                  Add Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BannerSlider;
