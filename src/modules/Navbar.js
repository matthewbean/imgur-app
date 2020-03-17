import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>IMGUR</div>
      <nav>
        <select id='page' className='dropdown'>
          <option value='MostViral'>Most Viral</option>
          <option value='UserSubmitted'>User Submitted</option>
          <option value='HighestScoring'>Highest Scoring</option>
        </select>
        <select id='page2' className='dropdown'>
          <option value='Popular'>Popular</option>
          <option value='Newest'>Newest</option>
          <option value='Best'>Best</option>
          <option value='Random'>Random</option>
        </select>
      </nav>
    </div>
  );
};

export default Navbar;
