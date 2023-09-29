import { NavLink } from "react-router-dom";

const NavBar = () => {  
  const links=<>
          <li><NavLink to="/" className="mx-5">Home</NavLink></li>
          <li><NavLink to="/donation" className="mx-5">Donation</NavLink></li>
          <li><NavLink to="/statistics" className="mx-5">Statistics</NavLink></li>
  </>
  return (
    <div className="navbar p-12 px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-2xl font-medium"
          >
            {links}
          </ul>
        </div>
        <img src="https://i.ibb.co/bRjCJxv/Logo.png" alt="Logo" border="0" className="w-64"></img>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-xl font-medium">
        {
          links
        }

        </ul>
      </div>
    </div>
  );
};

export default NavBar;