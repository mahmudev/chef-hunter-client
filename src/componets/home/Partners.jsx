import React from 'react';

const Partners = () => {
    return (
        <div className="max-w-xl lg:my-20 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="text-3xl my-10 font-semibold text-black text-center lg:text-4xl">
          Our Partners
        </h1>
        <p className="text-base text-gray-700 text-center lg:text-lg">
          We are glad to offer our visitors high-quality burgers and pizzas, but
          we also believe our whole business couldn’t be successful without our
          partners.
        </p>
        <div className="flex my-10 flex-wrap items-center justify-center gap-10">
          <div className="">
            <img src="https://i.ibb.co/Xz8YZQ7/image.png" alt="" />
          </div>

          <div className="">
            <img src="https://i.ibb.co/MSfx5X3/image.png" alt="" />
          </div>

          <div className="">
            <img src="https://i.ibb.co/dMX5LxR/image.png" alt="" />
          </div>

          <div className="">
            <img src="https://i.ibb.co/cJ2Q7Wm/image.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Partners;