import React from "react";
import ContentTitle from "./contentTitle";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
const ProductDisplay = (props) => {
  const imageURL = ["one.JPG", "two.JPG", "three.JPG", "two.JPG"];
  // const imageURL = [];
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slidesPerView: 3,
    spacing: 10,
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2500);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return (
    <section className="w-full flex flex-col items-center justify-center py-3 ">
      <ContentTitle title={props.title} />
      <div ref={sliderRef} className="keen-slider w-full">
        {imageURL.map((image) => {
          return (
            <div className="keen-slider__slide h-72 md:h-96 lg:h-120 bg-loading bg-no-repeat bg-cover">
              <img
                src={image && `/images/${image}`}
                alt=""
                className="h-full w-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          );
        })}

        {/* {imageURL.length <= 0 && (
          <div className=" flex items-center justify-center h-80 w-full">
            <img
              src="https://freepikpsd.com/media/2019/10/loading-icon-png-6-Transparent-Images.png"
              alt=""
              className="animate-spin w-40 "
            />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ProductDisplay;
