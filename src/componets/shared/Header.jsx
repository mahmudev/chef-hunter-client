import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout success");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
  <nav className=" mx-auto md:px-60 flex justify-between py-3 navbar bg-primary text-black z-30 sticky top-0 left-0 right-0">
            <div className="flex justify-between w-full md:w-fit">
            <Link to='/'className="text-xl md:text-2xl font-bold">Tasty HUT</Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-black bg-white dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li><NavLink to='/'className={({ isActive }) => (isActive ? "active" : "default")} >Home</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? "active" : "default")}>Blogs</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "default")}>About Us</NavLink></li>                  
                        {
                            user ? <li><button onClick={handleLogOut} className='btn btn-warning'>Logout</button></li> : <li><Link to='/login' className='btn btn-warning'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
            <div className=" hidden lg:flex">
                <ul className="flex gap-10 items-center">
                   
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")} >Home</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? "active" : "default")}>Blogs</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "default")}>About Us</NavLink></li>
                    {
                        user && <li> <div className="w-10 h-10 rounded-full overflow-hidden" title={user?.displayName}>
                        {user?.photoURL ? (
                          <Link to='/profile'><img className=" hover:cursor-pointer" src={user?.photoURL} alt="User profile picture" /></Link> 
                        ) : (
                          <Link to='/profile'><img className=" hover:cursor-pointer" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Default profile picture" /></Link>
                        )}
                      </div>
                      
                      </li>
                    }
                    {
                        user ? <li><button onClick={handleLogOut} className='btn btn-warning'>Logout</button></li> : <li><Link to='/login' className='btn btn-warning'>Login</Link></li>
                    }
                </ul>
            </div>
        </nav>
  );
};

export default Header;
