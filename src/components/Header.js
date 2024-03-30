import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
const Header = () => {

  return (
    <>
     <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <Link to="/blogs">Blog Articles</Link>
            </div>
            <div>
                <Link to="/contact">Contact Me</Link>
            </div>
            <div>
                <Link to="/about">About Me</Link>
            </div>

                <hr />
    </>
  );
}

export default Header