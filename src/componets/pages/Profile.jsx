import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className=" font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white  shadow-xl">
          {user?.photoURL ? (
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <img
              className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
          )}
          <div className="text-center mt-2 text-3xl font-medium">
            {user?.displayName}
          </div>
          <div className="text-center mt-2 font-light text-sm">
            Email: {user?.email}
          </div>
          <div className="text-center font-normal text-lg">
            Phone: {user?.phoneNumber}
          </div>
          <hr className="mt-8" />
          <div className="flex p-4">
            <div className="w-0 border border-gray-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
