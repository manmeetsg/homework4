/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <div className="nav">
      <Link to="/">Manmeet Blog</Link>
      <Link to="/posts/new">Create Post</Link>
    </div>
  );
};

export default NavBar;
