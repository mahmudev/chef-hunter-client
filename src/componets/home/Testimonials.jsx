import React from "react";

const Testimonials = () => {
  return (
    <div className="container lg:my-40 mx-auto">
      <h1 className="text-3xl my-10 font-semibold text-black text-center lg:text-4xl">
        What's our customers say
      </h1>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className=" p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <p className="text-gray-600 md:text-xl">
                <span className="font-serif">"</span> "I recently ordered from
                Tasty HUT and I was blown away by the quality of their food! The
                flavors were delicious and everything was cooked to perfection.
                The service was also great - my order arrived quickly and the
                staff were friendly and accommodating. Highly recommend!"
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Jasmine</h6>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide2" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <p className="text-gray-600 md:text-xl">
                {" "}
                <span className="font-serif">"</span> "I've been a regular at
                Tasty HUT for months now and I can't get enough of their amazing
                food! The menu is diverse and always delivers on taste. Every
                dish is made with fresh ingredients and cooked to perfection.
                The staff are also friendly and provide great service. Highly
                recommend this gem of a restaurant!"
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Oliver</h6>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide3" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className=" p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <p className="text-gray-600 md:text-xl">
                {" "}
                <span className="font-serif">"</span> "I had an exceptional
                experience at Tasty HUT! From the moment I walked in, the staff
                were welcoming and attentive. The food was absolutely delicious
                and exceeded my expectations. The portions were generous and the
                presentation was beautiful. Overall, it was a fantastic dining
                experience and I will definitely be coming back for more!"
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Maya</h6>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide4" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className=" p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <p className="text-gray-600 md:text-xl">
                {" "}
                <span className="font-serif">"</span> "I ordered takeout from
                Tasty HUT and the food was still hot and fresh when I got home.
                The flavors were amazing and really hit the spot. I appreciated
                the attention to detail in the packaging, which made it easy to
                transport everything without any spills or messes. Highly
                recommend trying this restaurant!"
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Kai</h6>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide1" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
