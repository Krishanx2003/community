import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './Testimonial.css';

export default function Testimonial() {
  return (
    <div>
      <div>
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="heading">
        <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
          <h1>
            What our customers are
            <br />
            saying
          </h1>
          <h1>
            What our customers are saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div>
                <div>
                  <img
                    src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                    alt="image of profile"
                  />
                  <div>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                  </div>
                </div>
                <div>
                  <h1>Some of the best work that was done!</h1>
                  <p>
                    Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember
                    our customers always comes first, the last thank you should always comes from us.
                  </p>
                </div>
                <div>
                  <p>Anna Smith</p>
                  <p>Senior Web Designer</p>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div>
                <div>
                  <img src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                    alt="image of profile"
                  />
                  <div>
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                  </div>
                </div>
                <div>
                  <h1>Some of the best work that was done!</h1>
                  <p>
                    Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember
                    our customers always comes first, the last thank you should always comes from us.
                  </p>
                </div>
                <div>
                  <p>Anna Smith</p>
                  <p>Senior Web Designer</p>
                </div>
              </div>
            </Slide>
          </Slider>
          <div>
            <ButtonBack role="button" aria-label="previous slide">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
            </ButtonBack>
            <ButtonNext role="button" aria-label="next slide">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
