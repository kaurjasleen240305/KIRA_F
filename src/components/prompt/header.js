// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-10 sticky top-0 z-10">
      <div className="container">
        <h1 className="hidden sm:block text-xl font-bold text-center lg-2:text-left ">KIRA (Knowledge Integrated R-Land AI-ChatBot)</h1>
        <h1 className=" block sm:hidden text-xl font-bold text-center lg-2:text-left ">KIRA</h1>
      </div>
    </header>
  );
};

export default Header;
