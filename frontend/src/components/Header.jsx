import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-blue-600">QRCodeAttend</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="btn-outline">
            Login
          </Link>
          <Link to="/register" className="btn-primary">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
