import React from 'react';

const ExploreFood = () => {
    return (
        <div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="text-3xl mb-10 font-semibold text-black text-center lg:text-4xl">
          Explore Our Foods
        </h1>
        <p className="text-base text-gray-700 text-center lg:text-lg">
          From classic comfort foods to trendy cuisine, we cover a wide range of
          dishes that will satisfy any craving.
        </p>
      </div>
      <div className="container mx-auto items-center justify-center gap-10 flex flex-wrap ">
        <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            className="w-64 object-cover rounded-t-md"
            src="https://i.ibb.co/7b8G4dL/image.png"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">
           Sandwich
            </h1>
            <p className="text-sm mt-2 text-gray-700">Time: 15 - 20 Minutes | Serves: 1</p>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                $5.99
              </button>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            className="w-64 object-cover rounded-t-md"
            src="https://i.ibb.co/DwNnKZB/image.png"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">
           Burger
            </h1>
            <p className="text-sm mt-2 text-gray-700">Time: 30 - 45 Minutes | Serves: 1</p>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                $14.99
              </button>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            className="w-64 object-cover rounded-t-md"
            src="https://i.ibb.co/cbp5phm/image.png"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">
           French Toast
            </h1>
            <p className="text-sm mt-2 text-gray-700">Time: 10 - 15 Minutes | Serves: 1</p>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                $12.99
              </button>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
};

export default ExploreFood;