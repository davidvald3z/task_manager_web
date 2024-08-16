import React from 'react';
import SmallSideBar from './SmallSideBar';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-navy sidebar">
      <div className="sidebar-sticky">
        <SmallSideBar />
      </div>
    </nav>
  );
};

export default Sidebar;
