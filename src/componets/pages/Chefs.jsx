import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Chefs = () => {
  const chef = useLoaderData();
  const {
    id,
    ChefName,
    ChefPicture,
    bio,
    YearsOfExperience,
    Likes,
    AllRecipes,
  } = chef;

  return (
    <>
      <div className="flex flex-wrap  md:grid-cols-2 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
        <div className="w-full sm:w-1/3 p-6">
          <img className="w-full h-80 rounded-lg" src={ChefPicture} />
        </div>
        <div className="w-full sm:w-2/3 p-6">
          <h1 className="text-2xl py-3 font-sans font-bold tracking-tight text-gray-700">
            Chef: {ChefName}
          </h1>
          <p className="text-gray-700 py-6 text-base leading-loose">{bio}</p>
          <h2 className="text-xl text-gray-700 font-bold mb-2 ">
            Likes: {Likes}
          </h2>
          <h2 className="text-xl text-gray-700 font-bold mb-2 ">
            Total Recipes: {AllRecipes.length}
          </h2>
          <h2 className="text-xl text-gray-700 font-bold mb-2 ">
            Experience: {YearsOfExperience} Years
          </h2>
        </div>
      </div>

      <>
        <h1 className="text-3xl my-10 font-semibold text-black text-center lg:text-4xl">
          All Recipes
        </h1>
        <div className="container mx-auto flex flex-wrap ">
          {AllRecipes.map((recipe) => (
            <div key={recipe.name} className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-xl hover:shadow rounded-lg px-6 py-4">
                <img
                  src={recipe?.img}
                  alt={recipe?.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{recipe?.name}</h2>
                <p className="text-gray-700 mb-4">
                  <span className="">Ingredients:</span>{" "}
                  {recipe?.ingredients.join(", ")}
                </p>
                <p className="text-gray-700 mb-4">
                  {recipe.cooking_method
                    ? recipe.cooking_method.split(" ").slice(0, 25).join(" ") +
                      "..."
                    : ""}
                </p>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-2">Rating:</span>
                    {Array.from({ length: recipe?.rating }).map((_, index) => (
                      <FaStar
                        key={index}
                        icon="star"
                        className="text-yellow-500"
                      />
                    ))}
                    <span className="ml-2 text-gray-700">
                      ({recipe?.rating})
                    </span>
                  </div>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      toast.success("Added to favorites!");
                      event.target.disabled = true;
                    }}
                  >
                    Add favorite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Chefs;
