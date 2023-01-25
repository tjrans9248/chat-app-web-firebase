import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">seanyang</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgyJUFDJUVCJTlFJThDfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="user"
        />
        <span>sean</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
