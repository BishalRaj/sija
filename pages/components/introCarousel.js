import React from "react";

import { useKeenSlider } from "keen-slider/react";
const images = ["four.JPG", "two.JPG", "three.JPG"];
const IntroCarousel = () => {
  const [opacities, setOpacities] = React.useState([]);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 2000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });
  React.useEffect(() => {
    timer.current = setInterval(() => {
      slider.next();
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [slider]);
  return (
    <section className="w-full sm:h-110 md:h-75vh lg:h-80vh relative">
      <div
        ref={sliderRef}
        className="fader h-64 sm:h-full md:h-full lg:h-full relative"
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="fader__slide h-full w-full overflow-hidden"
            style={{ opacity: opacities[idx] }}
          >
            <img src={`/images/${src}`} />
          </div>
        ))}
      </div>
      {slider && (
        <>
          <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
          <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
        </>
      )}
    </section>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export default IntroCarousel;
