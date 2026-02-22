import { Link, NavLink, useNavigate } from "react-router-dom";
import navProfile from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export default function Navber() {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
     logOut() 
     .then(() => { 
      toast.success("User logged out successfully"); 
      navigate("/auth/login");
    }) 
     .catch((error) => { 
      toast.error(`❌ ${error.message}`); 
    }); };

    const links = (<>
     <li><NavLink to={'/'}>Home</NavLink></li>
     <li><NavLink to={'/about'}>About</NavLink></li>
     <li><NavLink to={'/career'}>Career</NavLink></li>
    </>)
  return (
<div className="navbar py-5 px-4 bg-base-100">
  {/* Navbar Start */}
  <div className="navbar-start">
    {/* Dropdown for mobile */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="h-6 w-6" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {links}
      </ul>
    </div>
  </div>

  {/* Navbar Center (hidden on mobile, visible on large screens) */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  {/* Navbar End */}
  <div className="navbar-end flex items-center gap-2.5">
    {/* <img className="w-10 h-10 rounded-full object-cover" src={navProfile} alt="userProfile" /> */}
    {
       user? (
      <> 
      <img className="w-10 h-10 rounded-full object-cover" src={user?.photoURL || navProfile} alt="userProfile" /> 
      <button onClick={handleLogout} className="btn bg-red-400 text-white font-medium border-0" > Logout </button> </>
      )
       : 
      (  
      <>
      <img className="w-10 h-10 rounded-full object-cover" src={navProfile} alt="userProfile" /> 
      <Link to={"/auth/login"} className="btn bg-gray-700 text-white font-medium border-0">Login</Link>
      </>
      )
    }
  </div>
</div>

  )
}
