import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    id,
    ChefName,
    ChefPicture,
    bio,
    YearsOfExperience,
    Likes,
    AllRecipes,
    Location,
  } = chef;
  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-xl hover:shadow rounded-xl">
      <div className="px-2">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative h-48 w-48">
              <LazyLoad>
                <img
                  src={ChefPicture}
                  className="absolute inset-0 h-full w-full object-cover rounded-full"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="flex justify-center pb-0">
            <div className="px-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {YearsOfExperience}
              </span>
              <span className="text-sm text-slate-400">Experience </span>
            </div>
            <div className="px-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {AllRecipes.length}
              </span>
              <span className="text-sm text-slate-400">Recipes</span>
            </div>
            <div className="px-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {Likes}
              </span>
              <span className="text-sm text-slate-400">
                {" "}
                <span></span> Likes
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
            {ChefName}
          </h3>
          <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
            {Location}
          </div>
        </div>
        <div className=" pb-2 border-t border-slate-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <p className="font-light leading-relaxed text-slate-600 mb-2">
                {bio}
              </p>
              <Link to={`/chefs/${id}`} className="btn btn-warning ">
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
