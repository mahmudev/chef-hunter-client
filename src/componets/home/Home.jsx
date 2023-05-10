import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import ExploreFood from "./ExploreFood";
const Home = () => {
  const chefs = useLoaderData();

  return (
    <>
      <div className="bg-[url('https://i.ibb.co/T2cXBpQ/home-slide-3-1920x800.jpg')] md:h-[80vh] w-full bg-cover bg-center">
        <div className="flex justify-start items-center w-full h-full backdrop-brightness-50 ">
          <div className="mb-10 lg:max-w-lg lg:pl-60  lg:pr-5 lg:mb-0 p-4 lg:p-10">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h1 className="text-2xl md:text-6xl font-bold text-white">
                Taste Our Delicious Best Foods
              </h1>
              <p className="text-sm md:text-base font-medium text-slate-300 my-3">
                We are thrilled to have you here. Whether you're craving
                something savory or sweet, we've got you covered.
                <br />
                you're sure to find something that will satisfy your taste buds.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row"></div>
          </div>
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl mb-10 font-semibold text-black text-center lg:text-4xl">
          Meet Our Chefs
        </h1>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
      <ExploreFood></ExploreFood>
      <Partners></Partners>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
