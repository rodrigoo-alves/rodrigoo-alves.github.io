import React from 'react';

function Navbar() {
  return (
    <nav className="mb-20 ml-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl mx-2">My Portfolio</h1>
      </div>
      <div className="m-6 items-center justify-center">
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
